<script lang="ts">
	import { get } from 'svelte/store';
	import { translation } from '$lib/utils';
	import WelcomeSection from '$lib/sections/Welcome.svelte';
	import ProjectsSection from '$lib/sections/Projects.svelte';
	import AboutSection from '$lib/sections/About.svelte';
	import ContactSection from '$lib/sections/Contact.svelte';

	function sanitizeId(link: string): string {
		return link.startsWith('#') ? link.slice(1) : link;
	}

	const data = get(translation);
</script>

<svelte:head>
	<title>Simone Salerno • {data.global.title}</title>
</svelte:head>

<div
	id="top"
	class="flex items-center justify-center border-b border-white border-opacity-5 px-4 sm:px-8 lg:px-14 min-h-[80vh]"
>
	<WelcomeSection />
</div>

<div
	id={sanitizeId(data.global.navigation[0].link)}
	class="px-4 sm:px-8 lg:px-14 pt-20 pb-24 sm:pt-28 sm:pb-32 2xl:py-36"
>
	<ProjectsSection />
</div>

<div
	id={sanitizeId(data.global.navigation[1].link)}
	class="border-t border-white border-opacity-5 px-4 sm:px-8 lg:px-14 pt-20 pb-24 sm:pt-28 sm:pb-32 2xl:py-36"
>
	<AboutSection />
</div>

<div
	id={sanitizeId(data.global.navigation[2].link)}
	class="border-t border-white border-opacity-5 px-4 sm:px-8 lg:px-14 pt-20 pb-24 sm:pt-28 sm:pb-32 2xl:py-36"
>
	<ContactSection />
</div>
