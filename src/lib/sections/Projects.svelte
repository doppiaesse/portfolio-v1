<script>
	import ProjectCard from '../components/ProjectCard.svelte';
	import { get } from 'svelte/store';
	import { language } from '$lib/utils';

	const data = get(language);
</script>

<div class="flex flex-col gap-y-14 sm:gap-y-16">
	<h2 class="text-5xl sm:text-6xl 2xl:text-7xl font-light">{data.projects.title}</h2>

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
