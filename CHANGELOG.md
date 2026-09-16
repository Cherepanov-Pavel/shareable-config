# Changelog

## [2.0.0] - 2026-09-16

### Breaking Changes

The public import paths for the ESLint and Stylelint configurations have changed.

#### ESLint configuration

Replace:

```js
import {
	globalConfig,
	jsonConfig,
	jsConfig,
	tsConfig,
	vueConfig,
} from "@cherepanov.pavel/shareable-config/tools/eslint-config/index.js";
```

with:

```js
import {
	globalConfig,
	jsonConfig,
	jsConfig,
	tsConfig,
	vueConfig,
} from "@cherepanov.pavel/shareable-config/eslint-config";
```

#### Stylelint configuration

Replace:

```js
import baseConfig from
	"@cherepanov.pavel/shareable-config/tools/stylelint-config/config.js";
```

with:

```js
import baseConfig from
	"@cherepanov.pavel/shareable-config/stylelint-config";
```

#### ESLint constants

ESLint constants are now available through the public subpath:

```js
import {
	OFF,
	WARN,
	ERROR,
} from "@cherepanov.pavel/shareable-config/eslint-config/constants/severity.js";
```

Update existing imports from the old `tools/` paths when upgrading from version 1.x to version 2.0.0.
