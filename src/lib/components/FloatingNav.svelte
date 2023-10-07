<script lang="ts">
	import { fly } from 'svelte/transition';
	import { handleAnchorClick } from '$lib/utils';

	const navigation = [
		{ name: '// projects', href: '#projects' },
		{ name: '// about', href: '#about' },
		{ name: '// contact', href: '#contact' }
	];

	let scroll: number;
	$: show = scroll > 350 ? true : false;
</script>

<svelte:window bind:scrollY={scroll} />

{#if show}
	<header
		class="fixed top-4 left-0 flex w-full justify-center z-10"
		in:fly={{ y: -30, duration: 300 }}
		out:fly={{ duration: 300 }}
	>
		<nav
			class="flex border border-white border-opacity-5 rounded-full items-center justify-between text-lg font-light backdrop-blur-md bg-white bg-opacity-[0.03] px-4 shadow-md"
		>
			<a href="#top" class="text-3xl sign px-3 pt-2 pb-[0.6rem]" on:click={handleAnchorClick}>
				SS
			</a>

			{#each navigation as item (item.name)}
				<a href={item.href} class="px-3" on:click={handleAnchorClick}>{item.name}</a>
			{/each}
		</nav>
	</header>
{/if}
