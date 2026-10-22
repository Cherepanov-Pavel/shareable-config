import {
	getEnvs,
} from "@/modules/shared/utils/env";
import {
	vueBaseRules,
} from "@/modules/eslint-config/rules/vue/base";
import {
	vueExtensionRules,
} from "@/modules/eslint-config/rules/vue/extension";
import {
	vuePossibleProblemRules,
} from "@/modules/eslint-config/rules/vue/possible-problems";
import {
	vueSuggestionRules,
} from "@/modules/eslint-config/rules/vue/suggestions";
import {
	vueFormattingRules,
} from "@/modules/eslint-config/rules/vue/formatting";
import {
	vueOptionsApiRules,
} from "@/modules/eslint-config/rules/vue/options-api";

const {
	isRepositoryUseOptionsApi,
} = await getEnvs();

export const vueRules = {
	...vueBaseRules,
	...vueExtensionRules,
	...vuePossibleProblemRules,
	...vueSuggestionRules,
	...vueFormattingRules,
	...(() => {
		if (isRepositoryUseOptionsApi) {
			return vueOptionsApiRules;
		}
		return {
		};
	})(),
};
