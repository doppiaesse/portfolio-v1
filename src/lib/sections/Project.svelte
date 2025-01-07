<script lang="ts">
	import { inview, type Options } from 'svelte-inview';
	import { get } from 'svelte/store';
	import { translation } from '$lib/utils';
	import { page } from '$app/stores';

	let isInView: boolean;
	const options: Options = {
		rootMargin: '-100px',
		unobserveOnEnter: true
	};

	const data = get(translation);

	const project = data.projects.find(
		(project) => project.translations[0].name === $page.url.pathname.split('/')[3]
	);
</script>

<div
	use:inview={options}
	on:inview_change={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
	class={isInView ? 'animate' : 'opacity-0'}
>
	{#if project}
		<div class="flex gap-x-14">
			<div class="w-2/5">
				<img
					class="rounded-3xl w-full h-full object-cover"
					src={'https://directus.simonesalerno.it/assets/' +
						project.images[0].directus_files_id +
						'/' +
						project.translations[0].name +
						'.jpg'}
					alt={project.translations[0].title}
				/>
			</div>
			<div class="flex flex-col gap-y-6 w-3/5">
				<h2 class="text-5xl font-normal sm:text-6xl 2xl:text-7xl">
					{project.translations[0].title}
				</h2>

				{#if project.translations[0].description}
					<div class="text-2xl italic mb-2">
						<p>{project.translations[0].description}</p>
					</div>
				{/if}

				{#if project.translations[0].body}
					<div class="flex flex-col text-2xl gap-y-4">
						{#each project.translations[0].body.blocks as paragraph}
							<p>{paragraph.data.text}</p>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{:else}
		<h2 class="text-5xl font-normal sm:text-6xl 2xl:text-7xl">Project not found</h2>
	{/if}
</div>
