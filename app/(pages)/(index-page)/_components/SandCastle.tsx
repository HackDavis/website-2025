export default function SandCastle() {
  return (
    <main>
      <SandCastleBackground>
        <WhatIsHackDavis />
      </SandCastleBackground>
    </main>
  );
}

function SandCastleBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-sand-background-light">
      <div
        className="absolute -left-[299px] top-[11px] h-[950px] w-[1885px] rounded-[160px] bg-sand-background-dark"
        style={{
          zIndex: 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function WhatIsHackDavis() {
  return (
    <div className="flex flex-col items-start justify-center p-4 text-sand-text-color">
      <h1 className="font-bold">HackDavis</h1>
      <p>
        is one of the
        <strong> largest collegiate hackathon </strong> in Califronia, where
        over 950 students, creators, and leaders come together to{' '}
        <strong>create for social good</strong>.
      </p>
    </div>
  );
}
