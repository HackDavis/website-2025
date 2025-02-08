import React from 'react';
import HeroInfo from './heroInfo';
import HeroSun from './heroSun';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative h-[1024px] w-full overflow-hidden bg-sky-background">
      <div
        className="relative h-[765px] w-full [--gradient-position:15%_100.71%] break-625:[--gradient-position:35%_100.71%] sm:[--gradient-position:30%_100.71%] md:[--gradient-position:0%_70.71%] lg:[--gradient-position:10%_78.71%] xl:[--gradient-position:23%_78.71%]"
        style={{
          background:
            'radial-gradient(70.15% 84.57% at var(--gradient-position), #FE947D 0%, #FED1A4 28%, #A4B9CE 53.02%, #4DB7D9 100%)',
        }}
      >
        <div className="absolute z-[10] pl-[-169px] pt-[-51px]">
          <Image
            src="/Hero/cloud_one.svg"
            alt="Cloud"
            width={502}
            height={159}
          />
        </div>
        <div className="absolute z-[10] hidden pl-[376px] pt-[217px] md:block">
          <Image
            src="/Hero/cloud_two.svg"
            alt="Cloud"
            width={379}
            height={118}
          />
        </div>
        <div className="absolute z-[30] hidden pl-[-49px] pt-[324px] md:block">
          <Image
            src="/Hero/cloud_three.svg"
            alt="Cloud"
            width={502}
            height={166}
          />
        </div>
        <div className="absolute z-[30] pl-[582px] pt-[534px]">
          <Image
            src="/Hero/cloud_four.svg"
            alt="Cloud"
            width={313}
            height={97}
          />
        </div>
        <div className="absolute z-[30] flex w-full justify-end pr-[-250px] pt-[489px] lg:flex">
          <Image
            src="/Hero/cloud_five.svg"
            alt="Cloud"
            width={417}
            height={216}
          />
        </div>

        <div className="absolute left-[-15px] z-[80] pt-[515px] break-625:left-[-15px] break-625:pt-[485px] md:left-[-100px] md:pt-[360px] lg:left-[0px] lg:pt-[360px] xl:pt-[298px]">
          <Image
            src="/Hero/medium_green_mountain.svg"
            alt="Medium green mountain"
            width={306}
            height={360}
            className="h-[180px] w-[153px] md:h-[294px] md:w-[252px] lg:h-[294px] lg:w-[252px] xl:h-[360px] xl:w-[306px]"
          />
        </div>
        <div className="absolute z-[130] hidden break-625:left-[-20px] break-625:block break-625:pt-[548px] md:left-[-50px] md:pl-[-60px] md:pt-[474px] lg:left-[0px] lg:pl-[-80px] xl:pt-[463px]">
          <Image
            src="/Hero/side_mountain.svg"
            alt="Side mountain"
            width={264}
            height={561}
            className="h-[306px] w-[132px] md:h-[472px] md:w-[216px] lg:h-[472px] lg:w-[216px] xl:h-[561px] xl:w-[264px]"
          />
        </div>
        <div className="absolute left-[-120px] z-[120] pt-[606px] break-625:left-[-20px] break-625:pt-[606px] md:left-[-60px] md:pt-[582px] lg:left-[0px] lg:pt-[582px] xl:pt-[559px]">
          <Image
            src="/Hero/grass.svg"
            alt="Grass"
            width={755}
            height={439}
            className="h-[223.5px] w-[378px] md:h-[334px] md:w-[576px] lg:h-[334px] lg:w-[576px] xl:h-[439px] xl:w-[755px]"
          />
        </div>
        <div className="absolute z-[120] pl-[30px] pt-[642px] break-625:pl-[140px] break-625:pt-[642px] md:pl-[140px] lg:pl-[200px] xl:pl-[280px]">
          <Image
            src="/Hero/band.svg"
            alt="Band"
            width={352}
            height={215}
            className="h-[107.5px] w-[176px] md:h-[180px] md:w-[288px] lg:h-[180px] lg:w-[288px] xl:h-[215px] xl:w-[352px]"
          />
        </div>
        <div className="absolute right-[-80px] z-[110] flex justify-end pt-[651px] break-625:right-[0px] break-625:pt-[651px] md:right-[-140px] md:pt-[647px] lg:right-[0px] xl:right-[-20px] xl:pt-[657px]">
          <Image
            src="/Hero/wave.svg"
            alt="wave"
            width={609}
            height={261}
            className="h-[142.5px] w-[304.5px] md:h-[215.75px] md:w-[456.75px] lg:h-[215.75px] lg:w-[456.75px] xl:h-[261px] xl:w-[609px]"
          />
        </div>

        <div className="absolute left-[-190px] z-[70] pt-[555px] break-625:left-[-20px] break-625:pt-[545px] md:left-[-250px] md:pt-[305px] lg:left-[-50px] lg:pt-[385px] xl:left-[195px] xl:pt-[384px]">
          <HeroSun />
        </div>
        <div className="absolute left-[-180px] z-[70] pt-[550px] break-625:left-[-20px] break-625:pt-[550px] md:left-[-20px] md:pt-[470px] lg:left-[0px] lg:pt-[470px] xl:pt-[428px]">
          <Image
            src="/Hero/dark_green_mountain.svg"
            alt="Dark green mountain"
            width={1096}
            height={293}
            className="h-[148px] w-[548px] md:h-[236px] md:w-[880px] lg:h-[236px] lg:w-[880px] xl:h-[293px] xl:w-[1096px]"
          />
        </div>
        <div className="relative z-[210] flex h-full justify-end pr-[110px] pt-[140px] break-625:pt-[185px]">
          <HeroInfo />
        </div>
      </div>
      <div className="absolute top-[657px] z-[100] h-[367px] w-full bg-sand-background-light" />
    </div>
  );
}
