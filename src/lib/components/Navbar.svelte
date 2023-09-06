<script lang="ts">
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte';
	import { fade, fly } from 'svelte/transition';

	const navigation = [
		{ name: 'About', href: '#about' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Contact', href: '#contact' }
	];

	let showMobile = false;

	function handleAnchorClick(event: any) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		if (anchor) {
			window.scrollTo({
				top: anchor.offsetTop - 40,
				behavior: 'smooth'
			});
		}
	}
</script>

<header class="border-b border-white border-opacity-5 shadow-md">
	<nav class="flex flex-col gap-y-3 px-6 md:px-10 py-6 md:py-8 text-3xl font-light">
		<div class="flex w-full items-center justify-between">
			<a href="#top" class="text-5xl md:text-6xl sign md:-mt-2" on:click={handleAnchorClick}>
				SS
			</a>

			<div class="sm:flex hidden gap-x-7">
				{#each navigation as item (item.name)}
					<a href={item.href} on:click={handleAnchorClick}>{item.name}</a>
				{/each}
			</div>

			<button class="sm:hidden flex w-10 h-10" on:click={() => (showMobile = !showMobile)}>
				<IoIosMenu />
			</button>
		</div>

		{#if showMobile}
			<div class="flex flex-col items-end sm:hidden gap-y-3" in:fly={{ y: -20, duration: 200 }}>
				{#each navigation as item (item.name)}
					<a href={item.href} on:click={handleAnchorClick}>{item.name}</a>
				{/each}
			</div>
		{/if}
	</nav>
</header>
