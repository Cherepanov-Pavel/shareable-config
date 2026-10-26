import {
	globalConfig,
	jsConfig,
	tsConfig,
	vueConfig,
	jsonConfig,
} from "./dist/modules/eslint-config";
import {
	OFF,
	WARN,
	ERROR,
} from "./dist/modules/eslint-config/constants/severity";

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
