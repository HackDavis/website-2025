import HeroSection from './_components/hero/heroSection';

export default function Home() {
  return (
    <div className="grid items-center justify-items-center bg-sky-background">
      <HeroSection />

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
