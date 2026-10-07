import {
	cancel, isCancel, confirm, select,
} from "@clack/prompts";
import {
	supportedFrameworks,
} from "../constants/index.js";

export async function askTypescript() {
	return unwrapPrompt(confirm({
		message: "Do you use TypeScript?",
		initialValue: true,
	}));
}

export async function askFramework() {
	return unwrapPrompt(select({
		message: "Which framework do you use?",
		options: (
			Object.values(supportedFrameworks)
			.map((value) => {
				return {
					value,
				};
			})
		),
	}));
}

export async function askOptionsApi() {
	return unwrapPrompt(confirm({
		message: "Do you use the Vue options API?",
		initialValue: false,
	}));
}

async function unwrapPrompt(maybeCancelPromise) {
	const result = await maybeCancelPromise;

	if (isCancel(result)) {
		cancel("✖ Operation cancelled");
		process.exit(0);
	}

	return result;
}
