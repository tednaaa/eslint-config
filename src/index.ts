import type { Options, UserConfigs } from './types';
import antfu from '@antfu/eslint-config';
import { resolveStylistic } from './configs/stylistic';
import { resolveVue } from './configs/vue';

export function defineConfig(options: Options = {}, ...userConfigs: UserConfigs): ReturnType<typeof antfu> {
	return antfu(
		{
			...options,
			stylistic: resolveStylistic(options.stylistic),
			vue: resolveVue(options.vue),
		},
		...userConfigs,
	);
}

export default defineConfig;
