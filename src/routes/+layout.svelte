<script lang="ts">
	import { browser } from '$app/environment';
	import { menuStatus } from '$lib/utils';
	import '$lib/style/globals.css';

	$: if (browser) {
		document.documentElement.classList.toggle('overflow-hidden', $menuStatus);
		document.documentElement.classList.toggle('sm:overflow-auto', $menuStatus);
	}
</script>

<div class="w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mx-auto relative">
	<slot />
</div>
