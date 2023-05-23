import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import './styles.css';

interface AvatarProp {
  src: string
  name: string
  abrv: string
}

const MyAvatar = ({src, name, abrv}: AvatarProp) => (
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image
        className="AvatarImage"
        src={src}
        alt={name}
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        {abrv}
      </Avatar.Fallback>
    </Avatar.Root>
);

export default MyAvatar;