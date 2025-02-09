import RecapCarousel from './recap_carousel';
import RecapAwards from './recap_awards';

export default function Recap() {
  return (
    <main className="flex flex-col justify-center bg-transparent text-background-dark">
      <div className="flex flex-col">
        <div className="w-[90%] p-8">
          <h2 className="text-4xl font-bold">HackDavis 2024 Recap</h2>
        </div>
        <div className="flex flex-col gap-4 sm:-mt-8 sm:flex-row sm:items-center">
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
