<script lang="ts">
	import { page } from '$app/stores';
	import MenuClose from './icons/CloseMenu.svelte';
	import MenuOpen from './icons/OpenMenu.svelte';
	import { handleAnchorClick, translation } from '$lib/utils';
	import { get } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import { menuStatus } from '$lib/utils';
	import LanguageSelector from './LanguageSelector.svelte';

	function handleMenuClick() {
		menuStatus.update((value) => !value);
	}

	const data = get(translation);
</script>

<header id="top" class="border-b border-white border-opacity-5">
	<nav class="flex items-center px-4 sm:px-8 lg:px-14 py-8 justify-between text-3xl font-light">
		<a
			href={$page.url.pathname.split('/')[2] ? '/' : '#top'}
			on:click={handleAnchorClick}
			aria-label="Simone Salerno"
		>
			<enhanced:img
				class="h-16 sm:h-20 w-min"
				src="/src/lib/assets/logo/logo-light.svg"
				alt="Logo"
			/>
		</a>

		<div class="hidden md:flex gap-x-7">
			{#each data.global.navigation as route (route.name)}
				<a class="leading-normal" href={route.link} on:click={handleAnchorClick}>{route.name}</a>
			{/each}

			<div class="ms-2">
				<LanguageSelector />
			</div>
		</div>

		<div class="flex md:hidden w-[40px] h-[40px]">
			{#if $menuStatus}
				<div class="fixed z-20 left-6 top-8">
					<LanguageSelector />
				</div>

				<button class="fixed z-20" transition:fade={{ duration: 100 }} on:click={handleMenuClick}>
					<MenuClose />
				</button>

				<div
					class="fixed top-0 left-0 w-screen h-screen z-10 flex flex-col items-center justify-center bg-nav-mobile"
					transition:fade={{ duration: 300 }}
				>
					<div class="flex flex-col gap-y-3">
						{#each data.global.navigation as route (route.name)}
							<a
								href={route.link}
								on:click={(event) => (handleAnchorClick(event), handleMenuClick())}>{route.name}</a
							>
						{/each}
					</div>
				</div>
			{:else}
				<button class="absolute" transition:fade={{ duration: 100 }} on:click={handleMenuClick}>
					<MenuOpen />
				</button>
			{/if}
		</div>
	</nav>
</header>
