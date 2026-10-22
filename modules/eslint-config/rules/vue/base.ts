import {
	ERROR, OFF,
} from "@/modules/eslint-config/constants/severity";


export const vueBaseRules = {
	"vue/comment-directive": [
		OFF,
	],
	"vue/jsx-uses-vars": [
		ERROR,
	],
};
