export interface NavigationItem {
	name: string;
	link: string;
}

export interface GlobalTranslation {
	id: number;
	global_id: number;
	languages_code: string;
	title: string;
	keywords: string[];
	navigation: NavigationItem[];
	description: string;
}

export interface Global {
	translations: GlobalTranslation[];
}

export interface Language {
	id: number;
	code: string;
	name: string;
}
