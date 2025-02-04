// import Directors from './(about-us)/_components/Directors/Directors';
import SandCastle from './_components/SandCastle';

export default function Home() {
  return (
    <div>
      {/* Intro Section */}
      {/* <p className="invisible font-metropolis text-4xl font-bold">
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
      </p> */}
      <div className="h-[300px] w-full bg-red-500"></div>
      <div className="flex flex-col items-center justify-center">
        <SandCastle />
      </div>

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
