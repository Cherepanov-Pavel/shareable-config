

/*
 * LINTING ORDER
 *  1. JS linting through the 'eslint/js'
 *  2. TypeScript linting through 'typescript-eslint'
 *  3. Vue.js linting through 'eslint-plugin-vue'
 *  4. Stylistic changes through '@stylistic/eslint-plugin'
 *  5. Other libraries (e.g 'perfectionistNatural' imports sorting)
 * 
 *  P.S. Fixes running (eslint --fix) on file save. If not you need to
 *  configure through IDEA. 
 */
		import eslint from '@eslint/js'
		import stylistic from '@stylistic/eslint-plugin'
		import eslintPluginJsonc from 'eslint-plugin-jsonc'
		import markdownlintPlugin from 'eslint-plugin-markdownlint'
		import markdownlintParser from 'eslint-plugin-markdownlint/parser.js'
		import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'
		import pluginVue from 'eslint-plugin-vue'
		import globals from 'globals'
		import tseslint from 'typescript-eslint'

		const tsRules = {
			...tseslint.configs.recommended[1].rules,
			...tseslint.configs.recommended[2].rules,
			...tseslint.configs.stylistic[1].rules,
			...tseslint.configs.stylistic[2].rules,
			'@typescript-eslint/init-declarations': 'off',
			'init-declarations': 'off',

			'@typescript-eslint/array-type': 'error',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
		}
		export default [
			{
				ignores: ['dist/', '**/icons/'],
			},
			{
				languageOptions: {
					globals: {
						...globals.browser,
						...globals.node,
						...globals.webextensions,
					},
				},
			},

			eslint.configs.all,
			{
				rules: {
					// Need to discuss, off for now
					/*
					 *'arrow-body-style': [
					 *	'error',
					 *	'always',
					 *],
					 */
					'arrow-body-style': 'off',
					// Backend use the first_name variable names
					'camelcase': 'off',
					'capitalized-comments': 'off',
					'consistent-return': 'off',
					'curly': 'off',
					'id-length': ['error', {
						exceptionPatterns: ['sort', '^a$', '^b$', 'for', '^i$', 'watch', '^_$'],
					}],
					'max-classes-per-file': [
						'error',
						{ ignoreExpressions: false, max: 5 },
					],
					// It's actually bad, but I off this rule for now. Will enable later
					'max-lines': 'off',
					'max-lines-per-function': 'off',
					'max-statements': ['error', { max: 30 }],
					'multiline-comment-style': 'off',
					'new-cap': 'off',
					'no-console': 'off',
					'no-continue': 'off',
					'no-inline-comments': ['error', { ignorePattern: '@vue-ignore' }],
					'no-magic-numbers': 'off',
					'no-negated-condition': 'off',
					'no-plusplus': 'off',
					'no-promise-executor-return': 'off',
					'no-shadow': 'off',
					'no-ternary': 'off',
					'no-undefined': 'off',
					'no-unused-vars': 'warn',
					'no-warning-comments': 'off',
					'one-var': ['error', 'never'],
					'prefer-const': ['error', {
						destructuring: 'all',
						ignoreReadBeforeAssign: false,
					}],
				},
			},
			{
				files: ['**/*.ts', '**/*.js'],
				languageOptions: {
					globals: {
						...globals.browser,
						...globals.node,
						...globals.webextensions,
					},
					parser: tseslint.parser,
					parserOptions: {
						EXPERIMENTAL_useProjectService: {
							maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: Infinity,
						},
					},
				},
				plugins: { '@typescript-eslint': tseslint.plugin },
				rules: { ...tsRules },
			},
			...pluginVue.configs['flat/recommended'],
			{
				files: ['**/*.vue'],
				languageOptions: {
					parserOptions: {
						extraFileExtensions: ['.vue'],
						parser: tseslint.parser,
						project: './tsconfig.app.json',
					},
				},
				plugins: { '@typescript-eslint': tseslint.plugin },
				rules: {
					'no-useless-assignment': 'off',
					...tsRules,
					'vue/attribute-hyphenation': ['error', 'never'],
					'vue/block-lang': ['error',
						{
							script: {
								lang: 'ts',
							},
						},
					],
					'vue/block-order': ['error', {
						order: [
							'script',
							'template',
							'style',
						],
					}],
					// Some troubles with this rule, when define Props type like example, off for now
					/*
					 * 'vue/define-macros-order': ['error', {
					 * defineExposeLast: true,
					 * order: ['defineOptions', 'defineModel', 'defineProps', 'defineEmits', 'defineSlots'],
					 * }], 
					 */
					'vue/define-props-declaration': ['error', 'type-based'],
					'vue/no-required-prop-with-default': ['error', {
						autofix: true,
					}],
					'vue/no-unused-vars': ['warn'],
					'vue/require-default-prop': 'off',
					'vue/v-on-event-hyphenation': ['error', 'never'],
				},
			},

			stylistic.configs.customize({ arrowParens: true }),
			{
				rules: {
					// https://github.com/eslint-stylistic/eslint-stylistic/issues/73
					'@stylistic/max-len': ['error', { code: 160 }],
					// Need to take more time to add these rules, or not add them
					/*
					 *'@stylistic/array-bracket-newline': ['error', { minItems: 3 }],
					 *'@stylistic/array-element-newline': ['error', { ArrayExpression: { minItems: 3 }, ArrayPattern: { minItems: 3 } }],
					 *'@stylistic/object-curly-newline': ['error', {
					 *	ExportDeclaration: 'never',
					 *	ImportDeclaration: 'never',
					 *	ObjectExpression: { minProperties: 3 },
					 *	ObjectPattern: { minProperties: 3 },
					 *}],
					 *'@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
					 */

					'@stylistic/brace-style': ['error', '1tbs'],
					'@stylistic/max-len': 'off',
					'@stylistic/max-statements-per-line': ['error', { max: 1 }],
					'@stylistic/no-multiple-empty-lines': ['error', { max: 2 }],
					'@stylistic/operator-linebreak': ['error', 'after'],
				},
			},

			perfectionistNatural,
			{
				rules: {
					'perfectionist/sort-interfaces': ['error', { 'partition-by-new-line': true, 'type': 'natural' }],
					'perfectionist/sort-objects': ['error', { 'partition-by-new-line': true, 'type': 'natural' }],
					// Because of conflict with https://eslint.vuejs.org/rules/attributes-order.html
					'perfectionist/sort-vue-attributes': 'off',
					'sort-imports': 'off',
					'sort-keys': 'off',
				},
			},

			...eslintPluginJsonc.configs['flat/recommended-with-json5'],
			{
				rules: {
					'jsonc/array-bracket-newline': ['error', { minItems: 1 }],
					'jsonc/array-element-newline': ['error'],
					'jsonc/object-curly-newline': ['error', { minProperties: 1 }],
					'jsonc/object-property-newline': ['error'],

					'jsonc/comma-dangle': ['error', 'never'],
					'jsonc/indent': ['error', 2],
				},
			},

			{
				files: ['**/*.md'],
				languageOptions: {
					parser: markdownlintParser,
				},
				plugins: {
					markdownlint: markdownlintPlugin,
				},
				rules: {
					...markdownlintPlugin.configs.recommended.rules,
					'markdownlint/md013': ['error', { line_length: 160 }],
				},
			},
		]
