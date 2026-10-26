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
import {
	envFileName,
} from "@/modules/shared/constants/file.js";

const {
	isRepositoryUseTypescript: isTs,
} = await getEnvs();

const baseFileName = "eslint.config";
/*
We add .example to the end of the file name so that eslint doesn’t take the configuration from it,
when we look at the library in node_modules.
*/
const srcFileName = "eslint.config.ts.example";
const destFileName = `${baseFileName}.${isTs ? "ts" : "js"}`;

const src = path.join(import.meta.dirname, srcFileName);
const srcFileData = await readFile(src, "utf8");
const srcFileDataReplacedImports = srcFileData.replace(
	/from "\.\/dist\/modules\/eslint-config(?<subpath>[^"]*)"/gu,
	"from \"@cherepanov.pavel/shareable-config/eslint-config$<subpath>\"",
);

const destFile = path.join(process.cwd(), destFileName);

await copyWithOverride({
	destFile,
	srcFileData: srcFileDataReplacedImports,
	fileLabel: destFileName,
	overrideRegexp: "function override()",
	comment: "//",
});

await eslintFiles([
	destFile,
	// Most often, we create the env file before creating the eslint.config file,
	// so, cannot lint this file early
	path.join(process.cwd(), envFileName),
]);
