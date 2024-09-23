import { writable } from 'svelte/store';
import type { GlobalTranslation, Language } from './types';

export function handleAnchorClick(event: MouseEvent) {
	event.preventDefault();
	const link = event.currentTarget as HTMLAnchorElement;
	const anchorId = new URL(link.href).hash.replace('#', '');
	const anchor = document.getElementById(anchorId);
	if (anchor) {
		window.scrollTo({
			top: anchor.offsetTop - 40,
			behavior: 'smooth'
		});
	}
}

export const menuStatus = writable(false);
export const translation = writable<GlobalTranslation>();
export const languages = writable<Language[]>();
export const selectedLanguage = writable<string>();
