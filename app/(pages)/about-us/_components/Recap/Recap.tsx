import RecapCarousel from './recap_carousel';
import Image from 'next/image';
import trophies_image from '@public/images/recap/trophies.svg';

export default function Recap() {
  return (
    <main className="flex flex-col justify-center bg-transparent text-background-dark">
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-3xl font-bold">HackDavis 2024 Recap</h2>
        <div className="flex w-full flex-wrap items-center justify-center pl-[10%] pr-[10%]">
          <div className="w-1/2">
            <RecapCarousel />
          </div>
          <div className="flex w-1/2 flex-col items-center justify-center">
            <Image src={trophies_image} alt="trophies" />
            <button className="mt-8 rounded-full bg-[#FFC53D] px-6 py-2 font-semibold text-[#58452B] transition-opacity hover:opacity-90">
              View 2024 Winners
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
