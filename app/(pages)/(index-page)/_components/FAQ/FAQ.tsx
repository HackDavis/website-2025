'use client';
import AccordionFAQ from './AccordionFAQ';
import Waterfall from './Waterfall';
import style from './FAQ.module.scss';
import Image from 'next/image';
import DonationPlaceholder from './DonationPlaceholder';

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
        <div className={style.algae_level}>
          <Image
            src="/images/faq/algae_right.svg"
            alt="waterfall gradient"
            width={50}
            height={10}
            className={style.algae_1}
          />
          <Image
            src="/images/faq/algae_left.svg"
            alt="waterfall gradient"
            width={50}
            height={10}
            className={style.algae_2}
          />
          <Image
            src="/images/faq/algae_right.svg"
            alt="waterfall gradient"
            width={50}
            height={10}
            className={style.algae_3}
          />
          <Image
            src="/images/faq/underwater_medium.svg"
            alt="waterfall gradient"
            width={1000}
            height={10}
            className={style.underwater_med}
          />
        </div>
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

        <Image
          src="/images/faq/grass_texture_2.svg"
          alt="waterfall gradient"
          width={150}
          height={10}
          className={style.grass_2}
        />
        <Image
          src="/images/faq/grass_texture_4.svg"
          alt="waterfall gradient"
          width={201}
          height={10}
          className={style.grass_4}
        />
        <Image
          src="/images/faq/grass_texture_5.svg"
          alt="waterfall gradient"
          width={230}
          height={10}
          className={style.grass_5}
        />
        <Image
          src="/images/faq/firefly_sm.svg"
          alt="waterfall gradient"
          width={7}
          height={10}
          className={style.firefly_sm2}
        />
        <Image
          src="/images/faq/firefly_lg.svg"
          alt="waterfall gradient"
          width={7}
          height={10}
          className={style.firefly_lg2}
        />
      </div>
      <div className={style.container}>
        <div className={style.faq_donation}>
          <div className={style.donation}>
            <Image
              src="/images/faq/grass_texture_single.svg"
              alt="waterfall gradient"
              width={150}
              height={10}
              className={style.grass_single}
            />
            <Image
              src="/images/faq/grass_texture_1.svg"
              alt="waterfall gradient"
              width={173}
              height={10}
              className={style.grass_1}
            />
            <DonationPlaceholder />
            <Image
              src="/images/faq/grass_texture_3.svg"
              alt="waterfall gradient"
              width={201}
              height={10}
              className={style.grass_3}
            />
          </div>
          <div className={style.faq}>
            <Image
              src="/images/faq/firefly_sm.svg"
              alt="waterfall gradient"
              width={7}
              height={10}
              className={style.firefly_sm1}
            />
            <Image
              src="/images/faq/firefly_lg.svg"
              alt="waterfall gradient"
              width={7}
              height={10}
              className={style.firefly_lg1}
            />
            <AccordionFAQ />
          </div>
        </div>
        <div className={style.waterfall}>
          <Waterfall />
        </div>
        <div className={style.grass_space}></div>
      </div>
    </div>
  );
}
