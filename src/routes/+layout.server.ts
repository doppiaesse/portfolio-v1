import type { LayoutServerLoad } from './$types';
import getDirectusInstance from '$lib/utils/directus';
import { readItems } from '@directus/sdk';
import type {
	Global,
	Welcome,
	Language,
	GlobalTranslation,
	WelcomeTranslation,
	AboutTranslation,
	About,
	ContactTranslation,
	Contact,
	Project
} from '$lib/utils/types';
import { pages } from '$lib/utils';

export const load = (async ({
	url
}): Promise<{
	selectedLanguage: string;
	languages: Language[];
	global: GlobalTranslation;
	welcome: WelcomeTranslation;
	projects: Project[];
	about: AboutTranslation;
	contact: ContactTranslation;
}> => {
	const directus = getDirectusInstance(fetch);
	const languageCode = url.pathname.split('/')[1];
	const isLanguageCodeValid = Object.keys(pages).includes(languageCode);
	const languages = await directus.request<Language[]>(readItems('languages'));

	const global = await directus.request<Global>(
		readItems('global', {
			deep: {
				translations: {
					_filter: {
						_and: [
							{
								languages_code: { _eq: isLanguageCodeValid ? languageCode : 'en' }
							}
						]
					}
				}
			},
			fields: [{ translations: ['*'] }],
			limit: 1
		})
	);

	const welcome = await directus.request<Welcome>(
		readItems('welcome', {
			deep: {
				translations: {
					_filter: {
						_and: [
							{
								languages_code: { _eq: isLanguageCodeValid ? languageCode : 'en' }
							}
						]
					}
				}
			},
			fields: [{ translations: ['*'] }],
			limit: 1
		})
	);

	const projects = await directus.request<Project[]>(
		readItems('projects', {
			deep: {
				translations: {
					_filter: {
						_and: [
							{
								languages_code: { _eq: isLanguageCodeValid ? languageCode : 'en' }
							}
						]
					}
				}
			},
			fields: [{ images: ['*'], translations: ['*'] }, 'link']
		})
	);

	const about = await directus.request<About>(
		readItems('about', {
			deep: {
				translations: {
					_filter: {
						_and: [
							{
								languages_code: { _eq: isLanguageCodeValid ? languageCode : 'en' }
							}
						]
					}
				}
			},
			fields: [{ translations: ['*'] }],
			limit: 1
		})
	);

	const contact = await directus.request<Contact>(
		readItems('contact', {
			deep: {
				translations: {
					_filter: {
						_and: [
							{
								languages_code: { _eq: isLanguageCodeValid ? languageCode : 'en' }
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
		selectedLanguage: isLanguageCodeValid ? languageCode : 'en',
		languages,
		global: global.translations[0],
		welcome: welcome.translations[0],
		projects,
		about: about.translations[0],
		contact: contact.translations[0]
	};
}) satisfies LayoutServerLoad;
