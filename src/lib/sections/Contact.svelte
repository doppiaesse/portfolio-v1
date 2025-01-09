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
	class="flex w-full flex-col tracking-tight justify-between gap-y-16 sm:gap-y-24 {isInView
		? 'animate'
		: 'opacity-0'}"
>
	<div class="flex flex-col gap-y-6">
		<h3 class="text-5xl md:text-6xl font-normal">{data.contact.title}</h3>
		<p class="text-2xl md:text-[1.7rem] xl:text-3xl">
			{data.contact.subtitle}
		</p>
	</div>

	<div class="flex flex-col text-2xl gap-y-2">
		{#each data.contact.links as link, index}
			<a
				class="group transition-all duration-300 ease-in-out
					{index === 0 ? 'text-3xl md:text-4xl mb-2' : ''}"
				href={link.link}
				target="_blank"
			>
				<span
					class="bg-left-bottom bg-gradient-to-r from-gray-300 to-gray-300 bg-no-repeat transition-all duration-500 ease-out {index ===
					0
						? 'bg-[length:0%_2px] group-hover:bg-[length:100%_2px]'
						: 'bg-[length:0%_1px] group-hover:bg-[length:100%_1px]'}"
				>
					{link.name}
				</span>
			</a>
		{/each}
	</div>
</div>
