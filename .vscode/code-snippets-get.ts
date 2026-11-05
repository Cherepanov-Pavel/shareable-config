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
import {
	frameworksWithVueSupport,
	SupportedFrameworks,
} from "@/modules/shared/constants/env";
import type {
	Env,
} from "@/modules/shared/types/env";


const fileNames = (await readdir(
	import.meta.dirname,
)).filter((file) => {
	return file.endsWith(
		".code-snippets.example",
	);
});

try {
	const {
		isRepositoryUseTypescript: isTs,
		repositoryFramework,
	} = await getEnvs();

	/* eslint-disable no-await-in-loop */
	for (const fileName of fileNames) {
		if (!isRepositoryFrameworkShouldHaveCodeSnippet({
			repositoryFramework,
			codeSnippetFileName: fileName,
		})) {
			continue;
		}


		const srcFile = path.join(
			import.meta.dirname,
			fileName,
		);
		const srcFileData = await getSrcJsonFileData({
			fileData: await readFile(
				srcFile,
				"utf8",
			),
			isTs,
			removeDuplicateKeys: fileName === "vue.code-snippets.example",
		});

		const destFileName = fileName.replace(
			".example",
			"",
		);
		const destFile = path.join(
			process.cwd(),
			".vscode",
			destFileName,
		);
		let destFileData;
		let isDestFileHaveOverride;
		try {
			destFileData = await readFile(
				destFile,
				"utf8",
			);
			isDestFileHaveOverride = destFileData.includes(
				"// override",
			);
		} catch (err) {}

		let result;
		if (isDestFileHaveOverride) {
			result = await mergeWithOverride(
				srcFileData,
				destFileData,
			);
		} else {
			result = srcFileData;
		}

		await outputFile(
			destFile,
			`${getHeader()}${result}`,
		);

		if (isDestFileHaveOverride) {
			console.info(
				getUpdatedWithOverrideMessage(
					destFileName,
				),
			);
		} else {
			console.info(
				getRecreatedMessage(
					destFileName,
				),
			);
		}

		await eslintFiles(
			destFile,
		);
	}
	/* eslint-enable no-await-in-loop */
} catch (err: any) {
	console.error(
		err.message,
	);
}

function isRepositoryFrameworkShouldHaveCodeSnippet({
	repositoryFramework,
	codeSnippetFileName,
}: {
	repositoryFramework: Env["repositoryFramework"];
	codeSnippetFileName: string;
}) {
	const fileNameBase = codeSnippetFileName.split(
		".",
	)[0];

	if (fileNameBase === "all-files") {
		return true;
	}

	if (
		fileNameBase === SupportedFrameworks.Vue
	) {
		return frameworksWithVueSupport.some(
			(
				framework,
			) => {
				return framework === repositoryFramework;
			},
		);
	}

	return repositoryFramework === fileNameBase;
}
