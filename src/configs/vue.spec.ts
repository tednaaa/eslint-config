import { describe, expect, it } from 'vitest';
import { resolveVue } from './vue';

describe('resolveVue', () => {
	it('replaces a shared rule with the project override and keeps the rest', () => {
		const vue = resolveVue({ overrides: { 'vue/enforce-style-attribute': ['error', { allow: ['module'] }] } });

		expect(vue && vue.overrides['vue/enforce-style-attribute']).toEqual(['error', { allow: ['module'] }]);
		expect(vue && vue.overrides['vue/block-order']).toEqual(['error', { order: ['script', 'template', 'style'] }]);
	});

	it('stays disabled when the project turns vue off', () => {
		expect(resolveVue(false)).toBe(false);
	});

	it('stays disabled when vue is not installed and not requested', () => {
		expect(resolveVue(undefined)).toBe(false);
	});
});
