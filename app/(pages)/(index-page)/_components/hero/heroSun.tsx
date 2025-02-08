import React from 'react';
import Image from 'next/image';

export default function HeroSun() {
  return (
    <div className="relative h-[474px] w-[474px]">
      <div className="absolute z-[20] h-[474px] w-[474px] flex-shrink-0 rounded-[474px] bg-[#F4BC83] blur-[50px]" />
      <div className="absolute z-[20] h-[474px] w-[474px] flex-shrink-0 rounded-[474px] bg-[#FFF2D3]" />
      <div className="absolute left-1/2 top-1/2 h-[2800px] w-[2800px] -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/Hero/sun_rays.svg"
          alt="Sun Rays"
          width={2800}
          height={2800}
          className="z-[10] origin-center animate-spin-slow"
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
