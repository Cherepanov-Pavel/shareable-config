import {
	stylelintConfigBase,
} from "@/modules/stylelint-config/rules/base.ts";
import {
	stylelintConfigConflicts,
} from "@/modules/stylelint-config/rules/conflicts.ts";
import {
	stylelintConfigOrder,
} from "@/modules/stylelint-config/rules/order.ts";
import {
	stylelintConfigStylistic,
} from "@/modules/stylelint-config/rules/stylistic.ts";
import type {
	Config,
} from "stylelint";

export const baseConfig = {
	extends: [
		"stylelint-config-html/astro",
		"stylelint-config-standard",
		"stylelint-config-standard-vue",
	],
	plugins: [
		...stylelintConfigOrder.plugins,
		...stylelintConfigStylistic.plugins,
	],
	rules: {
		...stylelintConfigBase.rules,
		...stylelintConfigConflicts.rules,
		...stylelintConfigOrder.rules,
		...stylelintConfigStylistic.rules,
	} as NonNullable<Config["rules"]>,
};
