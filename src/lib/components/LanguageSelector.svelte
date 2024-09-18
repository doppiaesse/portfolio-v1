<script lang="ts">
	import { language, languages } from '$lib/utils';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { fade, fly } from 'svelte/transition';
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

	const id = get(language).id;
</script>

<div class="relative inline-block text-left">
	<div>
		<button
			type="button"
			class="flex justify-center gap-x-1.5 rounded-md w-16 py-3 text-base shadow-sm border border-white border-opacity-5 bg-dark"
			id="menu-button"
			aria-expanded={isOpen}
			aria-haspopup="true"
			on:click={toggleDropdown}
		>
			{#each Object.entries(languages) as [key, lang]}
				{#if lang.id === id}
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
					{#if lang.id !== id}
						<a data-sveltekit-reload href="/{key}" class="block px-4 py-2 text-sm" role="menuitem">
							{key.toUpperCase()}
						</a>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</div>
