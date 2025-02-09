import Image from 'next/image';
import trophies_image from '@public/images/recap/trophies.svg';

export default function RecapAwards() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-8">
      <Image
        src={trophies_image}
        alt="trophies"
        className="w-full max-w-[400px]"
      />
      <a
        href="https://hackdavis-2024.devpost.com/project-gallery"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex w-full items-center justify-center rounded-full bg-[#FFC53D] px-6 py-2 font-semibold text-[#58452B] transition-opacity hover:opacity-90"
      >
        VIEW 2024 WINNERS
      </a>
    </div>
  );
}
