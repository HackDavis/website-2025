import React from 'react';
import Image from 'next/image';

export default function HeroSun() {
  return (
    <div className="relative w-[474px] h-[474px]">
      <div className="absolute w-[474px] h-[474px] rounded-[474px] bg-[#F4BC83] blur-[50px] flex-shrink-0 z-[20]" />
      <div className="absolute w-[474px] h-[474px] rounded-[474px] bg-[#FFF2D3] flex-shrink-0 z-[20]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2783px] h-[2591px]">
        <Image
          src="/Hero/sun_rays.svg"
          alt="Sun Rays"
          width={2200}
          height={2200}
          className="animate-spin-slow origin-center z-[10]"
          style={{
            position: 'absolute',
            left: '295px',
            top: '210px',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </div>
  );
}
