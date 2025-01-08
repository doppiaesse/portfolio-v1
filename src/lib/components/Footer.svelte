<script lang="ts">
	import { page } from '$app/state';
	import { handleAnchorClick, pages, selectedLanguage, translation } from '$lib/utils';
	import { get } from 'svelte/store';

	const data = get(translation);
	const language = get(selectedLanguage);
	const isLanguageCodeValid = Object.keys(pages).includes(page.url.pathname.split('/')[1]);
</script>

<footer class="border-t border-white border-opacity-5 px-4 sm:px-8 lg:px-14">
	<nav
		class="flex items-start py-8 sm:pt-10 sm:pb-8 justify-between text-xl sm:text-2xl font-light"
	>
		<a
			href={page.url.pathname.split('/')[2]
				? '/' + language
				: isLanguageCodeValid
					? '/' + language + '#top'
					: '/' + 'en'}
			onclick={handleAnchorClick}
			aria-label="Logo"
		>
			<enhanced:img
				class="h-16 sm:h-20 w-min"
				src="/src/lib/assets/logo/logo-light.svg"
				alt="Logo"
			/>
		</a>

		<div class="flex flex-col md:flex-row gap-x-7 opacity-80">
			{#each data.global.navigation as route (route.name)}
				<a href={'/' + language + route.link} onclick={handleAnchorClick}>{route.name}</a>
			{/each}
		</div>
	</nav>
	<div
		class="flex items-center justify-between text-md sm:text-lg text-neutral-200 font-light pt-2 pb-7 opacity-70"
	>
		Copyright © 2023-2024 - Simone Salerno
	</div>
</footer>
