import {
	ERROR, OFF,
} from "@/modules/eslint-config/constants/severity";


export const vueOptionsApiRules = {
	"vue/component-api-style": [
		OFF,
	],
	"vue/component-options-name-casing": [
		ERROR,
		"PascalCase",
	],
	"vue/match-component-file-name": [
		ERROR,
		{
			extensions: [
				"vue",
			],
			shouldMatchCase: true,
		},
	],
};
