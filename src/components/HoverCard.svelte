<script lang="ts">
	import { HoverCard } from 'radix-svelte';
  import Avatar from './Avatar.svelte';
	let rootOpen: boolean;
	let rootOpenDelay: number = 300;
	let rootCloseDelay: number = 500;
	let portalContainer: HTMLElement | string;
	let contentSide: "right" = "right";
	let contentSideOffset: number;
	let contentAlign: "start" = "start";
	let contentAlignOffset: number;
	let contentArrowPadding: number;
	let contentCollisionPadding: number;
	let contentSticky: "partial" = "partial";
	let contentHideWhenDetached: boolean;
	let contentAvoidCollisions: boolean = true;
	let arrowWidth: number = 10;
	let arrowHeight: number = 5;
</script>

<div class="flex gap-4">
<HoverCard.Root
	open={rootOpen}
	openDelay={rootOpenDelay}
	closeDelay={rootCloseDelay}
>
	<HoverCard.Trigger
		class="rounded-full p-2 outline-none ring-black focus:ring"
	>
		<Avatar />
	</HoverCard.Trigger>
	<HoverCard.Portal>
		<HoverCard.Content
			side={contentSide}
			sideOffset={contentSideOffset}
			align={contentAlign}
			alignOffset={contentAlignOffset}
			arrowPadding={contentArrowPadding}
			collisionPadding={contentCollisionPadding}
			sticky={contentSticky}
			hideWhenDetached={contentHideWhenDetached}
			avoidCollisions={contentAvoidCollisions}
			class="w-80 rounded-sm dark:bg-white p-5 shadow-sm bg-[#fff8e7]"
		>
			<HoverCard.Arrow width={20} height={10} class="fill-white" />
			<div class="flex flex-col gap-2">
				<div class="flex flex-col gap-4">
					<div>
						<div class="font-bold text-black">Mood: 😶‍🌫️</div>
						<div class="font-light text-zinc-600">Reading 📚: The Rust Book</div>
						<div class="font-light text-zinc-600">Watch 🎬: SpiderMan ⭐⭐⭐⭐⭐</div>
						<div class="font-light text-zinc-600">Learning 👨‍💻: Ocaml, Rust, Effect</div>
						<div class="font-light text-zinc-600">TODO 🪜: <s>Add ThemeToggle</s>, UI</div>
					</div>
				</div>
				<div class="m-0 text-zinc-700">
          Hope Life would get settled one day
				</div>
				<!-- <div class="flex gap-4">
					<div class="flex gap-1">
						<div class="font-thin text-black">229</div>
						<div class="font-thin text-zinc-400">Stars</div>
					</div>
					<div class="flex gap-1">
						<div class="font-thin text-black">23</div>
						<div class="font-thin text-zinc-400">Forks</div>
					</div>
				</div> -->
			</div>
		</HoverCard.Content>
	</HoverCard.Portal>
</HoverCard.Root>
</div>
