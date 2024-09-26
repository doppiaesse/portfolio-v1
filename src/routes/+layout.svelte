<script lang="ts">
	import type { LayoutData } from './$types';
	import { browser } from '$app/environment';
	import { languages, menuStatus, selectedLanguage, translation } from '$lib/utils';
	import Navbar from '$lib/components/Navbar.svelte';
	import FloatingNav from '$lib/components/FloatingNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/style/globals.css';

	export let data: LayoutData;
	selectedLanguage.set(data.selectedLanguage);
	languages.set(data.languages);
	translation.set({
		global: data.global,
		welcome: data.welcome,
		projects: data.projects,
		about: data.about,
		contact: data.contact
	});

	$: if (browser) {
		document.documentElement.classList.toggle('overflow-hidden', $menuStatus);
		document.documentElement.classList.toggle('sm:overflow-auto', $menuStatus);
	}

	console.log(data);
</script>

<div class="w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mx-auto relative">
	<Navbar />
	<FloatingNav />

	<slot />

	<Footer />
</div>
