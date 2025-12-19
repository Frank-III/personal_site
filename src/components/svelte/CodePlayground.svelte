<script>
	let {
		code: initialCode = '',
		language = 'javascript',
		editable = true
	} = $props();

	let code = $state(initialCode);
	let copied = $state(false);

	async function handleCopy() {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}
</script>

<div class="my-4 border border-zinc-300 dark:border-zinc-700 rounded overflow-hidden">
	<div class="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 flex justify-between items-center text-sm">
		<span class="text-zinc-600 dark:text-zinc-400">{language}</span>
		<button
			onclick={handleCopy}
			class="px-3 py-1 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded text-xs transition-colors text-zinc-700 dark:text-zinc-300"
		>
			{copied ? '✓ Copied!' : 'Copy'}
		</button>
	</div>
	{#if editable}
		<textarea
			bind:value={code}
			class="w-full p-4 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-mono text-sm resize-y min-h-[120px] focus:outline-none border-t border-zinc-200 dark:border-zinc-700"
			spellcheck="false"
		></textarea>
	{:else}
		<pre class="p-4 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 overflow-x-auto border-t border-zinc-200 dark:border-zinc-700"><code class="font-mono text-sm">{code}</code></pre>
	{/if}
</div>
