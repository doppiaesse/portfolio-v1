import { get, writable } from 'svelte/store';
import type { Language, Translation } from './types';
import { goto } from '$app/navigation';

export function handleAnchorClick(event: MouseEvent) {
	event.preventDefault();
	const link = event.currentTarget as HTMLAnchorElement;
	const anchorId = new URL(link.href).hash;

	if (anchorId.startsWith('#')) {
		const id = anchorId.replace('#', '');
		const anchor = document.getElementById(id);

		if (anchor) {
			window.scrollTo({
				top: anchor.offsetTop - calculateOffset(id),
				behavior: 'smooth'
			});
		}
	} else {
		goto(link.href);
	}
}

export function calculateOffset(anchorId: string): number {
	const offsets: { [key: string]: number } = {
		partner: 300,
		servizi: 160,
		contatti: 100
	};

	return offsets[anchorId] || 50;
}

export const pages = {
	'it': [
		'progetti',
	],
	'en': [
		'projects',
	],
};

export const menuStatus = writable(false);
export const translation = writable<Translation>();
export const languages = writable<Language[]>();
export const selectedLanguage = writable<string>();
