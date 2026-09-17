import {
	execFile,
} from "node:child_process";
import {
	promisify,
} from "node:util";

const execFileAsync = promisify(execFile);
//  filePaths: string | string[]
export async function eslintFiles(filePaths) {
	const paths = Array.isArray(filePaths)
		? filePaths
		: [
			filePaths,
		];

	const promises = paths.map(async (path) => {
		return execFileAsync("eslint", [
			path,
			"--fix",
		]);
	});

	return Promise.all(promises);
}
