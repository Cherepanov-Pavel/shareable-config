import {
	MAX_LEN,
} from "@/modules/eslint-config/constants/rules";
import {
	ERROR, OFF,
} from "@/modules/eslint-config/constants/severity";
import {
	jsRules,
} from "@/modules/eslint-config/rules/javascript";
import {
	jsFormatting,
} from "@/modules/eslint-config/rules/stylistic/jsFormatting";

export const vueExtensionRules = {
	"vue/no-constant-condition": jsRules["no-constant-condition"],
	"vue/no-empty-pattern": jsRules["no-empty-pattern"],
	"vue/no-irregular-whitespace": jsRules["no-irregular-whitespace"],
	"vue/no-loss-of-precision": jsRules["no-loss-of-precision"],
	"vue/no-sparse-arrays": jsRules["no-sparse-arrays"],

	"vue/camelcase": jsRules.camelcase,
	"vue/dot-notation": jsRules["dot-notation"],
	"vue/eqeqeq": jsRules.eqeqeq,
	"vue/no-console": jsRules["no-console"],
	"vue/no-restricted-syntax": jsRules["no-restricted-syntax"],
	"vue/no-useless-concat": jsRules["no-useless-concat"],
	"vue/object-shorthand": jsRules["object-shorthand"],
	"vue/prefer-template": jsRules["prefer-template"],

	"vue/array-bracket-newline": jsFormatting["@stylistic/array-bracket-newline"],
	"vue/array-bracket-spacing": jsFormatting["@stylistic/array-bracket-spacing"],
	"vue/array-element-newline": jsFormatting["@stylistic/array-element-newline"],
	"vue/arrow-spacing": jsFormatting["@stylistic/arrow-spacing"],
	"vue/block-spacing": jsFormatting["@stylistic/block-spacing"],
	"vue/brace-style": jsFormatting["@stylistic/brace-style"],
	"vue/comma-dangle": jsFormatting["@stylistic/comma-dangle"],
	"vue/comma-spacing": jsFormatting["@stylistic/comma-spacing"],
	"vue/comma-style": jsFormatting["@stylistic/comma-style"],
	"vue/dot-location": jsFormatting["@stylistic/dot-location"],
	"vue/func-call-spacing": jsFormatting["@stylistic/function-call-spacing"],
	"vue/key-spacing": jsFormatting["@stylistic/key-spacing"],
	"vue/keyword-spacing": jsFormatting["@stylistic/keyword-spacing"],
	"vue/multiline-ternary": jsFormatting["@stylistic/multiline-ternary"],
	"vue/no-extra-parens": jsFormatting["@stylistic/no-extra-parens"],
	"vue/object-curly-newline": jsFormatting["@stylistic/object-curly-newline"],
	"vue/object-curly-spacing": jsFormatting["@stylistic/object-curly-spacing"],
	"vue/object-property-newline": jsFormatting["@stylistic/object-property-newline"],
	"vue/operator-linebreak": jsFormatting["@stylistic/operator-linebreak"],
	"vue/quote-props": jsFormatting["@stylistic/quote-props"],
	"vue/html-quotes": jsFormatting["@stylistic/quotes"],
	"vue/space-in-parens": jsFormatting["@stylistic/space-in-parens"],
	"vue/space-infix-ops": jsFormatting["@stylistic/space-infix-ops"],
	"vue/space-unary-ops": jsFormatting["@stylistic/space-unary-ops"],
	"vue/template-curly-spacing": jsFormatting["@stylistic/template-curly-spacing"],

	"@stylistic/max-len": [
		OFF,
	],
	"max-len": [
		OFF,
	],
	"vue/max-len": [
		ERROR,
		{
			...MAX_LEN,

			ignoreHTMLAttributeValues: true,
			ignoreHTMLTextContents: true,
		},
	],
};
