<script lang="ts">
	import { handleAnchorClick, language } from '$lib/utils';
	import { get } from 'svelte/store';

	const routes = get(language).navigation;
</script>

<footer class="border-t border-white border-opacity-5 px-4 sm:px-8 lg:px-14">
	<nav
		class="flex items-start py-8 sm:pt-10 sm:pb-8 justify-between text-xl sm:text-2xl font-light"
	>
		<a href="#top" on:click={handleAnchorClick}>
			<img class="h-16 sm:h-20" src="logo/logo-light.svg" alt="Simone Salerno logo" />
		</a>

		<div class="flex flex-col sm:flex-row gap-x-7 opacity-80">
			{#each routes as route (route.name)}
				<a href={route.href} on:click={handleAnchorClick}>{route.name}</a>
			{/each}
		</div>
	</nav>
	<div
		class="flex items-center justify-between text-md sm:text-lg text-neutral-200 font-light pt-2 pb-7 opacity-70"
	>
		Copyright © 2023-2024 - Simone Salerno
	</div>
</footer>
