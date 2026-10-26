import {
	getPkgJsonVer,
} from "@/modules/shared/utils/package-json.ts";

export function getLibTarballName() {
	return `cherepanov.pavel-shareable-config-${getPkgJsonVer()}.tgz`;
}
