<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<Navbar />

<div
	class="flex flex-col xl:flex-row gap-10 2xl:gap-20 border-b border-white border-opacity-5 px-4 sm:px-16 lg:px-32 py-28 sm:py-40"
>
	<div
		class="flex xl:w-[65%] 2xl:w-[55%] flex-col tracking-tighter leading-[0.7] justify-center gap-y-7 sm:gap-y-10"
	>
		<div class="text-7xl 2xl:text-[5.5rem]">
			<p>Hello, I'm Simone</p>
		</div>

		<div
			class="text-4xl 2xl:text-5xl leading-[0.9] typewriter whitespace-nowrap italic tracking-tight"
		>
			{#await import('$lib/components/Typewriter.svelte')}
				<div class="flex pb-[0.43rem]">
					<span class="me-2"> > </span>
					<span>Loading...</span>
				</div>
			{:then c}
				<svelte:component this={c.default} />
			{/await}
		</div>
	</div>

	<div
		class="flex flex-col xl:w-[35%] 2xl:w-[45%] text-2xl xl:text-xl 2xl:text-2xl opacity-80 gap-y-4 sm:gap-y-6 justify-center"
	>
		<p>Full-Stack developer who loves diving into innovative projects and solving problems.</p>
		<p>
			Following the latest industry trends, I create friendly, efficient, and scalable solutions
			that truly impress.
		</p>
	</div>
</div>

<div
	id="projects"
	class="flex flex-col gap-y-14 sm:gap-y-16 px-4 sm:px-16 lg:px-32 2xl:px-44 pt-24 pb-28 sm:pt-32 sm:pb-36"
>
	<h2 class="text-5xl sm:text-6xl font-light">// projects</h2>

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
	class="flex flex-col gap-y-14 sm:gap-y-16 border-t border-white border-opacity-5 px-4 sm:px-16 lg:px-32 2xl:px-44 pt-24 pb-28 sm:pt-32 sm:pb-36"
>
	<h2 class="text-5xl sm:text-6xl whitespace-nowrap">// about me</h2>
	<div class="text-2xl">
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

<div
	id="contact"
	class="flex flex-col items-center xl:flex-row gap-28 sm:gap-40 xl:gap-20 2xl:gap-28 border-t border-white border-opacity-5 xl:px-32 2xl:px-44 pt-24 pb-28 sm:pt-32 sm:pb-36"
>
	<div
		class="flex xl:w-[60%] flex-col tracking-tight justify-between gap-y-16 sm:gap-y-24 px-4 sm:px-16 lg:px-32 xl:px-0"
	>
		<div class="flex flex-col gap-y-7">
			<h3 class="text-5xl sm:text-6xl">Available for select freelance opportunities</h3>
			<p class="text-2xl">
				Have an engaging project in mind? Feel free to reach out to me by email or instant message.
			</p>
		</div>

		<div class="flex flex-col text-xl gap-y-4">
			<div>
				<a class="text-2xl" href="mailto:contact@simonesalerno.it">contact@simonesalerno.it</a>
			</div>
			<div class="flex flex-col gap-y-2">
				<div>
					<a href="https://www.linkedin.com/in/simone-salerno/" target="_blank">LinkedIn</a>
				</div>
				<div><a href="https://github.com/novakoder/" target="_blank">GitHub</a></div>
				<div><a href="https://www.instagram.com/novakoder/" target="_blank">Instagram</a></div>
				<div><a href="https://twitter.com/novakoder/" target="_blank">X</a></div>
			</div>
		</div>
	</div>

	<div
		class="flex flex-col w-full xl:w-[45%] gap-y-10 sm:gap-y-12 px-4 sm:px-16 lg:px-32 xl:px-0 pt-20 sm:pt-28 xl:pt-0 border-t xl:border-t-0 border-white border-opacity-5"
	>
		<h3 class="text-4xl xl:self-end">// contact module</h3>
		<form action="" class="flex flex-col gap-y-10">
			<div class="grid gap-x-6 gap-y-8 sm:grid-cols-2 opacity-80">
				<div class="relative z-0">
					<input
						type="text"
						name="name"
						class="peer block w-full appearance-none border-0 border-b bg-transparent py-2.5 px-0 text-lg focus:border-blue-600 focus:outline-none focus:ring-0"
						placeholder=" "
					/>
					<label
						for="name"
						class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
						>Your name</label
					>
				</div>
				<div class="relative z-0">
					<input
						type="text"
						name="email"
						class="peer block w-full appearance-none border-0 border-b bg-transparent py-2.5 px-0 text-lg focus:border-blue-600 focus:outline-none focus:ring-0"
						placeholder=" "
					/>
					<label
						for="email"
						class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
						>Your email</label
					>
				</div>
				<div class="relative z-0 col-span-2">
					<textarea
						name="message"
						rows="5"
						class="peer block w-full appearance-none border-0 border-b bg-transparent py-2.5 px-0 text-lg focus:border-blue-600 focus:outline-none focus:ring-0"
						placeholder=" "
					/>
					<label
						for="message"
						class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
						>Your message</label
					>
				</div>
			</div>
			<button
				type="submit"
				class="xl:self-end rounded-full bg-black bg-opacity-60 w-[60%] sm:w-[45%] pt-[0.63rem] pb-3 text-white text-xl"
				>Send Message</button
			>
		</form>
	</div>
</div>

<Footer />
