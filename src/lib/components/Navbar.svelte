<script lang="ts">
	import { handleAnchorClick } from '$lib/utils';

	const navigation = [
		{ name: '// projects', href: '#projects' },
		{ name: '// about', href: '#about' },
		{ name: '// contact', href: '#contact' }
	];
</script>

<header id="top" class="border-b border-white border-opacity-5 shadow-md">
	<nav class="flex items-center px-4 sm:px-14 py-7 sm:py-9 justify-between text-3xl font-light">
		<a href="#top" class="text-6xl sign -mt-2" on:click={handleAnchorClick}> SS </a>

		<div class="hidden sm:flex gap-x-7">
			{#each navigation as item (item.name)}
				<a href={item.href} on:click={handleAnchorClick}>{item.name}</a>
			{/each}
		</div>
	</nav>
</header>
