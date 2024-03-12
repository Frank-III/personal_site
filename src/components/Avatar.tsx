import * as Avatar from '@radix-ui/react-avatar';

const PersonalAvatar = () => (
  <div className="flex gap-4">
	<Avatar.Root
		className="h-24 w-24 select-none items-center justify-center overflow-hidden rounded-full"
	>
		<Avatar.Image
			className="h-full w-full rounded-[inherit] object-cover"
			src={"/personal_site/images/frankwang.JPG"}
			alt={"Frank Wang"}
		/>
		<Avatar.Fallback
			className="flex h-full w-full items-center justify-center bg-white text-4xl font-medium text-vermilion-500"
			delayMs={100}
		>
			FW
		</Avatar.Fallback>
	</Avatar.Root>
</div>

);

export default PersonalAvatar;