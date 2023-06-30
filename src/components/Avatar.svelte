<script lang="ts">
	import { Avatar } from 'radix-svelte';
	let imageSrc: string = "/personal_site/images/frankwang.JPG";
	let imageAlt: string = "Frank Wang";
	let fallbackDelayMs: number;
</script>

<div class="flex gap-4">
	<Avatar.Root
		class="h-24 w-24 select-none items-center justify-center overflow-hidden rounded-full"
	>
		<Avatar.Image
			class="h-full w-full rounded-[inherit] object-cover"
			src={imageSrc}
			alt={imageAlt}
		/>
		<Avatar.Fallback
			class="flex h-full w-full items-center justify-center bg-white text-4xl font-medium text-vermilion-500"
			delayMs={fallbackDelayMs}
		>
			FW
		</Avatar.Fallback>
	</Avatar.Root>
</div>
