import { AppDispatch as OriginalAppDispatch, RootState as OriginalRootState } from 'store';
import { TFunction } from 'i18next';
import { NextRouter } from 'next/router';
declare global {
	interface Window {
		env;
	}

	type CamelCase<S extends string> = S extends `${infer P1}_${infer P2}${infer P3}`
		? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
		: Lowercase<S>;

	type KeysToCamelCase<T> = {
		[K in keyof T as CamelCase<string & K>]: T[K] extends object ? KeysToCamelCase<T[K]> : T[K];
	};
}

export {};
