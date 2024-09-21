<script lang="ts">
	import Typewriter from 'svelte-typewriter';

	export let text: string[];
</script>

<div class="typewriter">
	<Typewriter mode="loop" interval={60}>
		{#each text as line}
			<h2 class="flex">{line}</h2>
		{/each}
	</Typewriter>
</div>
