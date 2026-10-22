import {
	SupportedFrameworks,
} from "@/modules/shared/constants/env";
import JSON5 from "json5";

export async function getSrcJsonFileData({
	fileData,
	isTs = false,
	repositoryFramework = "",
	removeDuplicateKeys = false,
}: {
	fileData: string;
	isTs?: boolean;
	repositoryFramework?: SupportedFrameworks | "";
	removeDuplicateKeys?: boolean;
}) {
	const frameworks = Object.values(SupportedFrameworks);
	const markers = [
		...frameworks,
		"typescript",
	];
	const isFileHaveMarker = markers.some((marker) => {
		return fileData.includes(`// ${marker}`);
	});
	// If there are no typescript and framework comments,
	// there are no unnecessary problems, we return the source file.
	if (!isFileHaveMarker) {
		return fileData;
	}

	const lines = fileData.split("\n");
	const result: string[] = [
	];
	let nextLineIsTypescript = false;
	let nextLineIsTypescriptMultiline = false;
	let nextLineFramework: SupportedFrameworks | undefined;

	lines.forEach((line) => {
		const isLineWithTsComment = line.includes("// typescript");
		if (isLineWithTsComment) {
			if (line.includes("// typescript multiline")) {
				nextLineIsTypescriptMultiline = !(line.includes("// typescript multiline end"));
			} else {
				nextLineIsTypescript = true;
			}
			return;
		}

		const lineFramework = frameworks.find((framework) => {
			return line.includes(`// ${framework}`);
		});
		if (lineFramework) {
			nextLineFramework = lineFramework;
			return;
		}

		const isTypescriptAllowed = isTs || (!nextLineIsTypescript && !nextLineIsTypescriptMultiline);
		const isFrameworkAllowed = repositoryFramework === nextLineFramework || !nextLineFramework;

		if (isTypescriptAllowed && isFrameworkAllowed) {
			result.push(line);
		}

		nextLineIsTypescript = false;
		nextLineFramework = undefined;
	});

	const stringResult = result.join("\n");
	if (removeDuplicateKeys) {
		return JSON.stringify(JSON5.parse(stringResult), null, 2);
	}

	return stringResult;
}
