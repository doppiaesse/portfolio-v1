<script lang="ts">
	import { fly } from 'svelte/transition';
	import { handleAnchorClick } from '$lib/utils';
	import { fade } from 'svelte/transition';
	import MenuOpen from './icons/menuOpen.svelte';
	import { menuStatus } from '$lib/utils';

	function handleMenuClick() {
		menuStatus.update((value) => !value);
	}

	const navigation = [
		{ name: '// projects', href: '#projects' },
		{ name: '// about', href: '#about' },
		{ name: '// contact', href: '#contact' }
	];

	let scroll: number;
	$: show = scroll > 350 && !$menuStatus ? true : false;
</script>

<svelte:window bind:scrollY={scroll} />

{#if show}
	<header
		class="fixed top-[1.9rem] sm:top-4 sm:left-0 flex w-full justify-end sm:justify-center z-10"
		in:fly={{ y: -30, duration: 300 }}
		out:fly={{ duration: 300 }}
	>
		<nav
			class="flex border border-white border-opacity-5 rounded-s-full rounded-e-none sm:rounded-full items-center justify-between text-lg font-light backdrop-blur-md bg-white bg-opacity-[0.01] sm:bg-opacity-[0.02] ps-8 pe-[calc(1rem+5vw)] sm:px-4 shadow-md"
		>
			<a
				href="#top"
				class="text-3xl sign me-4 sm:px-3 mt-2 mb-[0.6rem]"
				on:click={handleAnchorClick}
			>
				SS
			</a>

			{#each navigation as item (item.name)}
				<a href={item.href} class="px-3 sm:flex hidden" on:click={handleAnchorClick}>{item.name}</a>
			{/each}

			<div class="flex sm:hidden w-[40px] h-[40px]">
				{#if !$menuStatus}
					<button class="absolute" transition:fade={{ duration: 100 }} on:click={handleMenuClick}>
						<MenuOpen />
					</button>
				{/if}
			</div>
		</nav>
	</header>
{/if}
