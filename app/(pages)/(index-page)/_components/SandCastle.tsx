import sand_background from '@public/images/what_is_hackdavis/sand_background.svg';
import sand_background_dark from '@public/images/what_is_hackdavis/sand_background_dark.svg';
import froggy from '@public/images/what_is_hackdavis/Froggy.svg';
import shell from '@public/images/what_is_hackdavis/shell.svg';
import sandcastle from '@public/images/what_is_hackdavis/sandcastle.svg';
import star from '@public/images/what_is_hackdavis/star.svg';
import crab from '@public/images/what_is_hackdavis/crab.svg';
import sand_hole1 from '@public/images/what_is_hackdavis/sand_hole1.svg';
import sand_hole2 from '@public/images/what_is_hackdavis/sand_hole2.svg';
// import sand_hole3 from '@public/images/what_is_hackdavis/sand_hole3.svg';
// import sand_hole_top from '@public/images/what_is_hackdavis/sand_hole_top.svg';

import styles from './SandCastle.module.scss';
import Image from 'next/image';

export default function SandCastle() {
  return (
    <main className="relative top-[-1px] overflow-hidden bg-sand-background-light pt-4 break-625:pt-0">
      <SandCastleBackground>
        <SandCastleContent />
      </SandCastleBackground>
    </main>
  );
}

function SandCastleContent() {
  return (
    <div className="mt-20 flex h-fit w-full flex-wrap justify-between gap-4 p-[10%] pt-[15%] sm:mt-10 sm:gap-0 md:flex-row md:p-[10%]">
      <div className="lg:2/3 w-full break-400:w-3/4 sm:p-10 sm:pr-0 md:w-3/5 xl:w-1/2">
        <WhatIsHackDavisText />
      </div>
      <div className="flex w-full items-end justify-end sm:items-center sm:justify-center md:w-1/3">
        <div className="relative mt-8 flex h-full w-2/3 justify-center sm:w-full md:-mt-10 md:justify-end">
          <div className="relative h-[150px] w-[185px] sm:h-[200px] sm:w-[245px] md:h-[245px] md:w-[301px]">
            <Image
              src={sandcastle}
              alt="sandcastle"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <div className="relative -ml-10 h-[200px] w-[200px] sm:-ml-12 sm:h-[270px] sm:w-[270px] md:-ml-16 md:h-[335.45px] md:w-[330px]">
            <Image
              src={froggy}
              alt="froggy"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatIsHackDavisText() {
  return (
    <div className="flex w-full max-w-[900px] flex-col items-start justify-center text-sand-text-color">
      <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl">
        HackDavis
      </h1>
      <p className="text-base sm:text-xl md:text-2xl lg:text-3xl 2xl:text-5xl">
        is one of the
        <strong> largest collegiate hackathons </strong> in California, where
        over 900 students, creators, and leaders come together to{' '}
        <strong>create for social good</strong>.
      </p>
    </div>
  );
}

function SandCastleBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-auto w-screen flex-col justify-center bg-sand-background-light">
      <div className="relative h-[750px] w-full sm:h-[950px] md:h-[900px] lg:h-[950px] xl:h-[1100px] 2xl:h-[1300px]">
        <Image
          src={sand_background}
          alt="sand background"
          fill
          className="object-cover object-top"
          style={{
            minWidth: '100%',
            minHeight: '100%',
          }}
        />
        <SandCastleTexture />
        <div className={styles.sand_background_dark}>
          <Image
            src={sand_background_dark}
            alt="sand background dark"
            fill
            // className="relative min-w=full h-full"
            className="object-cover object-top"
            style={{
              minWidth: '100%',
              minHeight: '100%',
            }}
          />
        </div>
        <div className="absolute inset-0 z-10 flex w-full">{children}</div>
      </div>
    </div>
  );
}

function SandCastleTexture() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <div className="absolute left-[15%] top-[50%] z-10 sm:left-[10%] sm:top-[65%] lg:top-[65%]">
        <div className="relative h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[70px] md:w-[70px] lg:h-[80px] lg:w-[80px]">
          <Image
            src={shell}
            alt="shell"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className="absolute right-[20%] top-[5%] md:right-[45%] md:top-[12%]">
        <div className="relative h-[80px] w-[80px] md:h-[50px] md:w-[50px] xl:h-[100px] xl:w-[100px]">
          <Image src={star} alt="star" fill style={{ objectFit: 'contain' }} />
        </div>
      </div>
      <div className="absolute left-[60%] top-[40%]">
        <div className="relative hidden h-[50px] w-[50px] md:block md:h-[75px] md:w-[75px] lg:h-[100px] lg:w-[100px]">
          <Image src={crab} alt="crab" fill style={{ objectFit: 'contain' }} />
        </div>
      </div>
      {/* <div className="absolute left-[0] top-[65%]">
        <div className="relative h-[50px] w-[50px]">
          <Image
            src={sand_hole1}
            alt="sand hole"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div> */}
      <div className="absolute right-[-2%] top-[15%]">
        <div className="relative h-[25px] w-[55px]">
          <Image
            src={sand_hole2}
            alt="sand hole"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className="absolute left-[-15px] top-[55%]">
        <div className="relative h-[20px] w-[100px]">
          <Image
            src={sand_hole1}
            alt="sand hole"
            fill
            style={{ objectFit: 'fill' }}
          />
        </div>
      </div>
    </div>
  );
}
