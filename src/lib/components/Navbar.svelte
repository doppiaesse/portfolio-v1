<script lang="ts">
	const navigation = [
		{ name: 'About', href: '#about' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Contact', href: '#contact' }
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

<header class="border-b border-white border-opacity-5 shadow-md">
	<nav class="flex items-center px-10 py-8 justify-between text-3xl font-light">
		<a href="#top" class="text-6xl sign -mt-2" on:click={handleAnchorClick}> SS </a>

		<div class="flex gap-x-7">
			{#each navigation as item (item.name)}
				<a href={item.href} on:click={handleAnchorClick}>{item.name}</a>
			{/each}
		</div>
	</nav>
</header>
