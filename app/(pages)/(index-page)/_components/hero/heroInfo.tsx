import React from 'react';
import Image from 'next/image';
import HeartButton from '../HeartButton/heartButton';

export default function HeroInfo() {
  return (
    <div className="flex flex-col items-start gap-[22px] break-625:items-end break-625:gap-[31px]">
      <div className="flex flex-col items-start text-left break-625:items-end break-625:text-right">
        <p className="flex gap-2 font-metropolis text-[30px] font-bold leading-[115%] tracking-[0.8px] break-625:text-[40px]">
          <span className="text-white">create</span>
          <span className="text-white/50">for</span>
        </p>
        <h1 className="font-metropolis text-[45px] font-bold leading-[115%] tracking-[0.9px] text-white break-625:text-[66px] break-625:leading-[100%] break-625:tracking-[3.52px] md:text-[88px]">
          social good
        </h1>
        <p className="mt-[31px] font-metropolis text-[16px] font-normal tracking-[0.48px] text-white break-625:text-[24px]">
          April 19-20, 2025 @ UCenter
        </p>
      </div>

      <div className="flex flex-row items-start gap-[12px] break-625:flex-col break-625:items-end break-625:gap-[28px] sm:flex-row sm:items-center">
        <button className="inline-flex h-[40px] items-center justify-center gap-[10px] whitespace-nowrap rounded-[100px] bg-highlight-yellow px-[10px] py-[11px] text-center font-metropolis text-[18px] font-bold tracking-[0.4px] text-text-dark shadow-[0px_5px_75px_0px_rgba(0,0,0,0.25)] break-625:h-[50px] break-625:px-[40px] break-625:py-0 break-625:text-[20px]">
          Register Now
        </button>
        <div className="flex h-[40px] w-[138px] flex-shrink-0 items-center rounded-[100px] bg-white/15 text-center font-metropolis text-[18px] font-bold tracking-[0.4px] text-white break-625:h-[50px] break-625:w-[170px] break-625:py-0 break-625:text-[20px]">
          {/* <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-[50px] bg-highlight-yellow shadow-[0px_5px_75px_0px_rgba(0,0,0,0.25)] break-625:h-[50px] break-625:w-[50px]">
            <Image
              src="/Hero/heart.svg"
              alt="Heart icon"
              width={24}
              height={24}
              className="h-[15px] w-[17px] object-contain break-625:h-[24px] break-625:w-[24px]"
            />
          </div>
          <span className="flex-1 pl-[9px] pr-[15px] text-center">Sponsor</span> */}
          <HeartButton text="Sponsor" href="mailto:team@hackdavis.io" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 text-left break-625:flex-row break-625:items-end break-625:text-right">
        <span className="hidden font-metropolis text-[18px] font-normal tracking-[0.48px] text-white break-625:inline md:text-[24px]">
          Apply to be a{' '}
        </span>
        <div className="flex items-center gap-2">
          <span className="font-metropolis text-[18px] font-bold tracking-[0.48px] text-white md:text-[24px]">
            Judge, Mentor,
          </span>
          <span className="font-metropolis text-[18px] font-normal tracking-[0.48px] text-white md:text-[24px]">
            or{' '}
          </span>
          <span className="font-metropolis text-[18px] font-bold tracking-[0.48px] text-white md:text-[24px]">
            Volunteer
          </span>
          <a href="#" className="group flex items-center gap-2">
            <Image
              src="/Hero/icon_arrow.svg"
              alt="Arrow icon"
              width={16}
              height={16}
              className="object-contain transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
