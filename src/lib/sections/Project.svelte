<script lang="ts">
	import { inview, type Options } from 'svelte-inview';
	import { get } from 'svelte/store';
	import { translation } from '$lib/utils';
	import { page } from '$app/state';
	import Link from '$lib/components/icons/Link.svelte';

	let isInView: boolean;
	const options: Options = {
		rootMargin: '-100px',
		unobserveOnEnter: true
	};

	const data = get(translation);

	const project = data.projects.find(
		(project) => project.translations[0].name === page.url.pathname.split('/')[3]
	);

	console.log(project);
</script>

<div
	use:inview={options}
	on:inview_change={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
	class={isInView ? 'animate' : 'opacity-0'}
>
	<div class="flex pb-8 sm:pb-10 2xl:pb-14 text-2xl">
		<a href="/" class="flex items-center gap-x-1">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				style="fill: #f3f4f6;transform: ;msFilter:;margin-bottom: -0.2rem;"
				><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
				></path></svg
			>
			<span class="hover:underline"
				>{data.global.interface.find((item) => item.name === 'back')?.value}</span
			>
		</a>
	</div>

	{#if project}
		<div class="flex flex-col xl:flex-row gap-y-6 xl:gap-x-14">
			<div class="w-full xl:w-1/2">
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
			<div class="flex flex-col gap-y-6 w-full xl:w-1/2">
				<h2 class="text-5xl font-normal sm:text-6xl 2xl:text-7xl">
					{project.translations[0].title}
				</h2>

				{#if project.translations[0].description}
					<div class="text-2xl italic">
						<p>{project.translations[0].description}</p>
					</div>
				{/if}

				{#if project.link}
					<a href={project.link} class="flex items-center gap-x-2 text-2xl underline">
						<span class="-mb-[0.2rem]"><Link /></span>
						{project.link}
					</a>
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
