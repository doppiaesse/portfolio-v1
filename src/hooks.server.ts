import { pages } from '$lib/utils';

export async function handle({ event, resolve }) {
	const { pathname, origin } = event.url;
	const pathSegments = pathname.split('/').filter(Boolean);

	// Verifica che la rotta sia una sottorotta della lingua corretta
	if (pathSegments.length >= 2) {
		const [lang, sub] = pathSegments;

		// Controlla se la lingua esiste
		if (pages[lang as keyof typeof pages]) {
			// Controlla se la sottorotta è valida per la lingua specificata
			if (!Object.values(pages[lang as keyof typeof pages]).includes(sub)) {
				// Trova la lingua corretta per la sottorotta
				const correctLang = Object.keys(pages).find((key) =>
					Object.values(pages[key as keyof typeof pages]).includes(sub)
				);

				// Se trova una lingua corretta, reindirizza a quella
				if (correctLang) {
					const remainingSegments = pathSegments.slice(2).join('/');
					const redirectUrl = new URL(`/${correctLang}/${sub}/${remainingSegments}`, origin);
					return Response.redirect(redirectUrl.toString(), 302);
				}
			}
		}
	}

	return await resolve(event, {
		filterSerializedResponseHeaders: (key) => {
			return key.toLowerCase() === 'content-type';
		}
	});
}
