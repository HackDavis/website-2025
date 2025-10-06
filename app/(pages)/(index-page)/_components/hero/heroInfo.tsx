import React from 'react';
import WordCycle from './wordCycle';

// import Image from 'next/image';
// import Link from 'next/link';
// import HeartButton from '../HeartButton/heartButton';

export default function HeroInfo() {
  return (
    <div className="flex flex-col items-start gap-[22px] break-625:items-end break-625:gap-[31px]">
      <div className="flex flex-col items-start text-left break-625:items-end break-625:text-right">
        <p className="flex gap-2 font-metropolis text-[30px] font-bold leading-[115%] tracking-[0.8px] break-625:text-[40px]">
          <span className="text-white">
            <WordCycle />
          </span>
          <span className="text-white/50">for</span>
        </p>
        <h1 className="font-metropolis text-[45px] font-bold leading-[115%] tracking-[0.9px] text-white break-625:text-[66px] break-625:leading-[100%] break-625:tracking-[3.52px] md:text-[88px]">
          social good
        </h1>
        <p className="mt-[31px] font-metropolis text-[16px] font-normal tracking-[0.48px] text-white break-625:text-[20px]">
          Stay tuned for <strong>HackDavis 2026</strong>
        </p>
      </div>

      <div className="flex flex-col items-start gap-[12px] break-625:flex-col break-625:items-end break-625:gap-[28px] sm:flex-col">
        {/* <a
          href="https://form.typeform.com/to/SduzTnif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="grid w-fit place-items-center justify-center rounded-full border-none bg-[--highlight-yellow] pb-[8px] pl-[24px] pr-[24px] pt-[8px] text-[16px] font-bold text-[--text-dark] break-625:pb-[10px] break-625:pl-[30px] break-625:pr-[30px] break-625:pt-[10px] break-625:text-[20px]">
            Apply to be a director!
          </button>
        </a> */}
        <a
          href="https://forms.gle/QgmucXL1RN97pNFh9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="grid w-fit place-items-center justify-center rounded-full border-none bg-[--highlight-yellow] pb-[8px] pl-[24px] pr-[24px] pt-[8px] text-[16px] font-bold text-[--text-dark] break-625:pb-[10px] break-625:pl-[30px] break-625:pr-[30px] break-625:pt-[10px] break-625:text-[20px]">
            2026 Judge Interest Form
          </button>
        </a>
      </div>
      {/* <div className="flex flex-col items-start gap-2 text-left break-625:flex-row break-625:items-end break-625:text-right">
        <span className="hidden font-metropolis text-[18px] font-normal tracking-[0.48px] text-white break-625:inline md:text-[20px]">
          Check out the{' '}
        </span>
        <div className="flex items-center gap-2 text-white">
          <FormLink
            text="roles and teams"
            href="/?section=teams"
            // includeComma={true}
            includeComma={false}
          />
          <span className="font-metropolis text-[18px] font-normal tracking-[0.48px] md:text-[20px]">
            we have!
          </span>
        </div>
      </div> */}
    </div>
  );
}

// interface FormLinkProps {
//   text: string;
//   href: string;
//   includeComma: boolean;
// }

// function FormLink({ text, href, includeComma }: FormLinkProps) {
//   return (
//     <Link
//       href={href}
//       // target="_blank"
//       className="flex font-metropolis text-[18px] font-bold tracking-[0.48px] text-white md:text-[20px]"
//     >
//       <p className="border-b-2 border-b-white font-bold">{text}</p>
//       <Image
//         src="/Hero/icon_arrow.svg"
//         alt="Arrow icon"
//         width={10}
//         height={10}
//         className="m-1 object-contain transition-transform group-hover:translate-x-1"
//       />
//       {includeComma && <p>,</p>}
//     </Link>
//   );
// }
