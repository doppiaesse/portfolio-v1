<!-- <script lang="ts">
	import { get } from 'svelte/store';
	import { language } from '$lib/utils';
	import { inview, type Options } from 'svelte-inview';

	let isInView: boolean;
	const options: Options = {
		rootMargin: '-100px',
		unobserveOnEnter: true
	};

	const data = get(language);
</script>

<div
	use:inview={options}
	on:inview_change={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
	class="flex flex-col gap-y-14 sm:gap-y-16 {isInView ? 'animate' : 'opacity-0'}"
>
	<h2 class="text-5xl sm:text-6xl 2xl:text-7xl font-normal">
		{data.about.title}
	</h2>
	<div class="text-2xl 2xl:text-3xl">
		{#each data.about.description as paragraph}
			{paragraph}
			<br />
			<br />
		{/each}
	</div>
</div> -->
