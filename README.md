# Frontend Configs

Shared ESLint, Stylelint, and editor settings for frontend projects. Use the generated files as a common baseline, then add project-specific overrides where needed.

> Using Quasar? See [Quasar integration](#quasar-integration).

## Getting started

Before setup, remove any existing linting and formatting packages from your project, including `eslint`, `stylelint`, `@stylistic/*`, and `@typescript-eslint/*`. This package installs the versions required by its configs.

Generate the config and editor files:

```sh
npx -p "@cherepanov.pavel/shareable-config" setup
```

Setup generates:

- `eslint.config`
- `stylelint.config`
- `.editorconfig`
- `.gitattributes`
- `.gitignore`
- `.vscode/extensions.json`
- `.vscode/settings.json`
- `.vscode/*.code-snippets*`

To refresh generated files after updating this package, run:

```sh
npx -p "@cherepanov.pavel/shareable-config" update
```

You can also run individual commands to update only selected files. See the `bin` section of this package's `package.json` for the available commands.

## Linting scripts

For convenient linting, add these entries to the `scripts` section of your project's `package.json`. Merge them into your existing `scripts` object if it already exists.

```json
{
  "scripts": {
    "lint": "run-p -lc lint:js lint:css",
    "lint:fix": "run-p -lc lint:js:fix lint:css:fix",
    "lint:js": "eslint",
    "lint:js:fix": "npm run lint:js -- --fix",
    "lint:css": "stylelint \"./**/*.{css,vue,astro}\" --ignore-path .gitignore --formatter verbose",
    "lint:css:fix": "npm run lint:css -- --fix"
  }
}
```

Run `npm run lint` to check JavaScript and CSS, or `npm run lint:fix` to apply automatic fixes.

## Customizing generated files

Add project-specific changes below an `override` marker. When generated files are updated, the shared content above the marker is refreshed while your overrides are kept.

### Non-JSON files

For `.editorconfig`, `.gitattributes`, and `.gitignore`, add `# override` at the end of the file, then put your custom settings below it:

```ini
# Shared settings...

# override
# Project-specific settings...
```

### JSON files

For JSON files, add `// override` inside the object or array you want to customize. Add replacement keys or array items below the marker.

#### Override object keys

The example below replaces `recommendations` and adds `my-recommendations`:

```jsonc
{
  "recommendations": [
    "eamodio.gitlens",
    "vue.volar"
  ],
  // override
  "recommendations": [],
  "my-recommendations": [
    "some-content"
  ]
}
```

#### Add or remove array items

Add new items below `// override`. To remove an existing item, comment it out in the override section:

```jsonc
{
  "recommendations": [
    "eamodio.gitlens",
    "vue.volar",
    // override
    "redhat.vscode-yaml"
    //"vue.volar"
  ]
}
```

In this example, `"redhat.vscode-yaml"` is added and `"vue.volar"` is removed. The same override approach works with nested objects and arrays.

## cSpell

When using cSpell, add project-specific words to `project-words.md` in your project root (one word per line), not to `cSpell.words` in your user or workspace settings. The generated `.vscode/settings.json` configures cSpell to use this shared project dictionary. If you use the quick-fix context menu, choose **Add "word" to dictionary: project-words**.

## Quasar integration

Quasar projects may need a few extra adjustments when using these configs.

### ESLint version

Quasar (`@quasar/app-vite`) declares this ESLint peer dependency:

```text
eslint@"^6.0.0 || ^7.0.0 || >=8.0.0"
```

These configs currently use `eslint@10.12.0`. If npm reports a peer-dependency conflict during installation, create or update `.npmrc` in your project root:

```ini
legacy-peer-deps=true
```

Then install the required ESLint version:

```sh
npm install eslint@10.12.0 -D
```

### Component import casing

Quasar auto-imports components in kebab-case by default, while these configs require PascalCase. In `quasar.config.js`, set:

```js
autoImportComponentCase: 'pascal', // or 'combined'
```

See the [Quasar `autoImportComponentCase` documentation](https://quasar.dev/quasar-cli-vite/quasar-config-file/#framework).

### Config file extensions

If your project doesn't have `"type": "module"` in `package.json`, rename:

- `stylelint.config.js` to `stylelint.config.mjs`
- `eslint.config.js` to `eslint.config.mjs`

For TypeScript config files, use the `.mts` extension instead.
