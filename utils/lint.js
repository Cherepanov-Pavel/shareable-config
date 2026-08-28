import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);
//  filePaths: string | string[]
export async function eslintFiles(filePaths) {
	const paths = Array.isArray(filePaths)
		? filePaths
		: [
			filePaths,
		];

	const promises = paths.map(async (path) => {
		return execAsync(`eslint ${path} --fix`);
	});

	return Promise.all(promises);
}
