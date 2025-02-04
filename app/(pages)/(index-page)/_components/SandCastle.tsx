import dark_sand_wave from '@public/images/what_is_hackdavis/dark_sand.svg';
import medium_sand from '@public/images/what_is_hackdavis/medium_sand.svg';
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
    <main>
      <SandCastleBackground>
        <SandCastleTexture />
        <SandCastleContent />
      </SandCastleBackground>
    </main>
  );
}

function SandCastleTexture() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-[15%] top-[80%] border border-red-500">
        <div className="relative h-[80px] w-[80px]">
          <Image
            src={shell}
            alt="shell"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className="absolute left-[35%] top-[10%] border border-red-500">
        <div className="relative h-[50px] w-[50px]">
          <Image src={star} alt="star" fill style={{ objectFit: 'contain' }} />
        </div>
      </div>
      <div className="absolute left-[60%] top-[110%] border border-red-500">
        <div className="relative h-[50px] w-[50px]">
          <Image src={crab} alt="crab" fill style={{ objectFit: 'contain' }} />
        </div>
      </div>
      <div className="absolute left-[0] top-[95%] border border-red-500">
        <div className="relative h-[50px] w-[50px]">
          <Image
            src={sand_hole1}
            alt="sand hole"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className="absolute left-[50%] top-[70%]">
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
    <div className="flex flex-row flex-wrap">
      <div className="w-[500px]">
        <WhatIsHackDavis />
      </div>
      <div className="w-1/2">
        <div className="relative -mt-32 flex h-full w-full justify-end">
          <div className="relative h-[250px] w-[250px]">
            <Image
              src={sandcastle}
              alt="sandcastle"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="relative -ml-24 h-[250px] w-[250px]">
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
    <div className="relative flex min-h-screen w-screen flex-col justify-center bg-sand-background-light">
      {/* Medium sand layer */}
      <div className="absolute inset-0 w-full">
        <div className="min-w-screen relative h-full w-full">
          <Image
            src={medium_sand}
            alt="medium sand"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Dark sand wave layer */}
      <div className="absolute inset-0 w-full">
        <div className="relative top-[40%] h-full w-full">
          <Image
            src={dark_sand_wave}
            alt="dark sand"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 border border-black p-[10%]">
        {children}
      </div>
    </div>
  );
}

function WhatIsHackDavis() {
  return (
    <div className="flex flex-col items-start justify-center border border-red-500 p-4 text-sand-text-color">
      <h1 className="text-5xl font-bold">HackDavis</h1>
      <p className="text-2xl">
        is one of the
        <strong> largest collegiate hackathon </strong> in Califronia, where
        over 950 students, creators, and leaders come together to{' '}
        <strong>create for social good</strong>.
      </p>
    </div>
  );
}
