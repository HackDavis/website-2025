import React from 'react';
import Image from 'next/image';

export default function HeroMountain() {
  return (
    <div>
      <Image
        src="/Hero/dark_green_mountain.svg"
        alt="Dark green mountain"
        width={1096}
        height={293}
      />
    </div>
  );
}
