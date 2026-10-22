import {
	baseConfig,
} from "./dist/modules/stylelint-config";

const stylelintConfig = {
	...baseConfig,
};

function override() {
	// Example: disable rule color-no-invalid-hex
	// stylelintConfig.rules["color-no-invalid-hex"] = null;

	// Example: add one more config
	// stylelintConfig.extends.push("stylelint-config-recommended");
}
override();

export default stylelintConfig;
