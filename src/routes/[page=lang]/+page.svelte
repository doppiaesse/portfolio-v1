<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import FloatingNav from '$lib/components/FloatingNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WelcomeSection from '$lib/sections/Welcome.svelte';
	import ProjectsSection from '$lib/sections/Projects.svelte';
	import AboutSection from '$lib/sections/About.svelte';
	import ContactSection from '$lib/sections/Contact.svelte';
	import { language } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;

	language.set(data.language);
</script>

<svelte:head>
	<title>{data.language.head.title}</title>
	<meta name="description" content={data.language.head.description} />
	<meta name="keywords" content={data.language.head.keywords} />
	<meta name="author" content="Simone Salerno" />
</svelte:head>

<Navbar />
<FloatingNav />

<div
	class="flex items-center border-b border-white border-opacity-5 px-4 sm:px-16 lg:px-32 2xl:px-40 min-h-[80vh]"
>
	<WelcomeSection />
</div>

<div
	id={data.language.projects.id}
	class="px-4 sm:px-16 lg:px-32 2xl:px-40 pt-20 pb-24 sm:pt-28 sm:pb-32"
>
	<ProjectsSection />
</div>

<div
	id={data.language.about.id}
	class="border-t border-white border-opacity-5 px-4 sm:px-16 lg:px-32 2xl:px-40 pt-20 pb-24 sm:pt-28 sm:pb-32"
>
	<AboutSection />
</div>

<div
	id={data.language.contact.id}
	class="border-t border-white border-opacity-5 px-4 sm:px-16 lg:px-32 2xl:px-40 pt-20 pb-24 sm:pt-28 sm:pb-32"
>
	<ContactSection />
</div>

<Footer />
