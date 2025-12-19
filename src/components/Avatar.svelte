<script>
	import { onMount } from 'svelte';

	let imageLoaded = $state(false);
	let imageError = $state(false);

	function handleLoad() {
		imageLoaded = true;
	}

	function handleError() {
		imageError = true;
	}
</script>

<div class="flex gap-4">
	<div class="h-24 w-24 select-none items-center justify-center overflow-hidden rounded-full flex relative">
		{#if !imageError}
			<img
				class="h-full w-full rounded-[inherit] object-cover"
				class:opacity-0={!imageLoaded}
				class:opacity-100={imageLoaded}
				src="/personal_site/images/frankwang.JPG"
				alt="Frank Wang"
				onload={handleLoad}
				onerror={handleError}
			/>
		{/if}

		{#if !imageLoaded || imageError}
			<div class="flex h-full w-full items-center justify-center bg-white text-4xl font-medium text-vermilion-500 absolute inset-0">
				FW
			</div>
		{/if}
	</div>
</div>

<style>
	img {
		transition: opacity 0.2s ease-in-out;
	}
</style>
