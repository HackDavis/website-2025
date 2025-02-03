import React from 'react';
import HeroInfo from './heroInfo';
import HeroSun from './heroSun';
import HeroMountain from './heroMountain';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="h-[1024px] w-full relative bg-sky-background">
      <div
        className="h-[765px] w-full relative"
        style={{
          background:
            'radial-gradient(70.15% 84.57% at 22.83% 78.71%, #FE947D 0%, #FED1A4 28%, #A4B9CE 53.02%, #4DB7D9 100%)',
        }}
      >
        <div className="absolute pl-[-169px] pt-[-51px] z-[10]">
          <Image
            src="/Hero/cloud_one.svg"
            alt="Cloud"
            width={502}
            height={159}
          />
        </div>
        <div className="absolute pl-[376px] pt-[217px] z-[10]">
          <Image
            src="/Hero/cloud_two.svg"
            alt="Cloud"
            width={379}
            height={118}
          />
        </div>
        <div className="absolute pl-[-49px] pt-[324px] z-[30]">
          <Image
            src="/Hero/cloud_three.svg"
            alt="Cloud"
            width={502}
            height={166}
          />
        </div>
        <div className="absolute pl-[582px] pt-[534px] z-[30]">
          <Image
            src="/Hero/cloud_four.svg"
            alt="Cloud"
            width={313}
            height={97}
          />
        </div>
        <div className="absolute pl-[-74px] pt-[298px] z-[80]">
          <Image
            src="/Hero/medium_green_mountain.svg"
            alt="Medium green mountain"
            width={306}
            height={360}
          />
        </div>
        <div className="absolute pl-[-114px] pt-[463px] z-[120]">
          <Image
            src="/Hero/side_mountain.svg"
            alt="Side mountain"
            width={264}
            height={561}
          />
        </div>
        <div className="absolute pl-[-5px] pt-[559px] z-[110]">
          <Image src="/Hero/grass.svg" alt="Grass" width={755} height={439} />
        </div>
        <div className="absolute pl-[280px] pt-[642px] z-[120]">
          <Image src="/Hero/band.svg" alt="Band" width={352} height={215} />
        </div>
        <div className="absolute w-full flex justify-end pr-[-131px] pt-[657px] z-[100]">
          <Image src="/Hero/sand.svg" alt="sand" width={609} height={261} />
        </div>
        <div className="absolute w-full flex justify-end pr-[-293px] pt-[657px] z-[110]">
          <Image src="/Hero/wave.svg" alt="wave" width={609} height={261} />
        </div>

        <div className="absolute pl-[195px] pt-[384px] z-[70]">
          <HeroSun />
        </div>
        <div className="absolute pl-[-90px] pt-[428px] z-[80]">
          <HeroMountain />
        </div>
        <div className="h-full flex justify-end pt-[185px] pr-[110px] relative z-[90]">
          <HeroInfo />
        </div>
      </div>
      <div className="absolute top-[657px] h-[367px] w-full bg-sand-background-light z-[100]" />
    </div>
  );
}
