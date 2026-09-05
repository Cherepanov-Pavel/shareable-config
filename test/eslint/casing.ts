/*
"camelcase": [
	OFF,
],
"vue/camelcase": [
	OFF,
],
because all the same manages @typescript-eslint/naming-convention rule.
*/

/*
"vue/component-definition-name-casing": [
	ERROR,
	"PascalCase",
],
"vue/component-name-in-template-casing": [
	ERROR,
	"PascalCase",
	{
		registeredComponentsOnly: false,
	},
],
"vue/component-options-name-casing": [
	ERROR,
	"PascalCase",
],
just read
https://vuejs.org/guide/components/registration.html#component-name-casing
*/
/*
"vue/custom-event-name-casing": [
	ERROR,
	"camelCase",
],
"vue/prop-name-casing": [
	ERROR,
	"camelCase",
],
Following JavaScript conventions, camelCase is more natural.
*/

/*
@typescript-eslint/naming-convention
{
	selector: "default",
	format: [
		"camelCase",
	],
	leadingUnderscore: "forbid",
	trailingUnderscore: "forbid",
},
The primary and only naming convention for variables is camelCase.

This rule previously also allowed UPPER_CASE, both for environment variables and for constants.
Using UPPER_CASE for constants is a widespread convention in the JavaScript/TypeScript community,
and it can make constant values visually distinguishable from other variables,
which some developers find beneficial for readability.

However, I don't see enough practical benefits in using a separate case for constants.
In my opinion, keeping all variables in camelCase results
in a more consistent naming convention without losing any meaningful information,
since const already clearly indicates that a variable cannot be reassigned.

Environment variables are a separate case.
Their names are conventionally written in UPPER_SNAKE_CASE,
but they are usually validated and transformed into camelCase at the application boundary.
This is typically done in a single dedicated file,
where the @typescript-eslint/naming-convention rule can be disabled
or ignored for the relevant declarations.

There is also a practical advantage to keeping constants in camelCase:
they work naturally with shorthand syntax.
With UPPER_CASE, destructuring may require an explicit property alias:

const {
    pageSize: PAGE_SIZE,
} = config;

whereas with camelCase the simpler shorthand syntax can be used:

const {
    pageSize,
} = config;

Therefore, camelCase is intentionally used as the single naming convention for variables,
regardless of whether they are declared with const or let.

Leading and trailing underscores are forbidden because they generally
do not provide meaningful information for ordinary variables and can
often be avoided by choosing a more descriptive name or refactoring the code.


{
	selector: "import",
	format: [
		"camelCase",
		"PascalCase",
	],
},
Pascal case is used here for importing Vue components, and types/classes/constructor functions
*/

/*
{
	selector: "typeLike",
	format: [
		"PascalCase",
	],
	leadingUnderscore: "forbid",
	trailingUnderscore: "forbid",
},
and
{
	selector: "enumMember",
	format: [
		"PascalCase",
	],
	leadingUnderscore: "forbid",
	trailingUnderscore: "forbid",
},

Following the widely accepted convention for naming types,
which is also observed in the TypeScript repository.
https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines
*/
enum Pfarent {
	Todo = 1,
}

/*
Since the backend can be written in any programming language,
the likelihood that it will return/accept camelCase is extremely low.
Therefore, you often see the form declaration
in the case native to the backend, followed by submission.
*/
const backendData = {
	"PascalCase": "case",
	"kebab-case": "case",
	"snake_case": "case",
};
// fetch(backendData)
/*
I understand that we can use a library that changes the case
(for example, https://www.npmjs.com/package/change-case),
or you can ask the backend developers to write a method specifically for our case.
However, the first option is limited by the fact that the more data there is,
the more expensive these transformations will be for the end user; the second option,
to put it mildly, is not always realistic.
*/
