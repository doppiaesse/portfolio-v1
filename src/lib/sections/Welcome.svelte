<script lang="ts">
	import { translation } from '$lib/utils';
	import { inview, type Options } from 'svelte-inview';
	import { get } from 'svelte/store';

	let isInView: boolean;
	const options: Options = {
		rootMargin: '-50px',
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
	class="flex flex-col gap-8 lg:gap-12 2xl:gap-16 {isInView ? 'animate' : 'opacity-0'}"
>
	<div class="flex flex-col gap-y-5">
		<h1
			class="tracking-tight font-normal text-[5rem] xl:text-8xl 2xl:text-[7rem] -ms-1 leading-none"
		>
			{data.welcome.title}
		</h1>

		<div class="flex text-3xl xl:text-5xl italic">
			{#await import('$lib/components/Typewriter.svelte')}
				<span>Loading...</span>
			{:then c}
				<svelte:component this={c.default} text={data.welcome.typewriter} />
			{/await}
		</div>
	</div>

	<div class="flex flex-col text-2xl xl:text-[1.7rem] 2xl:text-3xl opacity-80 gap-y-4 xl:gap-y-6">
		{#each data.welcome.description.blocks as paragraph}
			<p>{paragraph.data.text}</p>
		{/each}
	</div>
</div>
