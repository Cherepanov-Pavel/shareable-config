import {
	fileURLToPath, URL,
} from "node:url";
import {
	defineConfig,
} from "vite";

export default defineConfig({
	resolve: {
		alias: {
			"@": fileURLToPath(new URL(".", import.meta.url)),
		},
	},
	build: {
		ssr: true,
		outDir: ".",
		emptyOutDir: false,
		lib: {
			entry: fileURLToPath(new URL("./eslint.config.ts-get.ts", import.meta.url)),
			formats: [
				"es",
			],
			fileName: () => {
				return "eslint.config.ts-get.js";
			},
		},
		rolldownOptions: {
			output: {
				preserveModules: true,
				preserveModulesRoot: ".",

				// Задаем формат имени файлов (код запишется в .js, пути внутри станут относительными)
				entryFileNames: "[name].js",
			},
		},
	},
});
