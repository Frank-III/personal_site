<script>
	let {
		type = 'note',
		title = '',
		children
	} = $props();

	const styles = {
		note: 'bg-black/3 dark:bg-white/5 border-zinc-300 dark:border-zinc-700',
		tip: 'bg-black/3 dark:bg-white/5 border-zinc-400 dark:border-zinc-600',
		important: 'bg-black/3 dark:bg-white/5 border-zinc-500 dark:border-zinc-500',
		warning: 'bg-black/3 dark:bg-white/5 border-zinc-600 dark:border-zinc-400'
	};
</script>

<div class="my-4 p-4 border-l-2 rounded {styles[type]}">
	{#if title}
		<div class="font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
			{title}
		</div>
	{/if}
	<div class="text-sm text-zinc-600 dark:text-zinc-400">
		{@render children()}
	</div>
</div>
