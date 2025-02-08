import sand_background from '@public/images/what_is_hackdavis/sand_background.svg';
import froggy from '@public/images/what_is_hackdavis/Froggy.svg';
import shell from '@public/images/what_is_hackdavis/shell.svg';
import sandcastle from '@public/images/what_is_hackdavis/sandcastle.svg';
import star from '@public/images/what_is_hackdavis/star.svg';
import crab from '@public/images/what_is_hackdavis/crab.svg';
import sand_hole1 from '@public/images/what_is_hackdavis/sand_hole1.svg';
import sand_hole2 from '@public/images/what_is_hackdavis/sand_hole2.svg';
import sand_hole3 from '@public/images/what_is_hackdavis/sand_hole3.svg';

import Image from 'next/image';

export default function SandCastle() {
  return (
    <main className="overflow-hidden">
      <SandCastleBackground>
        <SandCastleContent />
      </SandCastleBackground>
    </main>
  );
}

function SandCastleTexture() {
  return (
    <div className="absolute inset-0 h-[950px] w-full">
      <div className="absolute left-[15%] top-[65%]">
        <div className="relative h-[80px] w-[80px]">
          <Image
            src={shell}
            alt="shell"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className="absolute left-[35%] top-[10%]">
        <div className="relative h-[50px] w-[50px]">
          <Image src={star} alt="star" fill style={{ objectFit: 'contain' }} />
        </div>
      </div>
      <div className="absolute left-[60%] top-[40%]">
        <div className="relative h-[100px] w-[100px]">
          <Image src={crab} alt="crab" fill style={{ objectFit: 'contain' }} />
        </div>
      </div>
      <div className="absolute left-[0] top-[65%]">
        <div className="relative h-[50px] w-[50px]">
          <Image
            src={sand_hole1}
            alt="sand hole"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className="absolute left-[50%] top-[35%]">
        <div className="relative h-[100px] w-[100px]">
          <Image
            src={sand_hole2}
            alt="sand hole"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className="absolute right-[0] top-[10%]">
        <div className="relative h-[70px] w-[70px]">
          <Image
            src={sand_hole3}
            alt="sand hole"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
}

function SandCastleContent() {
  return (
    <div className="flex h-fit w-full flex-row flex-wrap p-[10%]">
      <div className="w-full sm:w-full md:w-[400px] lg:w-[500px]">
        <WhatIsHackDavis />
      </div>
      <div className="w-full md:w-1/3">
        <div className="relative mt-8 flex h-full w-full justify-center md:-mt-10 md:justify-end">
          <div className="relative h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px]">
            <Image
              src={sandcastle}
              alt="sandcastle"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="relative -ml-12 h-[150px] w-[150px] sm:-ml-16 sm:h-[200px] sm:w-[200px] md:-ml-24 md:h-[250px] md:w-[250px]">
            <Image
              src={froggy}
              alt="froggy"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SandCastleBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-auto w-screen flex-col justify-center bg-sand-background-light">
      {/* Medium sand layer */}
      <div className="relative h-[950px] w-full">
        <Image
          src={sand_background}
          alt="sand background"
          fill
          className="object-cover"
          style={{
            minWidth: '100%',
            minHeight: '100%',
          }}
        />
        <SandCastleTexture />
        <div className="absolute inset-0 z-10 flex w-full items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}

function WhatIsHackDavis() {
  return (
    <div className="flex flex-col items-start justify-center p-4 text-sand-text-color">
      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">HackDavis</h1>
      <p className="max-w-[90%] text-lg sm:max-w-[80%] sm:text-xl md:max-w-[70%] md:text-2xl">
        is one of the
        <strong> largest collegiate hackathon </strong> in Califronia, where
        over 950 students, creators, and leaders come together to{' '}
        <strong>create for social good</strong>.
      </p>
    </div>
  );
}
