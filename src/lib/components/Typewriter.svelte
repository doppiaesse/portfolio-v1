<script lang="ts">
	import Typewriter from 'svelte-typewriter';

	export let en = false;
</script>

<div class="flex">
	<span class="me-2"> > </span>
	<Typewriter mode="loop" interval={60}>
		{#if en}
			<span>Full-Stack developer</span>
			<span>Tech enthusiast</span>
			<span>Perpetually curious</span>
		{:else}
			<span>Sviluppatore Full-Stack</span>
			<span>Appassionato di tecnologia</span>
			<span>Perennemente curioso</span>
		{/if}
	</Typewriter>
</div>
