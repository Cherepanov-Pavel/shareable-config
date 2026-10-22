// @ts-expect-error not typed library
import propertyGroups from "stylelint-config-recess-order/groups";
const typedPropertyGroups = propertyGroups as any[];

export const stylelintConfigOrder = {
	plugins: [
		"stylelint-order",
	],
	rules: {
		"order/order": [
			[
				"dollar-variables",
				"custom-properties",
				"declarations",
				{
					type: "at-rule",
					name: "supports",
				},
				"rules",
				{
					type: "at-rule",
					name: "container",
				},
				{
					type: "at-rule",
					name: "media",
				},
			],
			{
				severity: "error",
			},
		],
		"order/properties-order": [
			typedPropertyGroups.map((group) => {
				return {
					...group,
					emptyLineBefore: "always",
					noEmptyLineBetween: true,
				};
			}),
			{
				unspecified: "bottom",
				emptyLineBeforeUnspecified: "always",
				severity: "error",
			},
		],
	},
};
