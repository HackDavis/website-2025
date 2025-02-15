import React from 'react';
import HeroInfo from './heroInfo';
import HeroSun from './heroSun';
import Image from 'next/image';
import styles from './heroMainSection.module.scss';

import DarkWaterLayer from '@public/Hero/dark_water_layer.svg';
import LightWaterLayer from '@public/Hero/light_water_layer.svg';
import LightBeachLayer from '@public/Hero/light_beach_layer.svg';
import DarkBeachLayer from '@public/Hero/dark_beach_layer.svg';

export default function HeroSection() {
  return (
    <div className="relative h-[785px] w-full overflow-hidden bg-sky-background break-625:h-[1022px]">
      <div
        className="relative h-[765px] w-full [--gradient-position:15%_100.71%] break-625:[--gradient-position:35%_100.71%] sm:[--gradient-position:30%_100.71%] md:[--gradient-position:0%_70.71%] lg:[--gradient-position:10%_78.71%] xl:[--gradient-position:23%_78.71%]"
        style={{
          background:
            'radial-gradient(70.15% 84.57% at var(--gradient-position), #FE947D 0%, #FED1A4 28%, #A4B9CE 53.02%, #4DB7D9 100%)',
        }}
      >
        <div className="absolute z-[10] hidden pl-[-169px] pt-[-51px] break-625:block">
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
        <div className="absolute left-[-89px] z-[80] block pt-[497px] break-625:left-[0px] break-625:hidden break-625:pt-[324px] md:block">
          <Image
            src="/Hero/cloud_three.svg"
            alt="Cloud"
            width={502}
            height={166}
            className="h-[62.785px] w-[211.268px] break-625:h-[166px] break-625:w-[502px]"
          />
        </div>
        <div className="absolute z-[90] block pl-[162px] pt-[570px] break-625:hidden break-625:pl-[582px] break-625:pt-[534px] lg:block">
          <Image
            src="/Hero/cloud_four.svg"
            alt="Cloud"
            width={313}
            height={97}
            className="h-[24.484px] w-[78.894px] break-625:h-[97px] break-625:w-[313px]"
          />
        </div>
        <div className="absolute right-[-70.46px] z-[30] flex w-full justify-end pt-[529px] break-625:pt-[489px] lg:flex">
          <Image
            src="/Hero/cloud_five.svg"
            alt="Cloud"
            width={417}
            height={216}
            className="h-[104.3px] w-[322.76px] break-625:h-[216px] break-625:w-[417px]"
          />
        </div>

        <div className="absolute left-[-15px] z-[80] hidden pt-[515px] break-625:block sm:left-[-15px] sm:pt-[485px] md:left-[-100px] md:pt-[360px] lg:left-[0px] lg:pt-[360px] xl:pt-[298px]">
          <Image
            src="/Hero/medium_green_mountain.svg"
            alt="Medium green mountain"
            width={306}
            height={360}
            className="h-[180px] w-[153px] md:h-[294px] md:w-[252px] lg:h-[294px] lg:w-[252px] xl:h-[360px] xl:w-[306px]"
          />
        </div>
        <div className="absolute z-[130] hidden sm:left-[-20px] sm:block sm:pt-[548px] md:left-[-50px] md:pl-[-60px] md:pt-[474px] lg:left-[0px] lg:pl-[-80px] xl:pt-[463px]">
          <Image
            src="/Hero/side_mountain.svg"
            alt="Side mountain"
            width={264}
            height={561}
            className="h-[306px] w-[132px] md:h-[472px] md:w-[216px] lg:h-[472px] lg:w-[216px] xl:h-[561px] xl:w-[264px]"
          />
        </div>
        <div className="absolute left-[-120px] top-[-1px] z-[120] hidden pt-[606px] break-625:block sm:left-[-20px] sm:pt-[606px] md:left-[-60px] md:pt-[582px] lg:left-[0px] lg:pt-[582px] xl:pt-[559px]">
          <Image
            src="/Hero/grass.svg"
            alt="Grass"
            width={755}
            height={439}
            className="h-[223.5px] w-[378px] md:h-[334px] md:w-[576px] lg:h-[334px] lg:w-[576px] xl:h-[439px] xl:w-[755px]"
          />
        </div>
        <div className="absolute z-[120] hidden pl-[30px] pt-[642px] break-625:block sm:pl-[140px] sm:pt-[642px] md:pl-[140px] lg:pl-[200px] xl:pl-[280px]">
          <Image
            src="/Hero/band.svg"
            alt="Band"
            width={352}
            height={215}
            className="h-[107.5px] w-[176px] md:h-[180px] md:w-[288px] lg:h-[180px] lg:w-[288px] xl:h-[215px] xl:w-[352px]"
          />
        </div>
        <div className="xl:1/3 absolute right-[-20px] top-[-1px] z-[110] w-2/5 justify-end pt-[611px] break-625:pt-[657px] md:right-[-15px] lg:right-[-20px] xl:right-[-40px] xl:pt-[657px] 2xl:w-1/4">
          <div className="relative">
            <Image
              src={DarkWaterLayer}
              alt="dark-water-layer"
              className={styles.dark_water_layer}
              // stationary
            />
            <Image
              src={LightWaterLayer}
              alt="light-water-layer"
              className={styles.light_water_layer}
              // only moves atmost 5% to the left
            />
            <Image
              src={DarkBeachLayer}
              alt="dark-beach-layer"
              className={styles.dark_beach_layer}
              // -23% to -5%
            />
            <Image
              src={LightBeachLayer}
              alt="light-beach-layer"
              className={styles.light_beach_layer}
            />
          </div>
        </div>
        <div className="absolute left-[0px] z-[120] block pt-[431px] break-625:hidden">
          <Image
            src="/Hero/grass_mobile.svg"
            alt="grass"
            width={240}
            height={355}
            className="h-[355px] w-[240px]"
          />
        </div>

        <div className="absolute left-[-12px] z-[60] pt-[497px] break-625:left-[-190px] break-625:pt-[555px] sm:left-[-20px] sm:pt-[545px] md:left-[-250px] md:pt-[305px] lg:left-[-50px] lg:pt-[385px] xl:left-[195px] xl:pt-[384px]">
          <HeroSun />
        </div>
        <div className="absolute left-[-133px] z-[70] pt-[515px] break-625:left-[-180px] break-625:pt-[550px] sm:left-[-20px] sm:pt-[500px] md:left-[-20px] md:pt-[470px] lg:left-[0px] lg:pt-[470px] xl:pt-[428px]">
          <Image
            src="/Hero/dark_green_mountain.svg"
            alt="Dark green mountain"
            width={1096}
            height={293}
            className="h-[126.522px] w-[522.44px] break-625:h-[148px] break-625:w-[548px] sm:h-[236px] sm:w-[880px] md:h-[236px] md:w-[880px] lg:h-[293px] lg:w-[1096px] xl:h-[293px] xl:w-[1096px]"
          />
        </div>
        <div className="relative z-[210] flex h-full justify-center px-[20px] pt-[177px] break-625:justify-end break-625:px-0 break-625:pr-[110px] break-625:pt-[140px] break-625:pt-[185px]">
          <HeroInfo />
        </div>
      </div>
      <div className="absolute top-[611px] z-[100] h-[223px] w-full bg-sand-background-light break-625:top-[657px] break-625:h-[367px]" />
    </div>
  );
}
