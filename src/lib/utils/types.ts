export interface Language {
	id: number;
	code: string;
	name: string;
}

export interface BlockEditor {
	blocks: {
		id: string;
		type: string;
		data: {
			text: string;
		};
	}[];
	time: number;
	version: string;
}

export interface LinkItem {
	name: string;
	link: string;
}

export interface GlobalTranslation {
	id: number;
	global_id: number;
	languages_code: string;
	title: string;
	description: string;
	keywords: string[];
	navigation: LinkItem[];
}

export interface Global {
	translations: GlobalTranslation[];
}

export interface WelcomeTranslation {
	id: number;
	welcome_id: number;
	languages_code: string;
	title: string;
	description: BlockEditor;
	typewriter: string[];
}

export interface Welcome {
	translations: WelcomeTranslation[];
}

export interface AboutTranslation {
	id: number;
	about_id: number;
	languages_code: string;
	title: string;
	description: BlockEditor;
}

export interface About {
	translations: AboutTranslation[];
}

export interface ContactTranslation {
	id: number;
	contact_id: number;
	languages_code: string;
	title: string;
	subtitle: string;
	links: LinkItem[];
}

export interface Contact {
	translations: ContactTranslation[];
}

export interface Translation {
	global: GlobalTranslation;
	welcome: WelcomeTranslation;
	about: AboutTranslation;
	contact: ContactTranslation;
}
