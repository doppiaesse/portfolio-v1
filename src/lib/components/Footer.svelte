<script lang="ts">
	const navigation = [
		{ name: '// projects', href: '#projects' },
		{ name: '// about', href: '#about' },
		{ name: '// contact', href: '#contact' }
	];

	function handleAnchorClick(event: any) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		if (anchor) {
			window.scrollTo({
				top: anchor.offsetTop - 20,
				behavior: 'smooth'
			});
		}
	}
</script>

<footer class="border-t border-white border-opacity-5 mt-12 sm:mt-16 px-4 sm:px-28">
	<nav
		class="flex items-start sm:items-center py-8 sm:py-12 justify-between text-2xl sm:text-3xl font-light"
	>
		<a href="#top" class="text-5xl sign sm:-mt-2 opacity-90" on:click={handleAnchorClick}> SS </a>

		<div class="flex flex-col sm:flex-row gap-x-7 opacity-80">
			{#each navigation as item (item.name)}
				<a href={item.href} on:click={handleAnchorClick}>{item.name}</a>
			{/each}
		</div>
	</nav>
	<div
		class="flex items-center justify-between text-md sm:text-lg font-light pt-2 sm:pt-0 pb-5 opacity-70"
	>
		Copyright © 2023. Made by Simone Salerno.
	</div>
</footer>
