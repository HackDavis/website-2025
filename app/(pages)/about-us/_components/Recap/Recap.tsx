import RecapCarousel from './recap_carousel';
import RecapAwards from './recap_awards';

export default function Recap() {
  return (
    <main className="flex flex-col justify-center bg-transparent px-[13%] text-background-dark md:px-16">
      <div className="flex flex-col gap-10">
        <div className="w-full md:w-[90%]">
          <h2 className="text-2xl font-bold">HackDavis 2024 Recap</h2>
        </div>
        <div className="flex flex-col gap-12 sm:items-center md:flex-row md:gap-4">
          <div className="w-full">
            <RecapCarousel />
          </div>
          <div className="w-full pb-8 md:pb-0">
            <RecapAwards />
          </div>
        </div>
      </div>
    </main>
  );
}
