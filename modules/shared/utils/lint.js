import {
	ESLint,
} from "eslint";

const eslint = new ESLint({
	fix: true,
});
export async function eslintFiles(filePaths) {
	const paths = (
		Array.isArray(filePaths)
			? filePaths
			: [
				filePaths,
			]
	);
	const results = await eslint.lintFiles(paths);
	await ESLint.outputFixes(results);
	return results;
}
