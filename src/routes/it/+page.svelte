<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import FloatingNav from '$lib/components/FloatingNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Ciao! Sono Simone - Sviluppatore software</title>
	<meta
		name="description"
		content="Ciao! Sono Simone, sviluppatore appassionato di tecnologia e creativo problem-solver. Questo è il mio portfolio, dove puoi trovare qualcosa su di me e sui miei progetti. Connettiamoci!"
	/>
	<meta
		name="keywords"
		content="Simone Salerno, doppiaesse, portfolio, repository progetti, sito web personale, progettazione di siti web convenienti, web designer, sviluppatore web, progettazione software, freelancer"
	/>
	<meta name="author" content="Simone Salerno" />
</svelte:head>

<Navbar />
<FloatingNav />

<div
	class="flex flex-col gap-10 2xl:gap-20 border-b border-white border-opacity-5 px-4 sm:px-16 lg:px-32 2xl:px-44 pt-24 pb-28 sm:pt-32 sm:pb-36"
>
	<div class="flex flex-col tracking-tighter leading-[0.7] justify-center gap-y-6 sm:gap-y-9">
		<div class="text-7xl xl:text-8xl">
			<p>Ciao, sono Simone</p>
		</div>

		<div
			class="text-3xl xl:text-5xl leading-[0.9] typewriter whitespace-nowrap italic tracking-tight"
		>
			{#await import('$lib/components/Typewriter.svelte')}
				<div class="flex pb-[0.43rem]">
					<span class="me-2"> > </span>
					<span>Loading...</span>
				</div>
			{:then c}
				<svelte:component this={c.default} en={false} />
			{/await}
		</div>
	</div>

	<div class="flex flex-col text-2xl xl:text-3xl opacity-80 gap-y-4 sm:gap-y-6 justify-center">
		<p>Sviluppatore full-stack che ama immergersi in progetti innovativi e risolvere problemi.</p>
		<p>
			Seguendo le ultime tendenze del settore, creo soluzioni semplici, efficienti e scalabili che
			fanno davvero la differenza.
		</p>
	</div>
</div>

<div
	id="progetti"
	class="flex flex-col gap-y-14 sm:gap-y-16 px-4 sm:px-16 lg:px-32 2xl:px-44 pt-20 pb-24 sm:pt-28 sm:pb-32"
>
	<h2 class="text-5xl sm:text-6xl 2xl:text-7xl font-light">Progetti</h2>

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
	id="chi-sono"
	class="flex flex-col gap-y-14 sm:gap-y-16 border-t border-white border-opacity-5 px-4 sm:px-16 lg:px-32 2xl:px-44 pt-20 pb-24 sm:pt-28 sm:pb-32"
>
	<h2 class="text-5xl sm:text-6xl 2xl:text-7xl whitespace-nowrap">Chi sono</h2>
	<div class="text-2xl 2xl:text-3xl">
		Ehilà! Piacere di conoscerti.
		<br />
		<br />
		Sono uno sviluppatore di software amante della tecnologia e sempre desideroso di imparare e crescere.
		Con esperienza sia nello sviluppo di software che di hardware, sono in grado di affrontare sfide
		di vario genere.
		<br />
		<br />
		In questo momento, sono davvero felice di esplorare il mondo del freelancing e dell'imprenditoria
		individuale, mentre imparo i segreti e le dinamiche del costruire una startup con un team.
		<br />
		<br />
		Connettiamoci e continuiamo la conversazione!
	</div>
</div>

<div
	id="contatti"
	class="flex flex-col items-center border-t border-white border-opacity-5 px-4 sm:px-16 lg:px-32 2xl:px-44 pt-20 pb-24 sm:pt-28 sm:pb-32"
>
	<div class="flex w-full flex-col tracking-tight justify-between gap-y-16 sm:gap-y-24">
		<div class="flex flex-col gap-y-10">
			<h3 class="text-5xl md:text-6xl">Disponibile per selezionate opportunità freelance</h3>
			<p class="text-2xl md:text-3xl">
				Hai in mente un progetto coinvolgente? Sentiti libero di contattarmi tramite e-mail o
				messaggio.
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

<Footer />
