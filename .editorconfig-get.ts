#!/usr/bin/env node

import path from "path";
import {
	copyWithOverride,
} from "@/modules/shared/utils/copy-with-override.js";
import {
	readFile,
} from "fs/promises";

const baseFileName = ".editorconfig";
const srcFileName = `${baseFileName}.example`;
const destFileName = baseFileName;
const destFile = path.join(process.cwd(), destFileName);

const srcFile = path.join(import.meta.dirname, srcFileName);
const srcFileData = await readFile(srcFile, "utf8");

await copyWithOverride({
	destFile,
	srcFileData,
	fileLabel: destFileName,
});
