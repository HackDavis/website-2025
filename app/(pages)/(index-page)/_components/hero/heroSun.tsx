import React from 'react';
import Image from 'next/image';

export default function HeroSun() {
  return (
    <div className="relative h-[474px] w-[474px]">
      <div className="absolute z-[20] h-[200px] w-[200px] flex-shrink-0 rounded-[474px] bg-[#F4BC83] blur-[50px] break-400:h-[474px] break-400:w-[474px]" />
      <div className="absolute z-[20] h-[200px] w-[200px] flex-shrink-0 rounded-[474px] bg-[#FFF2D3] break-400:h-[474px] break-400:w-[474px]" />
      <div className="absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 break-400:h-[2800px] break-400:w-[2800px]">
        <Image
          src="/Hero/sun_rays.svg"
          alt="Sun Rays"
          width={2800}
          height={2800}
          className="absolute left-[-150px] top-[-120px] z-[10] origin-center animate-spin-slow break-400:left-[0px] break-400:top-[0px]"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </div>
  );
}
