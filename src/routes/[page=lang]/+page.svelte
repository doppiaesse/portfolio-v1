<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import FloatingNav from '$lib/components/FloatingNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WelcomeSection from '$lib/sections/Welcome.svelte';
	import ProjectsSection from '$lib/sections/Projects.svelte';
	import AboutSection from '$lib/sections/About.svelte';
	import ContactSection from '$lib/sections/Contact.svelte';
	import { get } from 'svelte/store';
	import { translation } from '$lib/utils';

	const data = get(translation);
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta name="keywords" content={data.keywords.join(', ')} />
	<meta name="author" content="Simone Salerno" />
</svelte:head>

<Navbar />
<FloatingNav />

<!-- <div
	class="flex items-center border-b border-white border-opacity-5 px-4 sm:px-16 lg:px-32 2xl:px-40 min-h-[80vh]"
>
	<WelcomeSection />
</div>

<div
	id={data.navigation[0].link}
	class="px-4 sm:px-16 lg:px-32 2xl:px-40 pt-20 pb-24 sm:pt-28 sm:pb-32"
>
	<ProjectsSection />
</div>

<div
	id={data.navigation[1].link}
	class="border-t border-white border-opacity-5 px-4 sm:px-16 lg:px-32 2xl:px-40 pt-20 pb-24 sm:pt-28 sm:pb-32"
>
	<AboutSection />
</div>

<div
	id={data.navigation[2].link}
	class="border-t border-white border-opacity-5 px-4 sm:px-16 lg:px-32 2xl:px-40 pt-20 pb-24 sm:pt-28 sm:pb-32"
>
	<ContactSection />
</div>

<Footer /> -->
