#!/usr/bin/env node
import path from "path";
import {
	readFile,
	readdir,
} from "fs/promises";
import {
	outputFile,
} from "fs-extra";
import {
	mergeWithOverride,
} from "@/modules/shared/utils/merge.js";
import {
	getHeader,
} from "@/modules/shared/utils/file-header.js";
import {
	getSrcJsonFileData,
} from "@/modules/shared/utils/file.js";
import {
	eslintFiles,
} from "../modules/shared/utils/lint.js";
import {
	getRecreatedMessage,
	getUpdatedWithOverrideMessage,
} from "../modules/shared/utils/messages.js";
import {
	getEnvs,
} from "@/modules/shared/utils/env";


const fileNames = (await readdir(import.meta.dirname)).filter((file) => {
	return file.endsWith(".code-snippets.example");
});

try {
	const {
		isRepositoryUseTypescript: isTs,
	} = await getEnvs();

	/* eslint-disable no-await-in-loop */
	for (const fileName of fileNames) {
		const srcFile = path.join(import.meta.dirname, fileName);
		const srcFileData = await getSrcJsonFileData({
			fileData: await readFile(srcFile, "utf8"),
			isTs,
			removeDuplicateKeys: fileName === "vue.code-snippets",
		});

		const destFileName = fileName.replace(".example", "");
		const destFile = path.join(process.cwd(), ".vscode", destFileName);
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
			console.info(getUpdatedWithOverrideMessage(destFileName));
		} else {
			console.info(getRecreatedMessage(destFileName));
		}
	}
	/* eslint-enable no-await-in-loop */
} catch (err: any) {
	console.error(err.message);
}
