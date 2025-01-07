import { pages } from '$lib/utils';

export function match(param: string) {
	return Object.values(pages).some((page) => page.includes(param));
}
