<script lang="ts">
	import { get } from 'svelte/store';
	import { translation } from '$lib/utils';
	import { inview, type Options } from 'svelte-inview';

	let isInView: boolean;
	const options: Options = {
		rootMargin: '-100px',
		unobserveOnEnter: true
	};

	const data = get(translation);
</script>

<div
	use:inview={options}
	on:inview_change={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
	class="flex flex-col gap-y-12 {isInView ? 'animate' : 'opacity-0'}"
>
	<h2 class="text-5xl sm:text-6xl 2xl:text-7xl font-normal">
		{data.about.title}
	</h2>
	<div class="flex flex-col text-2xl lg:text-[1.7rem] 2xl:text-3xl gap-y-4 lg:gap-y-6">
		{#each data.about.description.blocks as paragraph}
			<p>{paragraph.data.text}</p>
		{/each}
	</div>
</div>
