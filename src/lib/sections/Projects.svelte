<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { inview, type Options } from 'svelte-inview';
	import { get } from 'svelte/store';
	import { language } from '$lib/utils';

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
	<h2 class="text-5xl font-normal sm:text-6xl 2xl:text-7xl">
		{data.projects.title}
	</h2>

	<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
		{#each data.projects.projects as project}
			<ProjectCard
				title={project.title}
				description={project.description}
				image="/projects/{project.id}/cover.jpg"
				link="/projects/{project.id}"
			/>
		{/each}
	</div>
</div>
