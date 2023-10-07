<script lang="ts">
	import { browser } from '$app/environment';
	import FloatingNav from '$lib/components/FloatingNav.svelte';
	import { menuStatus } from '$lib/utils';
	import '../globals.css';

	$: if (browser) {
		document.body.style.overflow = $menuStatus ? 'hidden' : '';
	}
</script>

<svelte:head>
	<title>Hi! I'm Simone</title>
	<meta
		name="description"
		content="Hi! I'm Simone, a passionate tech enthusiast and a creative problem solver. This is my portfolio, where you can find something about me and my projects. Let's connect!"
	/>
	<meta
		name="keywords"
		content="Simone Salerno, doppiaesse, portfolio, projects repository, personal website, affordable website design, web designer, web developer, website redesign services, freelancer"
	/>
	<meta name="author" content="Simone Salerno" />
</svelte:head>

<div class="w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mx-auto">
	<FloatingNav />

	<slot />
</div>
