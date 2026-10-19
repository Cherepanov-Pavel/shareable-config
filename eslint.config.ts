import {
	globalConfig,
	jsConfig,
	tsConfig,
	vueConfig,
	jsonConfig,
	// @ts-expect-error library is not fully typed yet
} from "./modules/eslint-config";
import {
	OFF,
	WARN,
	ERROR,
	// @ts-expect-error library is not fully typed yet
} from "./modules/eslint-config/constants/severity.js";

const eslintConfig = [
	...globalConfig,
	jsConfig,
	tsConfig,
	vueConfig,
	...jsonConfig,
];

function override() {
	// you can override some part of config here, by eslintConfig.push()
	// for the example, uncomment this line:
	// eslintConfig.push({
	//   files: ['**/*.js'],
	//   rules: {
	//     'no-dupe-keys': OFF,
	//   },
	// });
}
override();

export default eslintConfig;
