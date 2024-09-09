<script lang="ts">
	import { handleAnchorClick, language } from '$lib/utils';
	import { get } from 'svelte/store';

	const routes = get(language).navigation;
</script>

<footer class="border-t border-white border-opacity-5 px-4 sm:px-8 lg:px-14">
	<nav
		class="flex items-start py-8 sm:pt-10 sm:pb-8 justify-between text-xl sm:text-2xl font-light"
	>
		<a href="#top" class="text-5xl sign opacity-90" on:click={handleAnchorClick}> SS </a>

		<div class="flex flex-col sm:flex-row gap-x-7 opacity-80">
			{#each routes as route (route.name)}
				<a href={route.href} on:click={handleAnchorClick}>{route.name}</a>
			{/each}
		</div>
	</nav>
	<div
		class="flex items-center justify-between text-md sm:text-lg font-light pt-2 sm:pt-0 pb-7 opacity-70"
	>
		Copyright © 2024 - Simone Salerno
	</div>
</footer>
