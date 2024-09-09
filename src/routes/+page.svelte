<script lang="ts">
	import { languages } from '$lib/utils';
	import { fly, scale } from 'svelte/transition';
	let currentMessage = 'Select language';

	function handleMouseEnter(greeting: string) {
		currentMessage = greeting;
	}
</script>

<div class="flex flex-col h-screen">
	<div
		class="px-4 sm:px-8 lg:px-14 pt-8 pb-7 sm:py-10 border-b border-white border-opacity-5 shadow-md"
	>
		<p class="text-6xl 2xl:text-7xl sign -mt-2">SS</p>
	</div>

	<div
		class="flex flex-col sm:flex-row gap-5 sm:gap-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
	>
		<div class="container w-1/2">
			{#key currentMessage}
				<div
					in:fly={{ x: -100, duration: 500 }}
					out:scale={{ duration: 500 }}
					class="item flex sm:justify-center text-6xl pb-2 px-3 sm:px-0"
				>
					{currentMessage}
				</div>
			{/key}
		</div>

		<div class="flex sm:justify-center gap-5 sm:gap-20 text-4xl w-1/2">
			{#each Object.entries(languages) as [key, lang]}
				<a
					class="group transition-all duration-300 ease-in-out pt-3 mt-2 px-3"
					href="/{key}"
					on:mouseenter={() => handleMouseEnter(lang.greeting)}
				>
					<span
						class="bg-left-bottom bg-gradient-to-r from-gray-300 to-gray-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
					>
						{lang.id}
					</span>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		display: grid;
	}

	.item {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 2;
	}
</style>
