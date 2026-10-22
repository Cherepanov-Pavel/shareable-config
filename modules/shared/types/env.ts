import type {
	SupportedFrameworks,
} from "@/modules/shared/constants/env";

export interface Env {
	isRepositoryUseTypescript: boolean;
	repositoryFramework: SupportedFrameworks | "";
	isRepositoryUseOptionsApi: boolean;
}
