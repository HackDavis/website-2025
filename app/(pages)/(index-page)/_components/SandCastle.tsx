import dark_sand_wave from '@public/images/what_is_hackdavis/dark_sand.svg';
import medium_sand from '@public/images/what_is_hackdavis/medium_sand.svg';
import froggy from '@public/images/what_is_hackdavis/Froggy.svg';
import shell from '@public/images/what_is_hackdavis/shell.svg';
import sandcastle from '@public/images/what_is_hackdavis/sandcastle.svg';
import star from '@public/images/what_is_hackdavis/star.svg';

import Image from 'next/image';

export default function SandCastle() {
  return (
    <main>
      <SandCastleBackground>
        <SandCastleContent />
      </SandCastleBackground>
    </main>
  );
}

function SandCastleContent() {
  return (
    <div className="flex flex-row flex-wrap">
      <div className="w-1/2">
        <WhatIsHackDavis />
      </div>
      <div className="w-1/2">
        <div className="relative flex h-full w-full border border-blue-300">
          <div className="relative h-[250px] w-[250px]">
            <Image
              src={sandcastle}
              alt="sandcastle"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="relative h-[250px] w-[250px]">
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
    <div className="relative flex min-h-screen w-screen flex-col justify-center overflow-hidden bg-sand-background-light p-[10%]">
      {/* Medium sand layer */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src={medium_sand}
            alt="medium sand"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Dark sand wave layer */}
      <div className="absolute inset-0 border border-red-500">
        <div className="relative top-[40%] h-full w-full">
          <Image
            src={dark_sand_wave}
            alt="dark sand"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function WhatIsHackDavis() {
  return (
    <div className="flex flex-col items-start justify-center border border-red-500 p-4 text-sand-text-color">
      <h1 className="text-4xl font-bold">HackDavis</h1>
      <p>
        is one of the
        <strong> largest collegiate hackathon </strong> in Califronia, where
        over 950 students, creators, and leaders come together to{' '}
        <strong>create for social good</strong>.
      </p>
    </div>
  );
}
