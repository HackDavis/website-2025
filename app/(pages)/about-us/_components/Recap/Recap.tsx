import RecapCarousel from './recap_carousel';
import Image from 'next/image';
import trophies_image from '@public/images/recap/trophies.svg';

export default function Recap() {
  return (
    <main className="h-screen w-screen bg-blue-300">
      <div className="text-background-dark bg-transparent flex flex-col justify-center p-[10%] gap-16">
        <div className="flex flex-col items-start justify-center text-start">
          <h1 className="text-4xl font-bold ">Celebrate our past with us!</h1>
          <p>
            We've been through a lot together, and we're proud of what we've
            achieved. Let's celebrate our past with us!
          </p>
        </div>

        <div className="flex flex-col items-start justify-center border">
          <h2 className="text-2xl font-bold">HackDavis 2024 Recap</h2>
          <div className="flex flex-wrap items-center justify-center border w-full">
            <div className="w-1/2">
              <RecapCarousel />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center">
              <Image src={trophies_image} alt="trophies" />
              <button className="mt-8 px-6 py-2 bg-[#FFC53D] text-[#58452B] rounded-full font-semibold hover:opacity-90 transition-opacity">
                View 2024 Winners
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
