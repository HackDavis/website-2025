'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faMedium,
  faFacebookF,
  faTwitter,
  faInstagram,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';
config.autoAddCss = false;

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="relative z-10 flex w-full flex-col bg-grass-background-dark">
      {/* Footer Background Image */}
      <div className="z-11 overflow-y-show absolute h-0 lg:h-[calc(425/1440*100vw)] lg:h-full lg:w-full">
        <Image
          src="/Footer/grass.svg"
          alt="Footer Grass"
          layout="fill"
          objectFit="cover"
          className="translate-y-[clamp(-65px,-0.032143*100vw+4.428571px,-25px)] transform"
        />
      </div>
      <div className="z-11 overflow-y-show absolute left-1/2 h-[calc(205/1440*100vw)] h-full w-full -translate-x-1/2 lg:h-0">
        <Image
          src="/Footer/grass_topOnly.svg"
          alt="Footer Grass"
          layout="fill"
          objectFit="cover"
          className="translate-y-[clamp(-65px,-0.032143*100vw+4.428571px,-15px)] transform"
        />
      </div>

      {/* Content Container */}
      <div className="z-13 relative flex min-h-[calc(425/1440*100vw)] w-full flex-col items-center justify-around gap-2 px-6 md:flex-row md:justify-evenly md:gap-0 md:px-0">
        {/* HackDavis Logo */}
        <div className="mt-7 flex flex-row items-center gap-6 md:mt-0">
          <Image
            src="/Footer/hdLogoWhite.svg"
            alt="HackDavis Logo"
            className="h-[72px] w-[72px] md:h-[92.7px] md:w-[92.5px]"
            width={92.5}
            height={92.7}
          />
          <Image
            src="/Footer/hdLogoMottoUpdated.svg"
            alt="HackDavis name and motto"
            className="h-[55px] w-[176px] md:h-[71.55px] md:w-[226px]"
            width={226}
            height={71.55}
          />
        </div>

        {/* Social Icons */}
        <div className="flex w-2/3 flex-col items-center gap-4 md:w-[27vw]">
          <div className="flex w-full max-w-[420px] flex-row items-center justify-between pt-2">
            <a
              className="w-8 text-white transition hover:text-gray-300"
              href="mailto:team@hackdavis.io"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              className="w-10 text-white transition hover:text-gray-300"
              href="https://medium.com/@HackDavis"
              target="#"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMedium} />
            </a>
            <a
              className="w-5 text-white transition hover:text-gray-300"
              href="https://www.facebook.com/HackDavis"
              target="#"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              className="w-8 text-white transition hover:text-gray-300"
              href="https://twitter.com/hack_davis"
              target="#"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className="w-8 text-white transition hover:text-gray-300"
              href="https://www.instagram.com/hackdavis"
              target="#"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="w-10 text-white transition hover:text-gray-300"
              href="https://discord.gg/wc6QQEc"
              target="#"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
          <p className="mt-3 pb-3 font-metropolis text-sm text-white">
            &copy; 2025 HackDavis • Made with ☕️ & 💛 in Davis
          </p>
        </div>

        {/* Back to Top Arrow */}
        <div
          className="absolute right-6 top-40 flex cursor-pointer flex-row items-center gap-2 text-white transition-transform hover:scale-110 sm:top-10 md:top-11 lg:top-16 xl:top-20"
          onClick={scrollToTop}
        >
          <p className="text-xs md:text-base">BACK TO TOP</p>
          <Image
            src="/Footer/arrowUp.svg"
            alt="Arrow Up"
            className="h-6 w-6"
            width={24}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
}
