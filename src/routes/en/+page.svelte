<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import FloatingNav from '$lib/components/FloatingNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Hi! I'm Simone - Software developer</title>
	<meta
		name="description"
		content="Hi! I'm Simone, a passionate tech enthusiast and creative problem solver. This is my portfolio, where you can find something about me and my projects. Let's connect!"
	/>
	<meta
		name="keywords"
		content="Simone Salerno, doppiaesse, portfolio, projects repository, personal website, affordable website design, web designer, web developer, website redesign services, freelancer"
	/>
	<meta name="author" content="Simone Salerno" />
</svelte:head>

<Navbar en={true} />
<FloatingNav en={true} />

<div
	class="flex flex-col gap-10 2xl:gap-20 border-b border-white border-opacity-5 px-4 sm:px-16 lg:px-32 2xl:px-44 pt-24 pb-28 sm:pt-32 sm:pb-36"
>
	<div class="flex flex-col tracking-tighter leading-[0.7] justify-center gap-y-7 sm:gap-y-9">
		<div class="text-7xl xl:text-8xl">
			<p>Hello, I'm Simone</p>
		</div>

		<div
			class="text-4xl xl:text-5xl leading-[0.9] typewriter whitespace-nowrap italic tracking-tight"
		>
			{#await import('$lib/components/Typewriter.svelte')}
				<div class="flex pb-[0.43rem]">
					<span class="me-2"> > </span>
					<span>Loading...</span>
				</div>
			{:then c}
				<svelte:component this={c.default} en={true} />
			{/await}
		</div>
	</div>

	<div class="flex flex-col text-2xl xl:text-3xl opacity-80 gap-y-4 sm:gap-y-6 justify-center">
		<p>Full-Stack developer who loves diving into innovative projects and solving problems.</p>
		<p>
			Following the latest industry trends, I create friendly, efficient and scalable solutions that
			truly impress.
		</p>
	</div>
</div>

<div
	id="projects"
	class="flex flex-col gap-y-14 sm:gap-y-16 px-4 sm:px-16 lg:px-32 2xl:px-44 pt-20 pb-24 sm:pt-28 sm:pb-32"
>
	<h2 class="text-5xl sm:text-6xl 2xl:text-7xl font-light">Projects</h2>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
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
	class="flex flex-col gap-y-14 sm:gap-y-16 border-t border-white border-opacity-5 px-4 sm:px-16 lg:px-32 2xl:px-44 pt-20 pb-24 sm:pt-28 sm:pb-32"
>
	<h2 class="text-5xl sm:text-6xl 2xl:text-7xl whitespace-nowrap">About me</h2>
	<div class="text-2xl 2xl:text-3xl">
		Hey there! Nice to meet you.
		<br />
		<br />
		I'm a tech-loving software developer who's always eager to learn and grow. With experience in both
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

<div
	id="contact"
	class="flex flex-col items-center border-t border-white border-opacity-5 px-4 sm:px-16 lg:px-32 2xl:px-44 pt-20 pb-24 sm:pt-28 sm:pb-32"
>
	<div class="flex w-full flex-col tracking-tight justify-between gap-y-16 sm:gap-y-24">
		<div class="flex flex-col gap-y-10">
			<h3 class="text-5xl md:text-6xl">Available for select freelance opportunities</h3>
			<p class="text-2xl md:text-3xl">
				Have an engaging project in mind? Feel free to reach out to me by email or instant message.
			</p>
		</div>

		<div class="flex flex-col text-2xl gap-y-4">
			<div>
				<a
					class="group transition-all duration-300 ease-in-out"
					href="mailto:contact@simonesalerno.it"
					target="_blank"
				>
					<span
						class="text-3xl md:text-4xl bg-left-bottom bg-gradient-to-r from-gray-300 to-gray-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
					>
						contact@simonesalerno.it
					</span>
				</a>
			</div>
			<div class="flex flex-col gap-y-2">
				<div>
					<a
						class="group transition-all duration-300 ease-in-out"
						href="https://www.linkedin.com/in/simone-salerno/"
						target="_blank"
					>
						<span
							class="bg-left-bottom bg-gradient-to-r from-gray-300 to-gray-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
						>
							LinkedIn
						</span>
					</a>
				</div>
				<div>
					<a
						class="group transition-all duration-300 ease-in-out"
						href="https://github.com/novakoder/"
						target="_blank"
					>
						<span
							class="bg-left-bottom bg-gradient-to-r from-gray-300 to-gray-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
						>
							GitHub
						</span>
					</a>
				</div>
				<div>
					<a
						class="group transition-all duration-300 ease-in-out"
						href="https://www.instagram.com/novakoder/"
						target="_blank"
					>
						<span
							class="bg-left-bottom bg-gradient-to-r from-gray-300 to-gray-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
						>
							Instagram
						</span>
					</a>
				</div>
				<div>
					<a
						class="group transition-all duration-300 ease-in-out"
						href="https://twitter.com/novakoder/"
						target="_blank"
					>
						<span
							class="bg-left-bottom bg-gradient-to-r from-gray-300 to-gray-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
						>
							X
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<Footer en={true} />
