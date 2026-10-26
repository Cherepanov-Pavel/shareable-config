import {
	join,
} from "node:path";

export const envFileName = "shareable-config.env.json5";
export const eslintConfigExampleFileName = "eslint.config.ts.example";
export const stylelintConfigExampleFileName = "stylelint.config.ts.example";

export const generatedFilePathList = [
	"eslint.config.ts",
	"stylelint.config.ts",
	".editorconfig",
	".gitattributes",
	".gitignore",
	join(".vscode", "extensions.json"),
	join(".vscode", "settings.json"),
	join(".vscode", "all-files.code-snippets"),
	join(".vscode", "astro.code-snippets"),
	join(".vscode", "vue.code-snippets"),
];
