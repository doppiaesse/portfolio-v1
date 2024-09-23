<script lang="ts">
	import type { LayoutData } from './$types';
	import { browser } from '$app/environment';
	import { languages, menuStatus, selectedLanguage, translation } from '$lib/utils';
	import '$lib/style/globals.css';

	export let data: LayoutData;
	selectedLanguage.set(data.selectedLanguage);
	languages.set(data.languages);
	translation.set(data.translation);

	$: if (browser) {
		document.documentElement.classList.toggle('overflow-hidden', $menuStatus);
		document.documentElement.classList.toggle('sm:overflow-auto', $menuStatus);
	}

	console.log(data);
</script>

<div class="w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mx-auto relative">
	<slot />
</div>
