<script lang="ts">
	export let title: string;
	export let description: string;
	export let image: string;
	export let link: string;
</script>

<div class="flex justify-center">
	<div
		class="bg-white bg-opacity-[0.01] backdrop-blur-md border border-white border-opacity-10 rounded-3xl hover:scale-105 hover:rotate-1 transition-all duration-300 ease-in-out"
	>
		<img
			class="rounded-t-3xl"
			src="https://directus.simonesalerno.it/assets/{image}/{title}.jpg"
			alt={title}
		/>
		<div class="px-6 py-5">
			<h5 class="font-medium text-2xl mb-2 text-gray-100">
				{title}
			</h5>

			<p class="mb-3 text-base lg:text-xl text-gray-300">
				{description}
			</p>
		</div>
	</div>
</div>
