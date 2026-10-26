import pkgJson from "@/package.json" with {type: "json"};

export function getPkgJson() {
	return pkgJson;
}

export function getPkgJsonVer() {
	return pkgJson.version;
}
