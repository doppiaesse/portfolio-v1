<script lang="ts">
	import { page } from '$app/state';
	import MenuClose from './icons/CloseMenu.svelte';
	import MenuOpen from './icons/OpenMenu.svelte';
	import { handleAnchorClick, pages, selectedLanguage, translation } from '$lib/utils';
	import { get } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import { menuStatus } from '$lib/utils';
	import LanguageSelector from './LanguageSelector.svelte';
	import Logo from './Logo.svelte';

	function handleMenuClick() {
		menuStatus.update((value) => !value);
	}

	const data = get(translation);
	const language = get(selectedLanguage);
	const isLanguageCodeValid = Object.keys(pages).includes(page.url.pathname.split('/')[1]);
</script>

<header id="top" class="border-b border-white border-opacity-5">
	<nav class="flex items-center px-4 sm:px-8 lg:px-14 py-8 justify-between">
		<a
			href={page.url.pathname.split('/')[2]
				? '/' + language
				: isLanguageCodeValid
					? '/' + language + '#top'
					: '/' + 'en'}
			onclick={handleAnchorClick}
			aria-label="Simone Salerno"
		>
			<Logo />
		</a>

		<div class="hidden md:flex gap-x-7 text-[1.7rem]">
			{#each data.global.navigation as route (route.name)}
				<a href={'/' + language + route.link} onclick={handleAnchorClick}>{route.name}</a>
			{/each}

			<div class="ms-2 -mt-[0.2rem]">
				<LanguageSelector />
			</div>
		</div>

		<div class="flex md:hidden w-[40px] h-[40px]">
			{#if $menuStatus}
				<div class="fixed z-20 left-6 top-8">
					<LanguageSelector />
				</div>

				<button class="fixed z-20" transition:fade={{ duration: 100 }} onclick={handleMenuClick}>
					<MenuClose />
				</button>

				<div
					class="fixed top-0 left-0 w-screen h-screen z-10 flex flex-col items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm text-2xl"
					transition:fade={{ duration: 300 }}
				>
					<div class="flex flex-col gap-y-3">
						{#each data.global.navigation as route (route.name)}
							<a
								href={'/' + language + route.link}
								onclick={(event) => (handleAnchorClick(event), handleMenuClick())}>{route.name}</a
							>
						{/each}
					</div>
				</div>
			{:else}
				<button class="absolute" transition:fade={{ duration: 100 }} onclick={handleMenuClick}>
					<MenuOpen />
				</button>
			{/if}
		</div>
	</nav>
</header>
