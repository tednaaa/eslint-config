import type antfu from '@antfu/eslint-config';

export type Options = NonNullable<Parameters<typeof antfu>[0]>;

export type UserConfigs = Parameters<typeof antfu> extends [options?: unknown, ...rest: infer Rest] ? Rest : never;
