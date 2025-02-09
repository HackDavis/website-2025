import RecapCarousel from './recap_carousel';
import Image from 'next/image';
import trophies_image from '@public/images/recap/trophies.svg';

export default function Recap() {
  return (
    <main className="flex flex-col justify-center bg-transparent text-background-dark">
      <div className="flex flex-col">
        <div className="p-8">
          <h2 className="text-3xl font-bold">HackDavis 2024 Recap</h2>
        </div>
        <div className="w-full">
          <RecapCarousel />
        </div>
        <div className="flex w-full flex-col items-center justify-center p-8 md:flex-row md:px-[10%]">
          <div className="flex w-full flex-col items-center justify-center md:w-1/2">
            <Image
              src={trophies_image}
              alt="trophies"
              className="w-full max-w-[400px]"
            />
            <a
              href="https://hackdavis-2024.devpost.com/project-gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 rounded-full bg-[#FFC53D] px-6 py-2 font-semibold text-[#58452B] transition-opacity hover:opacity-90"
            >
              View 2024 Winners
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
