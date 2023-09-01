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

<div class="w-[55%] mx-auto my-10">
	<FloatingNav />

	<slot />
</div>
