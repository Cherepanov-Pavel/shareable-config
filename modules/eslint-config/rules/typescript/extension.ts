import {
	jsSuggestionRules,
} from "@/modules/eslint-config/rules/javascript/suggestions";

import {
	OFF,
} from "@/modules/eslint-config/constants/severity";
import {
	jsPossibleProblemRules,
} from "@/modules/eslint-config/rules/javascript/possible-problems";

export const extensionsRules = {
	"class-methods-use-this": OFF,
	"@typescript-eslint/class-methods-use-this": jsSuggestionRules["class-methods-use-this"],
	"default-param-last": OFF,
	"@typescript-eslint/default-param-last": jsSuggestionRules["default-param-last"],
	"dot-notation": OFF,
	"@typescript-eslint/dot-notation": jsSuggestionRules["dot-notation"],
	"init-declarations": OFF,
	"@typescript-eslint/init-declarations": jsSuggestionRules["init-declarations"],
	"no-array-constructor": OFF,
	"@typescript-eslint/no-array-constructor": jsSuggestionRules["no-array-constructor"],
	"no-empty-function": OFF,
	"@typescript-eslint/no-empty-function": jsSuggestionRules["no-empty-function"],
	"no-implied-eval": OFF,
	"@typescript-eslint/no-implied-eval": jsSuggestionRules["no-implied-eval"],
	"no-invalid-this": OFF,
	"@typescript-eslint/no-invalid-this": jsSuggestionRules["no-invalid-this"],
	"no-loop-func": OFF,
	"@typescript-eslint/no-loop-func": jsSuggestionRules["no-loop-func"],
	"no-magic-numbers": OFF,
	"@typescript-eslint/no-magic-numbers": jsSuggestionRules["no-magic-numbers"],
	"no-redeclare": OFF,
	"@typescript-eslint/no-redeclare": jsSuggestionRules["no-redeclare"],
	"no-restricted-imports": OFF,
	"@typescript-eslint/no-restricted-imports": jsSuggestionRules["no-restricted-imports"],
	"no-shadow": OFF,
	"@typescript-eslint/no-shadow": jsSuggestionRules["no-shadow"],
	"no-throw-literal": OFF,
	// '@typescript-eslint/no-throw-literal': jsSuggestionRules['no-throw-literal'],
	"no-unused-expressions": OFF,
	"@typescript-eslint/no-unused-expressions": jsSuggestionRules["no-unused-expressions"],
	"no-useless-constructor": OFF,
	"@typescript-eslint/no-useless-constructor": jsSuggestionRules["no-useless-constructor"],
	"require-await": OFF,
	"@typescript-eslint/require-await": jsSuggestionRules["require-await"],
	"no-return-await": OFF,
	"@typescript-eslint/return-await": jsSuggestionRules["no-return-await"],

	"no-dupe-class-members": OFF,
	"@typescript-eslint/no-dupe-class-members": jsPossibleProblemRules["no-dupe-class-members"],
	"no-loss-of-precision": OFF,
	"@typescript-eslint/no-loss-of-precision": jsPossibleProblemRules["no-loss-of-precision"],
	"no-unused-vars": OFF,
	"@typescript-eslint/no-unused-vars": jsPossibleProblemRules["no-unused-vars"],
	"no-use-before-define": OFF,
	"@typescript-eslint/no-use-before-define": jsPossibleProblemRules["no-use-before-define"],
};
