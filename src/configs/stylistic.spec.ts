import { expect, it } from 'vitest';
import { resolveStylistic } from './stylistic';

it('merges project stylistic options over the shared defaults', () => {
	expect(resolveStylistic({ indent: 2 })).toEqual({ quotes: 'single', semi: true, indent: 2 });
});
