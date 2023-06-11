import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import './styles.css';


export default function MyAvatar() {
  return (
    <Avatar.Root className="AvatarRoot">
        <Avatar.Image
          className="AvatarImage"
          src="/personal_site/images/frankwang.JPG"
          alt="Frank Wang"
        />
        <Avatar.Fallback className="AvatarFallback" delayMs={100}>
          FW
        </Avatar.Fallback>
      </Avatar.Root>
      )
}