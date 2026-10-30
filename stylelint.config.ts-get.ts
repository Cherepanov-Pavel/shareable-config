#!/usr/bin/env node

import path from "path";
import {
	readFile,
} from "fs/promises";
import {
	copyWithOverride,
} from "@/modules/shared/utils/copy-with-override.js";
import {
	eslintFiles,
} from "@/modules/shared/utils/lint.js";
import {
	getEnvs,
} from "@/modules/shared/utils/env.js";

const {
	isRepositoryUseTypescript: isTs,
} = await getEnvs();

const baseFileName = "stylelint.config";
/*
We add .example to the end of the file name so that eslint doesn’t take the configuration from it,
when we look at the library in node_modules.
*/
const srcFileName = "stylelint.config.ts.example";
const destFileName = `${baseFileName}.${isTs ? "ts" : "js"}`;

const src = path.join(import.meta.dirname, srcFileName);
const srcFileData = await readFile(src, "utf8");
const srcFileDataReplacedImports = (
	srcFileData
	.replace(
		/from "\.\/dist\/modules(?<subpath>[^"]*)"/gu,
		"from \"@cherepanov.pavel/shareable-config$<subpath>\"",
	)
	.replace(
		"/index.js",
		"",
	)
);

const destFile = path.join(process.cwd(), destFileName);

await copyWithOverride({
	destFile,
	srcFileData: srcFileDataReplacedImports,
	fileLabel: destFileName,
	overrideRegexp: "function override()",
	comment: "//",
});

await eslintFiles(destFile);
