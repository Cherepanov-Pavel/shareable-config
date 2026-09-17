import {
	ERROR,
	OFF,
} from "../../constants/severity.js";

export const optionsApiRules = {
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
