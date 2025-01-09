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
	class="relative flex flex-col items-center {isInView ? 'animate' : 'opacity-0'}"
>
	<div class="overflow-hidden mb-12">
		<h1 class="title {isInView ? 'slide-in' : ''}">
			{data.welcome.title}
		</h1>
	</div>

	<!-- <div class="flex text-3xl lg:text-5xl italic">
		{#await import('$lib/components/Typewriter.svelte')}
			<span>Loading...</span>
		{:then c}
			<svelte:component this={c.default} text={data.welcome.typewriter} />
		{/await}
	</div> -->

	<div class="description">
		{#each data.welcome.description.blocks as paragraph}
			<p>{@html paragraph.data.text}</p>
		{/each}
	</div>
</div>

<style lang="postcss">
	.title {
		@apply tracking-tight font-medium text-[4rem] sm:text-[7rem] xl:text-[8rem] 2xl:text-[10rem] text-center -mt-2 lg:-mt-3 xl:-mt-4 2xl:-mt-6 leading-[1.1];
	}

	.description {
		@apply flex flex-col text-center text-xl sm:text-2xl lg:text-[1.7rem] 2xl:text-[1.8rem] gap-y-4 xl:gap-y-6;
	}

	/* .typewriter {
		--cursor-color: rgb(249 250 251 / var(--tw-text-opacity));
		--cursor-width: 0.5rem;
	}

	.typing::after {
		vertical-align: sub !important;
		margin-left: 0.4rem;
		margin-bottom: 0.2rem;
	} */
</style>
