import {
	spawnAsync,
} from "@/modules/shared/utils/node";
import {
	spinner as initSpinner,
} from "@clack/prompts";

const spinner = initSpinner();

export async function eslintFiles(filePaths: string | string[]) {
	spinner.start("Linting file");

	const paths = Array.isArray(filePaths)
		? filePaths
		: [
			filePaths,
		];
	const results = paths.map(async (path) => {
		return spawnAsync("eslint", [
			path,
			"--fix",
		]);
	});
	await Promise.all(results);

	spinner.stop("File linted");
}
