<script>
	import { get } from 'svelte/store';
	import { language } from '$lib/utils';

	const data = get(language);
</script>

<div class="flex flex-col gap-y-14 sm:gap-y-16">
	<h2 class="text-5xl sm:text-6xl 2xl:text-7xl whitespace-nowrap">{data.about.title}</h2>
	<div class="text-2xl 2xl:text-3xl">
		{#each data.about.description as paragraph}
			{paragraph}
			<br />
			<br />
		{/each}
	</div>
</div>
