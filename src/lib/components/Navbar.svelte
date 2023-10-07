<script lang="ts">
	import { handleAnchorClick } from '$lib/utils';
	import { fade } from 'svelte/transition';
	import MenuCloseIcon from './icons/MenuClose.svelte';
	import MenuOpenIcon from './icons/MenuOpen.svelte';
	import { menuStatus } from '$lib/utils';

	function handleMenuClick() {
		menuStatus.update((value) => !value);
	}

	const navigation = [
		{ name: '// projects', href: '#projects' },
		{ name: '// about', href: '#about' },
		{ name: '// contact', href: '#contact' }
	];
</script>

<header id="top" class="border-b border-white border-opacity-5 shadow-md">
	<nav
		class="flex items-center px-4 sm:px-8 lg:px-14 pt-8 pb-7 sm:py-9 justify-between text-3xl font-light"
	>
		<a href="#top" class="text-6xl sign -mt-2" on:click={handleAnchorClick}> SS </a>

		<div class="hidden sm:flex gap-x-7">
			{#each navigation as item (item.name)}
				<a href={item.href} on:click={handleAnchorClick}>{item.name}</a>
			{/each}
		</div>

		<div class="flex sm:hidden w-[40px] h-[40px]">
			{#if $menuStatus}
				<button class="fixed z-20" transition:fade={{ duration: 100 }} on:click={handleMenuClick}>
					<MenuCloseIcon />
				</button>

				<div
					class="fixed top-0 left-0 w-screen h-screen bg-nav-mobile z-10 flex flex-col items-center justify-center"
					transition:fade={{ duration: 300 }}
				>
					<div class="flex flex-col gap-y-3">
						{#each navigation as item (item.name)}
							<a
								href={item.href}
								on:click={(event) => (handleAnchorClick(event), handleMenuClick())}>{item.name}</a
							>
						{/each}
					</div>
				</div>
			{:else}
				<button class="absolute" transition:fade={{ duration: 100 }} on:click={handleMenuClick}>
					<MenuOpenIcon />
				</button>
			{/if}
		</div>
	</nav>
</header>
