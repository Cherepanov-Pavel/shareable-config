import {
	ERROR,
} from "../severity";

export const optionsApiRules = {
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
