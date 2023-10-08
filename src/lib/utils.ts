import { writable } from 'svelte/store';

export function handleAnchorClick(event: any) {
	event.preventDefault();
	const link = event.currentTarget;
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

export const navigation = {
	it: [
		{ name: '// progetti', href: '#progetti' },
		{ name: '// chi sono', href: '#chi-sono' },
		{ name: '// contatti', href: '#contatti' }
	],
	en: [
		{ name: '// projects', href: '#projects' },
		{ name: '// about', href: '#about' },
		{ name: '// contact', href: '#contact' }
	]
};
