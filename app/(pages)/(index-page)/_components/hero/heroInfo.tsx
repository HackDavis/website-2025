import React from 'react';
import Image from 'next/image';

export default function HeroInfo() {
  return (
    <div className="flex flex-col gap-[31px] items-end">
      <div className="flex flex-col items-end text-right">
        <p className="flex gap-2 font-metropolis text-[40px] font-bold leading-[115%] tracking-[0.8px]">
          <span className="text-white">create</span>
          <span className="text-white/50">for</span>
        </p>
        <h1 className="text-white font-metropolis md:text-[88px] text-[66px] font-bold tracking-[3.52px]">
          social good
        </h1>
        <p className="text-white font-metropolis text-[24px] font-normal tracking-[0.48px] mt-[31px]">
          April 20-21, 2025 @ UCenter
        </p>
      </div>

      <div className="flex flex-col items-end break-625:flex-row break-625:items-center gap-[28px]">
        <button className="flex items-center gap-[10px] px-[40px] h-[50px] rounded-[100px] bg-highlight-yellow shadow-[0px_5px_75px_0px_rgba(0,0,0,0.25)] text-text-dark text-center font-metropolis text-[20px] font-bold tracking-[0.4px]">
          Register Now
        </button>
        <button className="flex w-[170px] h-[50px] items-center relative rounded-[100px] bg-white/15 text-white text-center font-metropolis text-[20px] font-bold tracking-[0.4px]">
          <div className="flex items-center justify-center w-[50px] h-[50px] flex-shrink-0 rounded-[50px] bg-highlight-yellow shadow-[0px_5px_75px_0px_rgba(0,0,0,0.25)]">
            <Image
              src="/Hero/heart.svg"
              alt="Heart icon"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <span className="flex-1 text-center pr-[5px]">Sponsor</span>
        </button>
      </div>

      <div className="flex flex-col break-625:flex-row items-end gap-2 text-right">
        <span className="text-white font-metropolis md:text-[24px] text-[18px] font-normal tracking-[0.48px]">
          Apply to be a{' '}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-white font-metropolis md:text-[24px] text-[18px] font-bold tracking-[0.48px]">
            Judge, Mentor,
          </span>
          <span className="text-white font-metropolis md:text-[24px] text-[18px] font-normal tracking-[0.48px]">
            or{' '}
          </span>
          <span className="text-white font-metropolis md:text-[24px] text-[18px] font-bold tracking-[0.48px]">
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
