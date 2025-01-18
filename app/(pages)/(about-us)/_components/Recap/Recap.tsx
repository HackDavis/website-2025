import { RecapCarousel } from './RecapCarousel';
import CuteAwardsIMG from '@public/aboutUs/Recap/cute_awards.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Recap() {
  const WINNERS_URL = 'https://hackdavis-2024.devpost.com/';
  return (
    <main className="flex flex-col gap-4 border p-4">
      <div className="flex flex-col p-10 rounded-3xl gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl md:text-4xl font-bold font-metropolis tracking-[2px] text-center md:text-left">
            Come celebrate our past with us!
          </h3>
          <p className="font-bold">
            We truly could not have done any of this without you. Your support
            means the world!
          </p>
        </div>

        <div className="flex flex-col">
          <h4 className="text-xl md:text-2xl font-bold font-metropolis tracking-[2px] text-center md:text-left">
            HackDavis 2024 Recap
          </h4>
          <div className="flex flex-col md:flex-row p-2 md:p-4 w-full justify-center items-center gap-8 md:gap-10">
            <div className="w-full md:w-2/3 flex items-center justify-center">
              <RecapCarousel />
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-4 justify-center items-center">
              <Image
                src={CuteAwardsIMG}
                alt="cute awards"
                className="w-full max-w-[300px] md:max-w-none"
              />
              <a href={WINNERS_URL} target="_blank">
                <Button className="px-6 md:px-10 w-full md:w-auto bg-yellow-500 text-black font-bold">
                  VIEW 2024 WINNERS
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
