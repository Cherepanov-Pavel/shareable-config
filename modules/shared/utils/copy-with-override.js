import {
	readFile,
} from "fs/promises";
import {
	getHeader,
} from "./file-header.js";
import {
	outputFile,
} from "fs-extra";
import {
	getRecreatedMessage,
	getUpdatedWithOverrideMessage,
} from "./messages.js";

export async function copyFile({
	destFile, srcFileData, fileLabel,
}) {
	// Если файла нет — просто создаём его
	try {
		await readFile(destFile, "utf8");
	} catch {
		await outputFile(destFile, `${getHeader("#")}${srcFileData}`);
		console.info(getRecreatedMessage(fileLabel));
		return {
		};
	}

	// Если файл есть — разбираем оба файла
	const destFileData = await readFile(destFile, "utf8");
	// Ищем строку override (без учёта регистра)
	const overrideRegex = /^# override.*$/imu;
	const match = destFileData.match(overrideRegex);
	if (!match) {
		await outputFile(destFile, `${getHeader("#")}${srcFileData}`);
		console.info(getRecreatedMessage(fileLabel));
		return {
		};
	}

	return {
		destFileData,
		match,
	};
}

export async function copyWithOverride({
	destFile, srcFileData, fileLabel = "",
}) {
	try {
		const {
			destFileData, match,
		} = await copyFile({
			destFile,
			srcFileData,
			fileLabel,
		});
		if (!destFileData) {
			return;
		}

		const overrideIndex = destFileData.indexOf(match[0]);
		const preserved = destFileData.slice(overrideIndex);
		const newContent = `${srcFileData.trimEnd()}\n\n${preserved.trimStart()}`;

		await outputFile(destFile, `${getHeader("#")}${newContent}`);
		console.info(getUpdatedWithOverrideMessage(fileLabel));
	} catch (err) {
		console.error(`Ошибка копирования ${fileLabel}:`, err.message);
	}
}
