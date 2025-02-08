import React from 'react';
import Image from 'next/image';

export default function HeroSun() {
  return (
    <div className="relative w-[474px] h-[474px]">
      <div className="absolute w-[474px] h-[474px] rounded-[474px] bg-[#F4BC83] blur-[50px] flex-shrink-0 z-[20]" />
      <div className="absolute w-[474px] h-[474px] rounded-[474px] bg-[#FFF2D3] flex-shrink-0 z-[20]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2800px] h-[2800px]">
        <Image
          src="/Hero/sun_rays.svg"
          alt="Sun Rays"
          width={2800}
          height={2800}
          className="animate-spin-slow origin-center z-[10]"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </div>
  );
}
