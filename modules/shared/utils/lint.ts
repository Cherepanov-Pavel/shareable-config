import {
	getEnvs,
} from "@/modules/shared/utils/env";
import {
	spawnAsync,
	type SpawnArgs,
} from "@/modules/shared/utils/node";
import {
	spinner as initSpinner,
} from "@clack/prompts";

const spinner = initSpinner();

export async function eslintFiles(
	filePaths: string | string[],
	spawnAsyncOptions?: SpawnArgs[2],
) {
	const {
		isRepositoryUseTypescript: isTs,
	} = await getEnvs();

	spinner.start(
		"Linting file",
	);

	const paths = (
		Array.isArray(
			filePaths,
		)
			? filePaths
			: [
				filePaths,
			]
	);
	const results = paths.map(async (path) => {
		return spawnAsync(
			"npx",
			[
				"eslint",
				path,
				"--fix",
				// so that test/projects don’t pick up the root eslint.config
				"--config",
				`./eslint.config.${isTs ? "ts" : "js"}`,
			],
			spawnAsyncOptions,
		);
	});
	try {
		await Promise.all(
			results,
		);
	} finally {
		spinner.stop(
			"File linted",
		);
	}
}
