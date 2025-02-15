import RecapCarousel from './recap_carousel';
import RecapAwards from './recap_awards';

export default function Recap() {
  return (
    <main className="flex flex-col justify-center bg-transparent px-16 text-background-dark">
      <div className="flex flex-col gap-10">
        <div className="w-[90%]">
          <h2 className="text-2xl font-bold">HackDavis 2024 Recap</h2>
        </div>
        <div className="flex flex-col gap-4 sm:items-center md:flex-row">
          <div className="w-full">
            <RecapCarousel />
          </div>
          <div className="w-full">
            <RecapAwards />
          </div>
        </div>
      </div>
    </main>
  );
}
