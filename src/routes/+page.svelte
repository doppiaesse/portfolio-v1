<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<Navbar />

<div
	class="flex flex-col sm:flex-row gap-10 sm:gap-20 border-b border-white border-opacity-5 px-4 sm:px-32 py-16 sm:py-32"
>
	<div
		class="flex md:w-[55%] flex-col tracking-tighter leading-[0.7] justify-center gap-y-7 sm:gap-y-10"
	>
		<div class="text-7xl sm:text-[5.5rem]">
			<p>Hello, I'm Simone</p>
		</div>

		<div class="text-4xl sm:text-5xl typewriter whitespace-nowrap italic tracking-tight">
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

	<div
		class="flex flex-col md:w-[45%] text-lg sm:text-2xl opacity-80 gap-y-4 sm:gap-y-6 justify-end"
	>
		<p>Full-Stack developer who loves diving into innovative projects and solving problems.</p>
		<p>
			Following the latest industry trends, I create friendly, efficient, and scalable solutions
			that truly impress.
		</p>
	</div>
</div>

<div id="projects" class="flex flex-col gap-y-10 sm:gap-y-14 px-4 sm:px-40 py-12 sm:py-16">
	<h2 class="text-5xl sm:text-6xl font-light leading-none">Projects</h2>

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

<div
	id="about"
	class="flex flex-col gap-y-10 border-t border-white border-opacity-5 px-4 sm:px-40 py-12 sm:py-16"
>
	<h2 class="text-5xl sm:text-6xl leading-none whitespace-nowrap">About me</h2>
	<div class="text-xl 2xl:text-2xl sm:px-3">
		Hey there! Nice to meet you.
		<br />
		<br />
		I'm a tech-loving university student who's always eager to learn and grow. With experience in both
		software development and hardware, I'm a versatile problem solver.
		<br />
		<br />
		Right now, I'm super excited to be exploring the world of freelancing and solopreneurship while also
		learning the ins and outs of building a startup with a team.
		<br />
		<br />
		Let's connect and chat more!
	</div>
</div>

<Footer />

<style>
	.basic-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	}
</style>
