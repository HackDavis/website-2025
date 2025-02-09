import React from 'react';
import Image from 'next/image';

export default function HeroInfo() {
  return (
    <div className="break-400:items-end break-400:gap-[31px] flex flex-col items-start gap-[22px]">
      <div className="break-400:items-end break-400:text-right flex flex-col items-start text-left">
        <p className="break-400:text-[40px] flex gap-2 font-metropolis text-[30px] font-bold leading-[115%] tracking-[0.8px]">
          <span className="text-white">create</span>
          <span className="text-white/50">for</span>
        </p>
        <h1 className="break-400:text-[66px] break-400:tracking-[3.52px] break-400:leading-[100%] font-metropolis text-[45px] font-bold leading-[115%] tracking-[0.9px] text-white md:text-[88px]">
          social good
        </h1>
        <p className="break-400:text-[24px] mt-[31px] font-metropolis text-[16px] font-normal tracking-[0.48px] text-white">
          April 19-20, 2025 @ UCenter
        </p>
      </div>

      <div className="break-400:flex-col break-400:items-end break-400:gap-[28px] flex flex-row items-start gap-[12px] break-625:flex-row break-625:items-center">
        <button className="break-400:h-[50px] break-400:px-[40px] break-400:py-0 break-400:text-[20px] inline-flex h-[40px] items-center justify-center gap-[10px] whitespace-nowrap rounded-[100px] bg-highlight-yellow px-[10px] py-[11px] text-center font-metropolis text-[18px] font-bold tracking-[0.4px] text-text-dark shadow-[0px_5px_75px_0px_rgba(0,0,0,0.25)]">
          Register Now
        </button>
        <button className="break-400:w-[170px] break-400:h-[50px] break-400:py-0 break-400:text-[20px] flex h-[40px] w-[138px] flex-shrink-0 items-center rounded-[100px] bg-white/15 pl-0 pr-[10px] text-center font-metropolis text-[18px] font-bold tracking-[0.4px] text-white">
          <div className="break-400:w-[50px] break-400:h-[50px] flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-[50px] bg-highlight-yellow shadow-[0px_5px_75px_0px_rgba(0,0,0,0.25)]">
            <Image
              src="/Hero/heart.svg"
              alt="Heart icon"
              width={24}
              height={24}
              className="break-400:w-[24px] break-400:h-[24px] h-[15px] w-[17px] object-contain"
            />
          </div>
          <span className="flex-1 pl-[9px] pr-[15px] text-center">Sponsor</span>
        </button>
      </div>

      <div className="break-400:items-end break-400:text-right flex flex-col items-start gap-2 text-left break-625:flex-row">
        <span className="break-400:inline hidden font-metropolis text-[18px] font-normal tracking-[0.48px] text-white md:text-[24px]">
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
