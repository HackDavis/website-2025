import AboutUs from './(about-us)/about-us/page';

export default function Home() {
  return (
    <div className="grid items-center justify-items-center pb-20 gap-16">
      <div id="about" className="h-[3000px] w-full flex">
        <AboutUs />
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
