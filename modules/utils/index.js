import {
	WARN,
	OFF,
} from "../eslint-config/constants/severity.js";


// Returns overrides that disable all warning-level rules in the provided ESLint configuration.
//
// Usage example:
// eslintConfig.push({
// 	files: [
// 		"test/**/*",
// 	],
// 	rules: getDisabledWarningRules(eslintConfig),
// });
export function getDisabledWarningRules(eslintConfig) {
	const warningRules = new Set();
	eslintConfig.forEach((config) => {
		if (!config.rules) {
			return;
		}
		(
			Object.entries(config.rules)
			.forEach(([
				ruleName,
				ruleConfig,
			]) => {
				const severity = (() => {
					if (Array.isArray(ruleConfig)) {
						return ruleConfig[0];
					}
					return ruleConfig;
				})();
				if (severity === WARN) {
					warningRules.add(ruleName);
				}
			})
		);
	});
	return Object.fromEntries(
		[
			...warningRules,
		]
		.map((ruleName) => {
			return [
				ruleName,
				OFF,
			];
		}),
	);
}
