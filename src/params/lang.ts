import { pages } from '$lib/utils';

export function match(param: string) {
	return Object.keys(pages).includes(param);
}
