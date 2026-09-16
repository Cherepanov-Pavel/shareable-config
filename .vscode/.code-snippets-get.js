#!/usr/bin/env node

import path from "path";
import {
	readFile,
} from "fs/promises";
import {
	outputFile,
} from "fs-extra";
import {
	mergeWithOverride,
} from "../modules/shared/utils/merge.js";
import {
	getHeader,
} from "../modules/shared/utils/file-header.js";
import {
	getSrcJSONFileData,
} from "../modules/shared/utils/file.js";
import {
	getEnvs,
} from "../modules/shared/utils/env.js";
import {
	eslintFiles,
} from "../modules/shared/utils/lint.js";

const fileNames = [
	"vue.code-snippets",
	"all-files.code-snippets",
];

try {
	const {
		isRepositoryUseTypescript: isTs,
	} = await getEnvs();

	fileNames.forEach(async (fileName) => {
		const srcFileData = await getSrcJSONFileData({
			fileName,
			isTs,
			removeDuplicateKeys: fileName === "vue.code-snippets",
		});

		const destFile = path.join(process.cwd(), `.vscode/${fileName}`);
		let destFileData;
		let isDestFileHaveOverride;
		try {
			destFileData = await readFile(destFile, "utf8");
			isDestFileHaveOverride = destFileData.includes("// override");
		} catch (err) {}

		let result;
		if (isDestFileHaveOverride) {
			result = await mergeWithOverride(srcFileData, destFileData);
		} else {
			result = srcFileData;
		}

		await outputFile(destFile, `${getHeader()}${result}`);
		await eslintFiles(destFile);
		if (isDestFileHaveOverride) {
			console.info(`${fileName} обновлён с учётом override`);
		} else {
			console.info(`${fileName} пересоздан`);
		}
	});
} catch (err) {
	console.error("Ошибка:", err.message);
}
