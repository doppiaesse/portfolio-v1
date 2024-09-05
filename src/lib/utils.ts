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
	en: {
		id: 'English',
		greeting: 'Hello, world!',
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
		},
		projects: {
			id: 'projects',
			title: 'Projects',
			projects: [
				{
					id: 'lets-code-italia',
					title: "Let's Code Italia",
					description: 'E-learning platform to learn how to code in a simple and fun way.'
				},
				{
					id: 'didattica-integrata',
					title: 'Didattica Integrata',
					description:
						'Platform designed to facilitate the evaluation of your school internship experiences by filling out forms.'
				},
				{
					id: 'doppia-os',
					title: 'doppia.os',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				}
			]
		},
		about: {
			id: 'about',
			title: 'About me',
			description: [
				'Hey there! Nice to meet you.',
				"I'm a tech-loving software developer who's always eager to learn and grow. With experience in both software development and hardware, I'm a versatile problem solver.",
				"Right now, I'm super excited to be exploring the world of freelancing and solopreneurship while also learning the ins and outs of building a startup with a team.",
				"Let's connect and continue the conversation!"
			]
		},
		contact: {
			id: 'contact',
			title: 'Available for select freelance opportunities',
			subtitle:
				'Have an engaging project in mind? Feel free to reach out to me by email or instant message.',
			links: [
				{ name: 'contact@simonesalerno.it', href: 'mailto:contact@simonesalerno.it' },
				{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/simone-salerno/' },
				{ name: 'GitHub', href: 'https://github.com/novakoder/' },
				{ name: 'Instagram', href: 'https://www.instagram.com/novakoder/' },
				{ name: 'X', href: 'https://twitter.com/novakoder' }
			]
		}
	},
	it: {
		id: 'Italiano',
		greeting: 'Ciao, mondo!',
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
		},
		projects: {
			id: 'progetti',
			title: 'Progetti',
			projects: [
				{
					id: 'lets-code-italia',
					title: "Let's Code Italia",
					description:
						'Piattaforma di e-learning per imparare a programmare in modo semplice e divertente.'
				},
				{
					id: 'didattica-integrata',
					title: 'Didattica Integrata',
					description:
						'Piattaforma pensata per facilitare la valutazione delle proprie esperienze di stage scolastici tramite la compilazione di moduli.'
				},
				{
					id: 'doppia-os',
					title: 'doppia.os',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				}
			]
		},
		about: {
			id: 'chi-sono',
			title: 'Chi sono',
			description: [
				'Ehilà! Piacere di conoscerti.',
				'Sono uno sviluppatore di software amante della tecnologia e sempre desideroso di imparare e crescere. Con esperienza sia nello sviluppo di software che di hardware, sono in grado di affrontare sfide di vario genere.',
				"In questo momento, sono davvero felice di esplorare il mondo del freelancing e dell'imprenditoria individuale, mentre imparo i segreti e le dinamiche del costruire una startup con un team.",
				'Connettiamoci e continuiamo la conversazione!'
			]
		},
		contact: {
			id: 'contatti',
			title: 'Disponibile per selezionate opportunità freelance',
			subtitle:
				'Hai in mente un progetto coinvolgente? Sentiti libero di contattarmi tramite e-mail o messaggio.',
			links: [
				{ name: 'contact@simonesalerno.it', href: 'mailto:contact@simonesalerno.it' },
				{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/simone-salerno/' },
				{ name: 'GitHub', href: 'https://github.com/novakoder/' },
				{ name: 'Instagram', href: 'https://www.instagram.com/novakoder/' },
				{ name: 'X', href: 'https://twitter.com/novakoder' }
			]
		}
	}
};

export const language = writable(languages.en);
