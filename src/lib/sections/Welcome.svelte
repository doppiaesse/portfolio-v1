<!-- <script lang="ts">
	import { inview, type Options } from 'svelte-inview';
	import { language } from '$lib/utils';
	import { get } from 'svelte/store';

	let isInView: boolean;
	const options: Options = {
		rootMargin: '-50px',
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
	class="flex flex-col gap-8 xl:gap-14 2xl:gap-16 {isInView ? 'animate' : 'opacity-0'}"
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
		<p>{data.welcome.description[0]}</p>
		<p>
			{data.welcome.description[1]}
		</p>
	</div>
</div> -->
