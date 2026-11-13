export enum SupportedFrameworks {
	Vue = "vue",
	Nuxt = "nuxt",
	Quasar = "quasar",
	Astro = "astro",
	Nest = "nest",
}

export const frameworksWithVueSupport = [
	SupportedFrameworks.Vue,
	SupportedFrameworks.Nuxt,
	SupportedFrameworks.Quasar,
	SupportedFrameworks.Astro,
] as const;
