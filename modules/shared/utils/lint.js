import {
	ESLint,
} from "eslint";

const eslint = new ESLint({
	fix: true,
});
//  filePaths: string | string[]
export async function eslintFiles(filePaths) {
	const paths = Array.isArray(filePaths)
		? filePaths
		: [
			filePaths,
		];

	const promises = paths.map(async (path) => {
		const results = await eslint.lintFiles([
			path,
		]);

		await ESLint.outputFixes(results);
	});

	return Promise.all(promises);
}
