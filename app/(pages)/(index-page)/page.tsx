// import Directors from './(about-us)/_components/Directors/Directors';
import SandCastle from './_components/SandCastle';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 bg-sky-background p-8 pb-20 sm:p-20">
      {/* Intro Section */}
      <p className="invisible font-metropolis text-4xl font-bold">
        Halo! Welcome to the HackDavis template repo :D
      </p>
      <p className="font-montserrat text-4xl font-bold">
        Halo! Welcome to the HackDavis template repo :D
      </p>
      <p className="font-inter text-4xl font-bold">
        Halo! Welcome to the HackDavis template repo :D
      </p>
      <p className="font-jakarta text-4xl font-bold">
        Halo! Welcome to the HackDavis template repo :D
      </p>
      <SandCastle />

      {/* Sections for Testing */}
      <div
        id="about"
        className="flex h-[800px] w-full items-center justify-center bg-gray-100"
      >
        <h2 className="text-3xl font-bold">About Section</h2>
      </div>

      <div
        id="faq"
        className="flex h-[800px] w-full items-center justify-center bg-gray-200"
      >
        <h2 className="text-3xl font-bold">FAQ Section</h2>
      </div>

      <div
        id="sponsors"
        className="flex h-[800px] w-full items-center justify-center bg-gray-300"
      >
        <h2 className="text-3xl font-bold">Sponsors Section</h2>
      </div>
    </div>
  );
}
