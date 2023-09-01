<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<div class="font-light border border-white border-opacity-5 bg-primary">
	<Navbar />

	<div
		class="flex flex-col justify-center gap-y-5 border-b border-white border-opacity-5 px-16 py-20"
	>
		<div class="text-7xl">
			<p>Hello, I'm Simone</p>
		</div>

		<div class="text-5xl typewriter whitespace-nowrap italic">
			{#await import('$lib/components/Typewriter.svelte')}
				<div class="flex pb-[0.4rem]">
					<span class="me-2"> > </span>
					<span>Loading...</span>
				</div>
			{:then c}
				<svelte:component this={c.default} />
			{/await}
		</div>
	</div>

	<div id="about" class="flex flex-col gap-y-10 border-b border-white border-opacity-5 px-16 py-14">
		<h2 class="text-6xl leading-none whitespace-nowrap">About me</h2>
		<div class="text-xl 2xl:text-2xl">
			Hey there! Nice to meet you.
			<br />
			<br />
			I'm a tech-loving university student who's always eager to learn and grow. With experience in both
			software development and hardware, I'm a versatile problem solver.
			<br />
			<br />
			Right now, I'm super excited to be exploring the world of freelancing and solopreneurship while
			also learning the ins and outs of building a startup with a team.
			<br />
			<br />
			Let's connect and chat more!
		</div>
	</div>

	<div id="projects" class="flex flex-col gap-y-10 px-16 py-14">
		<h2 class="text-6xl font-light leading-none">Projects</h2>

		<div class="basic-grid">
			<ProjectCard
				title="Let's Code Italia"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				image="/projects/lets-code-italia.jpg"
				link="/projects/lets-code-italia"
			/>
			<ProjectCard
				title="Link Dojo"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				image="/projects/link-dojo.jpg"
				link="/projects/link-dojo"
			/>
			<ProjectCard
				title="Didattica Integrata"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				image="/projects/didattica-integrata.jpg"
				link="/projects/didattica-integrata"
			/>
			<ProjectCard
				title="doppia.os"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				image="/projects/doppia-os.jpg"
				link="/projects/doppia-os"
			/>
		</div>
	</div>
</div>

<style>
	.basic-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	}
</style>
