import React from 'react';
import Image from 'next/image';

export default function HeroInfo() {
  return (
    <div className="flex flex-col items-end gap-[31px]">
      <div className="flex flex-col items-end text-right">
        <p className="flex gap-2 font-metropolis text-[40px] font-bold leading-[115%] tracking-[0.8px]">
          <span className="text-white">create</span>
          <span className="text-white/50">for</span>
        </p>
        <h1 className="font-metropolis text-[66px] font-bold tracking-[3.52px] text-white md:text-[88px]">
          social good
        </h1>
        <p className="mt-[31px] font-metropolis text-[24px] font-normal tracking-[0.48px] text-white">
          April 20-21, 2025 @ UCenter
        </p>
      </div>

      <div className="flex flex-col items-end gap-[28px] break-625:flex-row break-625:items-center">
        <button className="flex h-[50px] items-center gap-[10px] rounded-[100px] bg-highlight-yellow px-[40px] text-center font-metropolis text-[20px] font-bold tracking-[0.4px] text-text-dark shadow-[0px_5px_75px_0px_rgba(0,0,0,0.25)]">
          Register Now
        </button>
        <button className="relative flex h-[50px] w-[170px] items-center rounded-[100px] bg-white/15 text-center font-metropolis text-[20px] font-bold tracking-[0.4px] text-white">
          <div className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-[50px] bg-highlight-yellow shadow-[0px_5px_75px_0px_rgba(0,0,0,0.25)]">
            <Image
              src="/Hero/heart.svg"
              alt="Heart icon"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <span className="flex-1 pr-[5px] text-center">Sponsor</span>
        </button>
      </div>

      <div className="flex flex-col items-end gap-2 text-right break-625:flex-row">
        <span className="font-metropolis text-[18px] font-normal tracking-[0.48px] text-white md:text-[24px]">
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
