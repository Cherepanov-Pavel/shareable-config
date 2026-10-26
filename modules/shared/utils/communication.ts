import {
	SupportedFrameworks,
} from "@/modules/shared/constants/env";
import type {
	Env,
} from "@/modules/shared/types/env";
import {
	cancel, isCancel, confirm, select,
	type CANCEL_SYMBOL,
} from "@clack/prompts";

export async function askTypescript() {
	return unwrapPrompt(confirm({
		message: "Do you use TypeScript?",
		initialValue: true,
	}));
}

export async function askFramework() {
	const options = [
		...(
			Object.values(SupportedFrameworks)
			.map((value) => {
				return {
					value,
				};
			})
		),
		{
			value: "" as Env["repositoryFramework"],
			label: "None of the listed ones (copy only the framework-less)",
		},
	];
	return unwrapPrompt(select<Env["repositoryFramework"]>({
		message: "Which framework do you use?",
		options,
	}));
}

export async function askOptionsApi() {
	return unwrapPrompt(confirm({
		message: "Do you use the Vue options API?",
		initialValue: false,
	}));
}

async function unwrapPrompt<PromiseResult>(
	maybeCancelPromise: Promise<PromiseResult | typeof CANCEL_SYMBOL>,
): Promise<PromiseResult> {
	const result = await maybeCancelPromise;

	if (isCancel(result)) {
		cancel("✖ Operation cancelled");
		process.exit(0);
	}

	return result;
}
