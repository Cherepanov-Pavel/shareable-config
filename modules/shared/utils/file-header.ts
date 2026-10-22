import pkgJson from "@/package.json" with {type: "json"};

export function getHeader(comment = "//") {
	return `${[
		"This file is generated with",
		pkgJson.repository.url,
		`Version: ${pkgJson.version || ""}`,
		"File may contain override sections, see project README for more details",
	].map((line) => {
		return `${comment} ${line}`.trim();
	})
	.join("\n")}\n`;
}
