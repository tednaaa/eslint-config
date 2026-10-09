# @tednaaa/eslint-config

Personal ESLint config built on [@antfu/eslint-config](https://github.com/antfu/eslint-config).

## Install

```sh
pnpm add -D @tednaaa/eslint-config eslint jiti
```

> `jiti` is only needed for an `eslint.config.ts`.

## Usage

```ts
import { defineConfig } from '@tednaaa/eslint-config';

export default defineConfig();
```

`defineConfig` takes the same arguments as `antfu()`: options first, then any extra flat configs.

## Overriding

```ts
export default defineConfig({
	stylistic: { indent: 2 },
	vue: {
		overrides: {
			'vue/enforce-style-attribute': ['error', { allow: ['module'] }],
		},
	},
});
```

> `stylistic.indent` doesn't reach Vue templates: override `vue/html-indent` too.

## Formatting

ESLint is the only formatter. Don't add Prettier or turn off `stylistic`.

- Lint with `eslint --fix` before committing.
- Turn off the editor's own formatter and run ESLint fixes on save instead. For Zed, copy [`.zed/settings.json`](.zed/settings.json).
