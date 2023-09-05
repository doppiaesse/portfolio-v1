<script lang="ts">
	import FloatingNav from '$lib/components/FloatingNav.svelte';
	import '../globals.css';
</script>

<svelte:head>
	<title>Hi! I'm Simone</title>
	<meta
		name="description"
		content="Hi! I'm Simone, a passionate tech enthusiast and a creative problem solver. Dive into my captivating portfolio and discover my diverse projects in software, hardware, and freelancing. Let's connect and explore together!"
	/>
	<meta
		name="keywords"
		content="Simone Salerno, doppiaesse, portfolio, projects repository, personal website, affordable website design, web designer, web developer, website redesign services"
	/>
	<meta name="author" content="Simone Salerno" />
</svelte:head>

<div class="mx-auto p-3 sm:py-3 sm:px-5 md:py-5 md:px-16 lg:px-40 lg:py-10 xl:px-60 2xl:px-72">
	<FloatingNav />

	<slot />
</div>
