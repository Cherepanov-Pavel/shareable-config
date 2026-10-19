import pkgJson from "@/package.json" with {type: "json"};

export function getPkgJsonVer() {
	return pkgJson.version;
}
