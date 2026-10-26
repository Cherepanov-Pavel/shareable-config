import vuePlugin from "eslint-plugin-vue";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import stylisticPlugin from "@stylistic/eslint-plugin";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import { jsFormatting } from "@/modules/eslint-config/rules/stylistic/jsFormatting";
import { tsFormatting } from "@/modules/eslint-config/rules/stylistic/tsFormatting";
import { getEnvs } from "@/modules/shared/utils/env";
import { jsRules } from "@/modules/eslint-config/rules/javascript";
import { vueRules } from "@/modules/eslint-config/rules/vue";
import { tsRules } from "@/modules/eslint-config/rules/typescript";

// https://github.com/sveltejs/eslint-plugin-svelte/issues/152#issuecomment-1150803175
const {
	isRepositoryUseTypescript: isTs,
} = await getEnvs();

export default {
	files: [
		"**/*.vue",
	],
	plugins: {
		"vue": vuePlugin,
		"@stylistic": stylisticPlugin,

		...(
			isTs
				? {
					"@typescript-eslint": tsPlugin,
				}
				: {
				}),
	},
	languageOptions: {
		parser: vueParser,
		parserOptions: {
			parser: isTs ? tsParser : "espree",
			...(
				isTs
					? {
						projectService: true,
					}
					: {
					}),
			extraFileExtensions: [
				".vue",
			],
		},
	},
	rules: {
		...jsRules,
		...jsFormatting,
		...vueRules,
		...(isTs
			? tsRules
			: {
			}),
		...(isTs
			? tsFormatting
			: {
			}),
	},
};
