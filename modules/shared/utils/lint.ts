// import {
// 	execFileAsync,
// } from "@/modules/shared/utils/node.ts";
import {
	exec,
} from "node:child_process";
import {
	promisify,
} from "node:util";
import {
	spinner as initSpinner,
} from "@clack/prompts";
const execAsync = promisify(exec);

const spinner = initSpinner();

export async function eslintFiles(filePaths: string | string[]) {
	spinner.start("Linting file");

	const paths = Array.isArray(filePaths)
		? filePaths
		: [
			filePaths,
		];
	const results = paths.map(async (path) => {
		return execAsync(`eslint ${path} --fix`);
	});
	await Promise.all(results);

	spinner.stop("File linted");
}
