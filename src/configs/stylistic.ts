import type { StylisticConfig } from '@antfu/eslint-config';
import type { Options } from '../types';
import { asObject } from '../utils';

export const stylisticDefaults = {
	quotes: 'single',
	semi: true,
	indent: 'tab',
} as const satisfies StylisticConfig;

export function resolveStylistic(value: Options['stylistic']) {
	const stylistic = asObject(value);
	return stylistic && { ...stylisticDefaults, ...stylistic };
}
