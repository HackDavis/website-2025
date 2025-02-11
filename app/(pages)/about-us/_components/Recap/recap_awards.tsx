import Image from 'next/image';
import trophies_image from '@public/images/recap/trophies.svg';

export default function RecapAwards() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Image
        src={trophies_image}
        alt="trophies"
        className="w-full max-w-[400px]"
      />
      <a
        href="https://hackdavis-2024.devpost.com/project-gallery"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex max-h-[50px] w-full items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap rounded-full bg-[#FFC53D] px-6 py-3 font-semibold text-[#58452B] transition-opacity hover:opacity-90 sm:mt-8"
      >
        <span className="text-xs text-background-dark sm:text-base">
          VIEW 2024 WINNERS
        </span>
      </a>
    </div>
  );
}
