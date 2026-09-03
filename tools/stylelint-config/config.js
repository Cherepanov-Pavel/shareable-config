import path, {
	dirname,
} from "node:path";
import {
	fileURLToPath,
} from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));
const concat = (...arrays) => {
	return [].concat(...arrays);
};

export default {
	extends: concat(
		[
			"stylelint-config-standard",
			"stylelint-config-standard-vue",
		],
		[
			"./rules/base.js",
			"./rules/stylistic.js",
			"./rules/order.js",
			"./rules/conflicts.js",
		].map((string) => {
			return path.resolve(currentDir, string);
		}),
	),
	plugins: [
		"@stylistic/stylelint-plugin",
	],
};
