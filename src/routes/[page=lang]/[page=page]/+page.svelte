<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/state';

	let { data }: { data: PageData } = $props();
</script>

<div>
	<h1>Hello this is page {page.params.page}</h1>
</div>
