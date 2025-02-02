'use client';
import AccordionFAQ from './AccordionFAQ';
import Waterfall from './Waterfall';
import style from './FAQ.module.scss';
import Image from 'next/image';

export default function FAQ() {
  return (
    <div className={style.main_container}>
      <div>
        <Image
          src="/images/faq/underwater_dark.svg"
          alt="waterfall gradient"
          width={1000}
          height={10}
          className={style.underwater_dark}
        />
        <Image
          src="/images/faq/underwater_medium.svg"
          alt="waterfall gradient"
          width={1000}
          height={10}
          className={style.underwater_med}
        />
        <Image
          src="/images/faq/grass_dark.svg"
          alt="waterfall gradient"
          width={1000}
          height={10}
          className={style.grass_dark}
        />
        <Image
          src="/images/faq/grass_light.svg"
          alt="waterfall gradient"
          width={1000}
          height={10}
          className={style.grass_light}
        />
      </div>
      <div className={style.container}>
        <div className={style.faq}>
          <AccordionFAQ />
        </div>
        <div className={style.waterfall}>
          <Waterfall />
        </div>
        <div className={style.grass_space}></div>
      </div>
    </div>
  );
}
