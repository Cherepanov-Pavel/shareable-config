import {
	globalConfig,
	jsConfig,
	tsConfig,
	vueConfig,
	jsonConfig,
} from './tools/eslint-config/index.js';
import stylisticPlugin from '@stylistic/eslint-plugin';

const eslintConfig = [
	...globalConfig,
	jsConfig,
	tsConfig,
	vueConfig,
	...jsonConfig,
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
	eslintConfig.push({
		files: ['**/*.jsx'],
		plugins: {
			'@stylistic': stylisticPlugin,
		},
		languageOptions: {
			sourceType: 'module',
			parserOptions: {
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			'@stylistic/jsx-indent-props': [
				'error',
				'tab',
			],
		},
	});
}
override();

export default eslintConfig;
