<script lang="ts">
	import { handleAnchorClick, translation } from '$lib/utils';
	import { get } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import MenuOpen from './icons/OpenMenu.svelte';
	import { menuStatus } from '$lib/utils';

	function handleMenuClick() {
		menuStatus.update((value) => !value);
	}

	const data = get(translation);

	let scroll: number;
	$: show = scroll > 350 && !$menuStatus ? true : false;
</script>

<svelte:window bind:scrollY={scroll} />

{#if show}
	<header
		class="fixed top-[1.7rem] sm:top-4 sm:left-0 flex w-full justify-end sm:justify-center z-10"
		transition:fade={{ duration: 150 }}
	>
		<nav class="bg-neutral-900 bg-opacity-20 rounded-s-full rounded-e-none sm:rounded-full">
			<div
				class="flex border border-white border-opacity-5 rounded-s-full rounded-e-none sm:rounded-full items-center justify-between text-lg font-light backdrop-blur-md bg-white bg-opacity-[0.01] sm:bg-opacity-[0.02] ps-8 pe-[calc(0.95rem+5vw)] sm:px-4"
			>
				<a href="#top" class="me-4 sm:px-3 pb-4 pt-[0.95rem]" on:click={handleAnchorClick}>
					<img class="h-10" src="logo/logo-light.svg" alt="Simone Salerno logo" />
				</a>

				{#each data.global.navigation as route (route.name)}
					<a href={route.link} class="px-3 sm:flex hidden" on:click={handleAnchorClick}
						>{route.name}</a
					>
				{/each}

				<div class="flex sm:hidden w-[40px] h-[40px]">
					{#if !$menuStatus}
						<button class="absolute" transition:fade={{ duration: 100 }} on:click={handleMenuClick}>
							<MenuOpen />
						</button>
					{/if}
				</div>
			</div>
		</nav>
	</header>
{/if}
