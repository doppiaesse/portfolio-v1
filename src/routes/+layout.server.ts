import type { LayoutServerLoad } from './$types';
import getDirectusInstance from '$lib/utils/directus';
import { readItems } from '@directus/sdk';
import type { Global, GlobalTranslation, Language } from '$lib/utils/types';

export const load = (async ({
	params
}): Promise<{
	selectedLanguage: string;
	languages: Language[];
	translation: GlobalTranslation;
}> => {
	const directus = getDirectusInstance(fetch);
	const languageCode = params.page === 'it' ? 'it' : 'en';
	const languages = await directus.request<Language[]>(readItems('languages'));

	const global = await directus.request<Global>(
		readItems('global', {
			deep: {
				translations: {
					_filter: {
						_and: [
							{
								languages_code: { _eq: languageCode }
							}
						]
					}
				}
			},
			fields: [{ translations: ['*'] }],
			limit: 1
		})
	);

	return {
		selectedLanguage: languageCode,
		languages,
		translation: global.translations[0]
	};
}) satisfies LayoutServerLoad;
