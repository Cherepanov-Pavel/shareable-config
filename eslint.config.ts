import {
  globalConfig,
  jsConfig,
  tsConfig,
  vueConfig,
} from './tools/eslint-config/index.js';

const eslintConfig = [
  ...globalConfig,
  jsConfig,
  tsConfig,
  vueConfig,
];

export function override() {
  // you can override some part of config here, by eslintConfig.push()
  // for the example, uncomment this line:
  // eslintConfig.push({
  //   files: ['**/*.js'],
  //   rules: {
  //     'no-dupe-keys': 'off',
  //   },
  // });
}
override();

export default eslintConfig;

// add later
// {
// 		plugins: {
// 			json,
// 		},
// 	},
// 	{
// 		files: ["**/*.json"],
// 		ignores: ["package-lock.json"],
// 		language: "json/json",
// 		rules: jsonRules
// 	},
// 	{
// 		files: ["**/*.jsonc", ".vscode/*.json"],
// 		language: "json/jsonc",
// 		rules: jsonRules
// 	},
// 	{
// 		files: ["**/*.json5"],
// 		language: "json/json5",
// 		rules: jsonRules
// 	},