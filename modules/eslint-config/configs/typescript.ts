import tsPlugin from "@typescript-eslint/eslint-plugin";
import stylisticPlugin from "@stylistic/eslint-plugin";

import {
	tsRules,
} from "../rules/typescript/index.js";
import {
	jsFormatting, tsFormatting,
} from "../rules/stylistic/index.js";

import tsParser from "@typescript-eslint/parser";
import {
	jsRules,
} from "../rules/javascript/index.js";

export default {
	files: [
		"**/*.{ts,mts,cts}",
	],
	plugins: {
		"@typescript-eslint": tsPlugin,
		"@stylistic": stylisticPlugin,
	},
	languageOptions: {
		parser: tsParser,
		parserOptions: {
			projectService: true,
			// https://typescript-eslint.io/troubleshooting/typed-linting/performance/#changes-to-extrafileextensions-with-projectservice
			extraFileExtensions: [
				".vue",
			],
		},
	},
	rules: {
		...jsRules,
		...jsFormatting,
		...tsRules,
		...tsFormatting,
	},
};

/*
Measure-Command { npm run lint }
Seconds           : 5
Milliseconds      : 374

if we disable
languageOptions: {
	parser: tsParser,
	parserOptions: {
		projectService: true,
		// https://typescript-eslint.io/troubleshooting/typed-linting/performance/#changes-to-extrafileextensions-with-projectservice
		extraFileExtensions: [
			".vue",
		],
	},
},
and
...tsRules,

Seconds           : 2
Milliseconds      : 606


BTW in npm create vue@latest project, without type aware(vueTsConfigs.recommended)
Seconds           : 2
Milliseconds      : 609

with vueTsConfigs.recommendedTypeChecked
Seconds           : 4
Milliseconds      : 11
*/
