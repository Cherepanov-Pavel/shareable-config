import path, {
	dirname,
} from "node:path";
import {
	fileURLToPath,
} from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));

export const baseConfig = {
	extends: [
		...[
			"stylelint-config-html/astro",
			"stylelint-config-standard",
			"stylelint-config-standard-vue",
		],
		...[
			"./rules/base.js",
			"./rules/stylistic.js",
			"./rules/order.js",
			"./rules/conflicts.js",
		].map((string) => {
			return path.resolve(currentDir, string);
		}),
	],
	plugins: [
		"@stylistic/stylelint-plugin",
	],
};
