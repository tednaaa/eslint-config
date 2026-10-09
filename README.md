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
