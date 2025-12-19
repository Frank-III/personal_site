<script>
	import { slide } from 'svelte/transition';

	let {
		title,
		defaultOpen = false,
		children
	} = $props();

	let isOpen = $state(defaultOpen);

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<div class="my-4 border border-zinc-300 dark:border-zinc-700 rounded overflow-hidden">
	<button
		onclick={toggle}
		class="w-full px-4 py-3 bg-black/3 dark:bg-white/5 text-left font-medium flex justify-between items-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-zinc-800 dark:text-zinc-200"
	>
		<span>{title}</span>
		<span
			class="text-sm transform transition-transform duration-200"
			style="transform: rotate({isOpen ? 90 : 0}deg)"
		>
			▶
		</span>
	</button>
	{#if isOpen}
		<div
			transition:slide={{ duration: 200 }}
			class="px-4 py-3 text-zinc-600 dark:text-zinc-400 text-sm"
		>
			{@render children()}
		</div>
	{/if}
</div>
