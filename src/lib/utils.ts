import { writable } from 'svelte/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export const languages = {
	it: {
		navigation: [
			{ name: '// progetti', href: '#progetti' },
			{ name: '// chi sono', href: '#chi-sono' },
			{ name: '// contatti', href: '#contatti' }
		],
		welcome: {
			title: 'Ciao, sono Simone',
			typewriter: ['Sviluppatore Full-Stack', 'Amante della tecnologia', 'Sempre curioso'],
			description: [
				'Sviluppatore full-stack che ama immergersi in progetti innovativi e risolvere problemi.',
				'Seguendo le ultime tendenze del settore, creo soluzioni semplici, efficienti e scalabili che fanno davvero la differenza.'
			]
		}
	},
	en: {
		navigation: [
			{ name: '// projects', href: '#projects' },
			{ name: '// about', href: '#about' },
			{ name: '// contact', href: '#contact' }
		],
		welcome: {
			title: "Hello, I'm Simone",
			typewriter: ['Full-Stack Developer', 'Tech enthusiast', 'Perpetually curious'],
			description: [
				'Full-Stack developer who loves diving into innovative projects and solving problems.',
				'Following the latest industry trends, I create friendly, efficient and scalable solutions that truly make a difference.'
			]
		}
	}
};

export const language = writable(languages.en);
