import {
	baseRules,
} from "./base.js";
import {
	extensionRules,
} from "./extension.js";
import {
	possibleProblemRules,
} from "./possible-problems.js";
import {
	suggestionRules,
} from "./suggestions.js";
import {
	formattingRules,
} from "./formatting.js";
import {
	getEnvs,
} from "../../../../utils/env.js";
import {
	optionsApiRules,
} from "./options-api.js";

const {
	isRepositoryUseOptionsApi,
} = getEnvs();

export const vueRules = {
	...baseRules,
	...extensionRules,
	...possibleProblemRules,
	...suggestionRules,
	...formattingRules,
	...(() => {
		if (isRepositoryUseOptionsApi) {
			return optionsApiRules;
		}
		return {};
	})(),
};
