<script lang="ts">
	import Typewriter from 'svelte-typewriter';

	export let text: string[];
</script>

<div class="xl:-mt-2 xl:-my-[0.4rem] -my-[0.2rem] typewriter">
	<Typewriter mode="loop" interval={60}>
		{#each text as line}
			<span>{line}</span>
		{/each}
	</Typewriter>
</div>
