<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex flex-col items-center justify-center min-h-[70vh]">
	<h1 class="text-9xl font-bold">{page.status}</h1>
	<p class="mt-2 text-4xl">{page.error?.message}</p>
	<a data-sveltekit-reload href="/" class="flex items-center gap-x-1 mt-8 text-2xl hover:underline">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			style="fill: #f3f4f6;transform: ;msFilter:;margin-bottom: -0.2rem;"
			><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg
		>
		Back to home
	</a>
</div>
