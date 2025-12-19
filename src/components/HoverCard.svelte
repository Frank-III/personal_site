<script>
	import Avatar from './Avatar.svelte';

	let isOpen = $state(false);
	let openTimeout = $state(null);
	let closeTimeout = $state(null);

	function handleMouseEnter() {
		if (closeTimeout) {
			clearTimeout(closeTimeout);
			closeTimeout = null;
		}
		openTimeout = setTimeout(() => {
			isOpen = true;
		}, 100);
	}

	function handleMouseLeave() {
		if (openTimeout) {
			clearTimeout(openTimeout);
			openTimeout = null;
		}
		closeTimeout = setTimeout(() => {
			isOpen = false;
		}, 200);
	}
</script>

<div class="flex gap-4">
	<div class="relative">
		<div
			role="button"
			tabindex="0"
			class="rounded-full p-2 outline-none ring-black focus:ring cursor-pointer"
			onmouseenter={handleMouseEnter}
			onmouseleave={handleMouseLeave}
		>
			<Avatar />
		</div>

		{#if isOpen}
			<div
				class="absolute left-full top-0 ml-4 z-50"
				onmouseenter={handleMouseEnter}
				onmouseleave={handleMouseLeave}
			>
				<div class="w-80 rounded-sm dark:bg-white p-5 shadow-lg bg-[#fff8e7]">
					<div class="flex flex-col gap-2">
						<div class="flex flex-col gap-4">
							<div>
								<div class="font-bold text-black">Mood: 😶‍🌫️</div>
								<div class="font-light text-zinc-600">Reading 📚: The Rust Book</div>
								<div class="font-light text-zinc-600">Watch 🎬: SpiderMan ⭐⭐⭐⭐⭐</div>
								<div class="font-light text-zinc-600">Learning 👨‍💻: Ocaml, Rust, Effect</div>
								<div class="font-light text-zinc-600">
									TODO 🪜: <s>Add ThemeToggle</s>, UI
								</div>
							</div>
						</div>
						<div class="m-0 text-zinc-700">Hope Life would get settled one day</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
