import type { StylisticConfig } from '@antfu/eslint-config';
import type { Options } from '../types';
import { asObject } from '../utils';

const stylisticDefaults: StylisticConfig = {
	quotes: 'single',
	semi: true,
	indent: 'tab',
};

export function resolveStylistic(value: Options['stylistic']) {
	const stylistic = asObject(value);
	return stylistic && { ...stylisticDefaults, ...stylistic };
}
