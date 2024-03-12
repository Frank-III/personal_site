import * as HoverCard from '@radix-ui/react-hover-card';
import Avatar from './Avatar';

const PersonalHoverCard = () => (
  <div className="flex gap-4">
  <HoverCard.Root
    openDelay={100}
    closeDelay={200}
  >
    <HoverCard.Trigger
      className="rounded-full p-2 outline-none ring-black focus:ring"
    >
      <Avatar />
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        side={"right"}
        align={"start"}
        sticky={"partial"}
        avoidCollisions={true}
        className="w-80 rounded-sm dark:bg-white p-5 shadow-sm bg-[#fff8e7]"
      >
        <HoverCard.Arrow width={20} height={10} className="fill-white" />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <div>
              <div className="font-bold text-black">Mood: 😶‍🌫️</div>
              <div className="font-light text-zinc-600">Reading 📚: The Rust Book</div>
              <div className="font-light text-zinc-600">Watch 🎬: SpiderMan ⭐⭐⭐⭐⭐</div>
              <div className="font-light text-zinc-600">Learning 👨‍💻: Ocaml, Rust, Effect</div>
              <div className="font-light text-zinc-600">TODO 🪜: <s>Add ThemeToggle</s>, UI</div>
            </div>
          </div>
          <div className="m-0 text-zinc-700">
            Hope Life would get settled one day
          </div>
          {/* <!-- <div class="flex gap-4">
            <div class="flex gap-1">
              <div class="font-thin text-black">229</div>
              <div class="font-thin text-zinc-400">Stars</div>
            </div>
            <div class="flex gap-1">
              <div class="font-thin text-black">23</div>
              <div class="font-thin text-zinc-400">Forks</div>
            </div>
          </div> --> */}
        </div>
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
  </div>
);

export default PersonalHoverCard;