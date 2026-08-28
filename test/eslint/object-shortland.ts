// avoidQuotes = false(default)
// for more consistent codebase

// ignoreConstructors = true
/*
https://javascript.info/constructor-new#constructor-function
constructor function can be a property of any object
for example:
*/
let ignoreConstructors = {
	value: "",
	// eslint-disable-next-line @typescript-eslint/naming-convention
	SomeConstructorFn: function (value: string) {
		this.value = value;
	},
};
// @ts-expect-error for test purpose
// eslint-disable-next-line @typescript-eslint/unbound-method
const instance = new ignoreConstructors.SomeConstructorFn(42);
// If ESLint were allowed to change SomeConstructorFn to:
ignoreConstructors = {
	"value": "",
	// eslint-disable-next-line @typescript-eslint/naming-convention
	SomeConstructorFn(value: string) {
		this.value = value;
	},
};

/*
the behavior of the program would change as a result of applying the linting rule.
A regular function can be used as a constructor with the new operator,
whereas an object method cannot be used as a constructor.
Therefore, such a transformation can change the program's behavior, which should be avoided.
*/

// avoidExplicitReturnArrows = false(default)
// For example:
let avoidExplicitReturnArrows = {
	"value": 42,

	"foo": (bar: number, baz: number) => {
		// @ts-expect-error for test purpose
		// eslint-disable-next-line @typescript-eslint/no-invalid-this
		return this.value;
	},
	bar() {
		return this.value;
	},
};
// If ESLint were allowed to change foo to:
avoidExplicitReturnArrows = {
	"value": 42,

	foo() {
		return this.value;
	},
	bar() {
		return this.value;
	},
};
/*
the behavior of the program would change as a result of applying the linting rule.

The arrow function does not have its own this and captures it from the surrounding lexical scope,
whereas the method would have its own this, which would refer to obj when called as obj.foo().

Therefore, such a transformation can change the program's behavior, which should be avoided.
*/
