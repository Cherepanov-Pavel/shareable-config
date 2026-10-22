import {
	defineConfig,
} from "vite";
import {
	readFile,
} from "node:fs/promises";
import {
	join,
} from "node:path";
import {
	dts,
} from "rolldown-plugin-dts";
import {
	generatedFilePathList,
} from "./modules/shared/constants/file.ts";
import pkgJson from "./package.json" with {type: "json"};


export default defineConfig({
	build: {
		rolldownOptions: {
			plugins: [
				dts({
					entry: [
						"**/*.ts",
					],
				}),
			],
			output: {
				entryFileNames: "[name].js",
				preserveModules: true,
				preserveModulesRoot: ".",
			},
		},
		emptyOutDir: true,
		lib: {
			entry: [
				...(
					Object.values(pkgJson.bin)
					.map((path) => {
						return (
							path
							.replace("dist/", "")
							.replace(/".js^"/u, ".ts")
						);
					})
				),
				...(
					Object.values(pkgJson.exports)
					.filter((libExport) => {
						return typeof libExport !== "string";
					})
					.map((libExport) => {
						return (
							libExport.import
							.replace("/dist/", "")
							.replace(/".js^"/u, ".ts")
						);
					})
				),
			],
			formats: [
				"es",
			],
			fileName: (format, entryName) => {
				return `${entryName}.js`;
			},
		},
		ssr: true,
	},
	resolve: {
		tsconfigPaths: true,
	},
	plugins: [
		{
			name: "copyFiles",
			async generateBundle() {
				generatedFilePathList.forEach(async (filePath) => {
					this.emitFile({
						type: "asset",
						fileName: `${filePath}.example`,
						source: await readFile(join(import.meta.dirname, filePath), "utf8"),
					});
				});
			},
		},
	],
	/*
		Keep generated declaration files out of Oxc's transform; otherwise, it strips
		their type declarations and leaves files containing only `export {}`.
	*/
	oxc: {
		exclude: /\.d\.(?:ts)$/u,
	},
});
