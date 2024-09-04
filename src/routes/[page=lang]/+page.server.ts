import type { PageServerLoad } from './$types';
import { languages } from '$lib/utils';

export const load = (async ({ params }) => {
	return {
		language: languages[params.page]
	};
}) satisfies PageServerLoad;
