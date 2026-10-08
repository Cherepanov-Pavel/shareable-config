import {
	baseConfig,
} from "./modules/stylelint-config/index.js";

const stylelintConfig = {
	extends: [
		baseConfig,
	],
	// You can add other stylelint options here, for example:
	// rules: { ... }
};

export function override() {
	// Example: disable rule color-no-invalid-hex
	// stylelintConfig.rules = {
	//   ...(stylelintConfig.rules || {}),
	//   'color-no-invalid-hex': null,
	// };

	// Example: add one more config
	// stylelintConfig.extends.push('stylelint-config-recommended');
}
override();

export default stylelintConfig;
