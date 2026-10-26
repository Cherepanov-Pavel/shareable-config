import {
	jsPossibleProblemRules,
} from "@/modules/eslint-config/rules/javascript/possible-problems";
import {
	jsSuggestionRules,
} from "@/modules/eslint-config/rules/javascript/suggestions";

export const jsRules = {
	...jsPossibleProblemRules,
	...jsSuggestionRules,
};
