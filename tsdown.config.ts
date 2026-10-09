import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: 'src/index.ts',
	publint: 'ci-only',
	attw: {
		enabled: 'ci-only',
		profile: 'esm-only',
		level: 'error',
	},
});
