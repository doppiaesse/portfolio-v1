<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { Options } from 'svelte-inview';
	import { language } from '$lib/utils';
	import { get } from 'svelte/store';

	let isInView: boolean;
	const options: Options = {
		rootMargin: '-50px'
	};

	const data = get(language);
</script>

<div
	use:inview={options}
	on:inview_change={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
	class:animate={isInView}
	class="flex flex-col gap-8 xl:gap-14 2xl:gap-16"
>
	<div class="flex flex-col tracking-tighter gap-y-6">
		<div class="leading-none text-[5rem] xl:text-8xl 2xl:text-[7rem]">
			<p>{data.welcome.title}</p>
		</div>

		<div class="text-3xl xl:text-5xl 2xl:text-[3.5rem] whitespace-nowrap italic tracking-tight">
			<div class="flex">
				<span class="me-2"> > </span>
				{#await import('$lib/components/Typewriter.svelte')}
					<span>Loading...</span>
				{:then c}
					<svelte:component this={c.default} text={data.welcome.typewriter} />
				{/await}
			</div>
		</div>
	</div>

	<div class="flex flex-col text-2xl xl:text-[1.7rem] 2xl:text-3xl opacity-80 gap-y-4 xl:gap-y-6">
		<p>{data.welcome.description[0]}</p>
		<p>
			{data.welcome.description[1]}
		</p>
	</div>
</div>
