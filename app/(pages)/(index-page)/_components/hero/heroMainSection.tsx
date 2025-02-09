import React from 'react';
import HeroInfo from './heroInfo';
import HeroSun from './heroSun';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative h-[785px] w-full overflow-hidden bg-sky-background break-400:h-[1022px]">
      <div
        className="relative h-[765px] w-full [--gradient-position:15%_100.71%] break-625:[--gradient-position:35%_100.71%] sm:[--gradient-position:30%_100.71%] md:[--gradient-position:0%_70.71%] lg:[--gradient-position:10%_78.71%] xl:[--gradient-position:23%_78.71%]"
        style={{
          background:
            'radial-gradient(70.15% 84.57% at var(--gradient-position), #FE947D 0%, #FED1A4 28%, #A4B9CE 53.02%, #4DB7D9 100%)',
        }}
      >
        <div className="absolute z-[10] hidden pl-[-169px] pt-[-51px] break-400:block">
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
        <div className="absolute left-[-89px] z-[80] block pt-[497px] break-400:left-[0px] break-400:hidden break-400:pt-[324px] md:block">
          <Image
            src="/Hero/cloud_three.svg"
            alt="Cloud"
            width={502}
            height={166}
            className="h-[62.785px] w-[211.268px] break-400:h-[166px] break-400:w-[502px]"
          />
        </div>
        <div className="absolute z-[90] block pl-[162px] pt-[570px] break-400:hidden break-400:pl-[582px] break-400:pt-[534px] lg:block">
          <Image
            src="/Hero/cloud_four.svg"
            alt="Cloud"
            width={313}
            height={97}
            className="h-[24.484px] w-[78.894px] break-400:h-[97px] break-400:w-[313px]"
          />
        </div>
        <div className="absolute right-[-70.46px] z-[30] flex w-full justify-end pt-[529px] break-400:pt-[489px] lg:flex">
          <Image
            src="/Hero/cloud_five.svg"
            alt="Cloud"
            width={417}
            height={216}
            className="h-[104.3px] w-[322.76px] break-400:h-[216px] break-400:w-[417px]"
          />
        </div>

        <div className="absolute left-[-15px] z-[80] hidden pt-[515px] break-400:block break-625:left-[-15px] break-625:pt-[485px] md:left-[-100px] md:pt-[360px] lg:left-[0px] lg:pt-[360px] xl:pt-[298px]">
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
        <div className="absolute left-[-120px] z-[120] hidden pt-[606px] break-400:block break-625:left-[-20px] break-625:pt-[606px] md:left-[-60px] md:pt-[582px] lg:left-[0px] lg:pt-[582px] xl:pt-[559px]">
          <Image
            src="/Hero/grass.svg"
            alt="Grass"
            width={755}
            height={439}
            className="h-[223.5px] w-[378px] md:h-[334px] md:w-[576px] lg:h-[334px] lg:w-[576px] xl:h-[439px] xl:w-[755px]"
          />
        </div>
        <div className="absolute z-[120] hidden pl-[30px] pt-[642px] break-400:block break-625:pl-[140px] break-625:pt-[642px] md:pl-[140px] lg:pl-[200px] xl:pl-[280px]">
          <Image
            src="/Hero/band.svg"
            alt="Band"
            width={352}
            height={215}
            className="h-[107.5px] w-[176px] md:h-[180px] md:w-[288px] lg:h-[180px] lg:w-[288px] xl:h-[215px] xl:w-[352px]"
          />
        </div>
        <div className="absolute right-[-80px] z-[110] flex hidden justify-end pt-[651px] break-400:block break-625:right-[0px] break-625:pt-[651px] md:right-[-140px] md:pt-[647px] lg:right-[0px] xl:right-[-20px] xl:pt-[657px]">
          <Image
            src="/Hero/wave.svg"
            alt="wave"
            width={609}
            height={261}
            className="h-[142.5px] w-[304.5px] md:h-[215.75px] md:w-[456.75px] lg:h-[215.75px] lg:w-[456.75px] xl:h-[261px] xl:w-[609px]"
          />
        </div>
        <div className="absolute right-[0px] z-[120] block pt-[611px] break-400:hidden">
          <Image
            src="/Hero/wave_mobile.svg"
            alt="wave"
            width={375}
            height={223}
            className="h-[223px] w-[375px]"
          />
        </div>
        <div className="absolute left-[0px] z-[120] block pt-[431px] break-400:hidden">
          <Image
            src="/Hero/grass_mobile.svg"
            alt="grass"
            width={240}
            height={355}
            className="h-[355px] w-[240px]"
          />
        </div>

        <div className="absolute left-[-12px] z-[70] pt-[497px] pt-[555px] break-400:left-[-190px] break-400:pt-[555px] break-625:left-[-20px] break-625:pt-[545px] md:left-[-250px] md:pt-[305px] lg:left-[-50px] lg:pt-[385px] xl:left-[195px] xl:pt-[384px]">
          <HeroSun />
        </div>
        <div className="absolute left-[-133px] z-[70] pt-[515px] break-400:left-[-180px] break-400:pt-[550px] break-625:left-[-20px] break-625:pt-[550px] md:left-[-20px] md:pt-[470px] lg:left-[0px] lg:pt-[470px] xl:pt-[428px]">
          <Image
            src="/Hero/dark_green_mountain.svg"
            alt="Dark green mountain"
            width={1096}
            height={293}
            className="h-[126.522px] w-[522.44px] break-400:h-[148px] break-400:w-[548px] md:h-[236px] md:w-[880px] lg:h-[236px] lg:w-[880px] xl:h-[293px] xl:w-[1096px]"
          />
        </div>
        <div className="relative z-[210] flex h-full justify-center px-[20px] pt-[177px] break-400:justify-end break-400:px-0 break-400:pr-[110px] break-400:pt-[140px] break-625:pt-[185px]">
          <HeroInfo />
        </div>
      </div>
      <div className="absolute top-[611px] z-[100] h-[223px] w-full bg-sand-background-light break-400:top-[657px] break-400:h-[367px]" />
    </div>
  );
}
