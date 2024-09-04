<script lang="ts">
	import { browser } from '$app/environment';
	import { menuStatus } from '$lib/utils';
	import '../globals.css';

	$: if (browser) {
		document.documentElement.style.overflow = $menuStatus ? 'hidden' : '';
	}
</script>

<div class="w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mx-auto relative">
	<slot />
</div>
