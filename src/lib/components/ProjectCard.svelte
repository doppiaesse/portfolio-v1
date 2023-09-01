<script lang="ts">
	export let title: string;
	export let description: string;
	export let image: string;
	export let link: string;
</script>

<div class="flex justify-center p-3">
	<div
		class="shadow-md bg-white bg-opacity-[0.01] border border-white border-opacity-10 rounded-3xl"
	>
		<a href={link}>
			<img class="rounded-t-3xl" src={image} alt={title} />
		</a>
		<div class="p-3">
			<a href={link}>
				<h5 class="font-medium text-2xl mb-2 text-gray-100">
					{title}
				</h5>
			</a>
			<p class="mb-3 text-gray-300">
				{description}
			</p>
			<!-- <a
			href={link}
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Read more
				<svg
					class="-mr-1 ml-2 h-4 w-4"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</a> -->
		</div>
	</div>
</div>
