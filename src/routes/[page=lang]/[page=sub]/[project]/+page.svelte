<script lang="ts">
	import { get } from 'svelte/store';
	import { translation } from '$lib/utils';
	import Project from '$lib/sections/Project.svelte';

	const data = get(translation);
</script>

<svelte:head>
	<title>Simone Salerno - {data.projects[0].translations[0].title}</title>
</svelte:head>

<div class="px-4 sm:px-8 lg:px-14 pt-20 pb-24 sm:pt-24 sm:pb-36 2xl:pt-28 2xl:pb-44">
	<Project />
</div>
