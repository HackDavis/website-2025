// import Directors from './(about-us)/_components/Directors/Directors';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      {/* Intro Section */}
      <p className="text-4xl font-bold font-metropolis">
        Halo! Welcome to the HackDavis template repo :D
      </p>
      <p className="text-4xl font-bold font-montserrat">
        Halo! Welcome to the HackDavis template repo :D
      </p>
      <p className="text-4xl font-bold font-inter">
        Halo! Welcome to the HackDavis template repo :D
      </p>
      <p className="text-4xl font-bold font-jakarta">
        Halo! Welcome to the HackDavis template repo :D
      </p>

      {/* Sections for Testing */}
      <div
        id="about"
        className="h-[800px] w-full flex items-center justify-center bg-gray-100"
      >
        <h2 className="text-3xl font-bold">About Section</h2>
      </div>

      <div
        id="faq"
        className="h-[800px] w-full flex items-center justify-center bg-gray-200"
      >
        <h2 className="text-3xl font-bold">FAQ Section</h2>
      </div>

      <div
        id="sponsors"
        className="h-[800px] w-full flex items-center justify-center bg-gray-300"
      >
        <h2 className="text-3xl font-bold">Sponsors Section</h2>
      </div>
    </div>
  );
}
