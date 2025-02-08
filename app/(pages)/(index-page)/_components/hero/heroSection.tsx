import React from 'react';
import HeroInfo from './heroInfo';
import HeroSun from './heroSun';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="h-[1024px] w-full relative bg-sky-background overflow-hidden">
      <div
        className="h-[765px] w-full relative
          [--gradient-position:15%_100.71%]
          break-625:[--gradient-position:35%_100.71%]
          sm:[--gradient-position:30%_100.71%]
          md:[--gradient-position:0%_70.71%]
          lg:[--gradient-position:10%_78.71%]
          xl:[--gradient-position:23%_78.71%]"
        style={{
          background:
            'radial-gradient(70.15% 84.57% at var(--gradient-position), #FE947D 0%, #FED1A4 28%, #A4B9CE 53.02%, #4DB7D9 100%)',
        }}
      >
        <div className="absolute pl-[-169px] pt-[-51px] z-[10] ">
          <Image
            src="/Hero/cloud_one.svg"
            alt="Cloud"
            width={502}
            height={159}
          />
        </div>
        <div className="absolute pl-[376px] pt-[217px] z-[10] hidden md:block">
          <Image
            src="/Hero/cloud_two.svg"
            alt="Cloud"
            width={379}
            height={118}
          />
        </div>
        <div className="absolute pl-[-49px] pt-[324px] z-[30] hidden md:block">
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
        <div className="absolute w-full flex justify-end pr-[-250px] pt-[489px] z-[30] lg:flex">
          <Image
            src="/Hero/cloud_five.svg"
            alt="Cloud"
            width={417}
            height={216}
          />
        </div>

        <div className="absolute  xl:pt-[298px] z-[80] lg:pt-[360px] md:pt-[360px] lg:left-[0px] md:left-[-100px] break-625:pt-[485px] break-625:left-[-15px] pt-[515px] left-[-15px]">
          <Image
            src="/Hero/medium_green_mountain.svg"
            alt="Medium green mountain"
            width={306}
            height={360}
            className="xl:w-[306px] xl:h-[360px] lg:w-[252px] lg:h-[294px] md:w-[252px] md:h-[294px] w-[153px] h-[180px]"
          />
        </div>
        <div className="absolute xl:pt-[463px] z-[130] md:pt-[474px] lg:pl-[-80px] md:pl-[-60px] lg:left-[0px] md:left-[-50px] break-625:pt-[548px] break-625:left-[-20px] break-625:block hidden">
          <Image
            src="/Hero/side_mountain.svg"
            alt="Side mountain"
            width={264}
            height={561}
            className="xl:w-[264px] xl:h-[561px] lg:w-[216px] lg:h-[472px] md:w-[216px] md:h-[472px] w-[132px] h-[306px]"
          />
        </div>
        <div className="absolute xl:pt-[559px] z-[120] lg:pt-[582px] md:pt-[582px] lg:left-[0px] md:left-[-60px] break-625:pt-[606px] break-625:left-[-20px] pt-[606px] left-[-120px]">
          <Image
            src="/Hero/grass.svg"
            alt="Grass"
            width={755}
            height={439}
            className="xl:w-[755px] xl:h-[439px] lg:w-[576px] lg:h-[334px] md:w-[576px] md:h-[334px] w-[378px] h-[223.5px]"
          />
        </div>
        <div className="absolute xl:pl-[280px] pt-[642px] z-[120] lg:pl-[200px] md:pl-[140px] break-625:pt-[642px] break-625:pl-[140px] pl-[30px]">
          <Image
            src="/Hero/band.svg"
            alt="Band"
            width={352}
            height={215}
            className="xl:w-[352px] xl:h-[215px] lg:w-[288px] lg:h-[180px] md:w-[288px] md:h-[180px] w-[176px] h-[107.5px]"
          />
        </div>
        <div className="absolute flex justify-end xl:pt-[657px] z-[110] md:pt-[647px] xl:right-[-20px] lg:right-[0px] md:right-[-140px] break-625:pt-[651px] break-625:right-[0px] pt-[651px] right-[-80px] ">
          <Image
            src="/Hero/wave.svg"
            alt="wave"
            width={609}
            height={261}
            className="xl:w-[609px] xl:h-[261px] lg:w-[456.75px] lg:h-[215.75px] md:w-[456.75px] md:h-[215.75px] w-[304.5px] h-[142.5px]"
          />
        </div>

        <div className="absolute xl:left-[195px] xl:pt-[384px] lg:left-[-50px] lg:pt-[385px] md:left-[-250px] md:pt-[305px] break-625:left-[-20px] break-625:pt-[545px] left-[-190px] pt-[555px] z-[70]">
          <HeroSun />
        </div>
        <div className="absolute xl:pt-[428px] z-[70] lg:pt-[470px] md:pt-[470px] lg:left-[0px] md:left-[-20px] break-625:pt-[550px] break-625:left-[-20px] pt-[550px] left-[-180px]">
          <Image
            src="/Hero/dark_green_mountain.svg"
            alt="Dark green mountain"
            width={1096}
            height={293}
            className="xl:w-[1096px] xl:h-[293px] lg:w-[880px] lg:h-[236px] md:w-[880px] md:h-[236px] w-[548px] h-[148px]"
          />
        </div>
        <div className="h-full flex justify-end pt-[140px] break-625:pt-[185px] pr-[110px] relative z-[210]">
          <HeroInfo />
        </div>
      </div>
      <div className="absolute top-[657px] h-[367px] w-full bg-sand-background-light z-[100]" />
    </div>
  );
}
