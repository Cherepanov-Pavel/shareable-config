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

const fileName = "eslint.config.ts";
const destFile = path.join(process.cwd(), fileName);

const src = path.join(import.meta.dirname, fileName);
const srcFileData = await readFile(src, "utf8");
const srcFileDataReplacedImports = srcFileData.replace(
	/from ["']\.\/modules\/eslint-config(?<subpath>[^"']*)["']/gu,
	"from \"@cherepanov.pavel/shareable-config/eslint-config$<subpath>\"",
);
await copyWithOverride({
	destFile,
	srcFileData: srcFileDataReplacedImports,
	fileLabel: fileName,
	overrideRegexp: "function override()",
	comment: "//",
});
console.log(destFile);
await eslintFiles(destFile);
