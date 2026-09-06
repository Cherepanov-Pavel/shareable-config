/*
"@typescript-eslint/unbound-method": OFF,
*/
/*
I first encountered the specifics of how this rule works when I was writing
code that ESLint reported as erroneous:
await getValidatedQuery(
	event,
	rssQuerySchema({
		rssSourceList,
	}).parse,
);

The rule cannot determine whether the referenced function actually depends
on `this`; it reports any unbound method unless it can prove that the method
does not use `this`.
*/
const items = new Array(5);
const user = {
	name: "Alex",

	getName() {
		return this.name;
	},
	getAge() {
		return 6;
	},
};

/*
This is a legitimate error because `getName` depends on `this`:
*/

items.map(user.getName);

/*
But this is reported as well, even though `getAge` does not depend on `this`:
*/
items.map(user.getAge);

/*
In this case, false positives from this rule are more problematic than
the relatively small number of errors it can prevent.

Therefore, the rule is disabled.
*/
