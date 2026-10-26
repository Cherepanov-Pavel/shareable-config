import stylisticPlugin from "@stylistic/eslint-plugin";

import {
	jsRules,
} from "../rules/javascript/index.js";
import { jsFormatting } from "@/modules/eslint-config/rules/stylistic/jsFormatting";

export default {
	files: [
		"**/*.*js",
	],
	plugins: {
		"@stylistic": stylisticPlugin,
	},
	languageOptions: {
		sourceType: "module",
		parserOptions: {
			sourceType: "module",
		},
	},
	rules: {
		...jsRules,
		...jsFormatting,
	},
};
