import json from "@eslint/json";

export default [
	{
    ignores: ['dist/', '**/icons/'],
  },

	{
		...js.configs.all,
		files: [ "**/*.js" ]
	},
	{
		plugins: {
			json,
		},
	},
	{
		files: ["**/*.json"],
		language: "json/json",
		rules: {
			"json/no-duplicate-keys": "error",
			"json/no-empty-keys": "error",
			"json/no-unsafe-values": "error",
		},
	},
	{
		files: ["**/*.jsonc", ".vscode/*.json"],
		language: "json/jsonc",
		rules: {
			"json/no-duplicate-keys": "error",
			"json/no-empty-keys": "error",
			"json/no-unsafe-values": "error",
		},
	},
	{
		files: ["**/*.json5"],
		language: "json/json5",
		rules: {
			"json/no-duplicate-keys": "error",
			"json/no-empty-keys": "error",
			"json/no-unsafe-values": "error",
		},
	},
];
