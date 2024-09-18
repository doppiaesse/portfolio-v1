<script lang="ts">
	import MenuClose from './icons/CloseMenu.svelte';
	import MenuOpen from './icons/OpenMenu.svelte';
	import { handleAnchorClick, language } from '$lib/utils';
	import { get } from 'svelte/store';
	import { fade, fly, scale } from 'svelte/transition';
	import { menuStatus } from '$lib/utils';
	import { languages } from '$lib/utils';
	import { onMount } from 'svelte';

	function handleMenuClick() {
		menuStatus.update((value) => !value);
	}

	const data = get(language);
	const routes = data.navigation;
	let isOpen = false;

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function closeDropdown(event: any) {
		if (event.target.closest('#menu-button') === null) {
			isOpen = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', closeDropdown);
		return () => {
			document.removeEventListener('click', closeDropdown);
		};
	});
</script>

<header id="top" class="border-b border-white border-opacity-5 shadow-md">
	<nav
		class="flex items-center px-4 sm:px-8 lg:px-14 pt-8 pb-7 sm:py-10 justify-between text-3xl font-light"
	>
		<a href="#top" class="text-6xl 2xl:text-7xl sign -mt-2" on:click={handleAnchorClick}> SS </a>

		<div class="hidden sm:flex gap-x-7">
			{#each routes as route (route.name)}
				<a class="mt-1" href={route.href} on:click={handleAnchorClick}>{route.name}</a>
			{/each}

			<div class="relative inline-block text-left ms-4">
				<div>
					<button
						type="button"
						class="flex justify-center gap-x-1.5 rounded-md w-16 py-3 text-base shadow-sm border border-white border-opacity-5"
						id="menu-button"
						aria-expanded={isOpen}
						aria-haspopup="true"
						on:click={toggleDropdown}
					>
						{#each Object.entries(languages) as [key, lang]}
							{#if lang.id === data.id}
								{key.toUpperCase()}
							{/if}
						{/each}
						<svg
							class="-mr-1 h-5 w-5 text-white text-opacity-15"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>

				{#if isOpen}
					<div
						in:fly={{ y: -10, duration: 100 }}
						out:fade={{ duration: 100 }}
						class="absolute right-0 z-10 mt-1 w-16 origin-top-right text-base rounded-md shadow-lg border border-white border-opacity-5 bg-dark"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="menu-button"
						tabindex="-1"
					>
						<div class="py-1" role="none">
							{#each Object.entries(languages) as [key, lang]}
								{#if lang.id !== data.id}
									<a
										data-sveltekit-reload
										href="/{key}"
										class="block px-4 py-2 text-sm"
										role="menuitem"
									>
										{key.toUpperCase()}
									</a>
								{/if}
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>

		<div class="flex sm:hidden w-[40px] h-[40px]">
			{#if $menuStatus}
				<button class="fixed z-20" transition:fade={{ duration: 100 }} on:click={handleMenuClick}>
					<MenuClose />
				</button>

				<div
					class="fixed top-0 left-0 w-screen h-screen bg-nav-mobile z-10 flex flex-col items-center justify-center"
					transition:fade={{ duration: 300 }}
				>
					<div class="flex flex-col gap-y-3">
						{#each routes as route (route.name)}
							<a
								href={route.href}
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
