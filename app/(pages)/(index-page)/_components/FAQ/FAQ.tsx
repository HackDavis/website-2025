'use client';
import AccordionFAQ from './AccordionFAQ';
import Waterfall from './Waterfall';
import style from './FAQ.module.scss';
import Image from 'next/image';
import Donate from '../Donate/Donate';

export default function FAQ() {
  return (
    <div className={style.main_container}>
      <div>
        <Image
          src="/images/faq/underwater_dark.svg"
          alt="underwater dark layer"
          width={1000}
          height={10}
          className={style.underwater_dark}
        />
        <Image
          src="/images/faq/underwater_dark_mobile.svg"
          alt="underwater dark layer"
          width={1000}
          height={10}
          className={style.underwater_dark_mobile}
        />
        <div className={style.algae_level}>
          <Image
            src="/images/faq/algae_right.svg"
            alt="algae"
            width={50}
            height={10}
            className={style.algae_1}
          />
          {/* algae above being used for both mobile and desktop */}
          <Image
            src="/images/faq/algae_left.svg"
            alt="algae"
            width={50}
            height={10}
            className={style.algae_2}
          />
          <Image
            src="/images/faq/algae_right.svg"
            alt="algae"
            width={50}
            height={10}
            className={style.algae_3}
          />
          <Image
            src="/images/faq/underwater_medium.svg"
            alt="underwater medium layer"
            width={1000}
            height={10}
            className={style.underwater_med}
          />
          <Image
            src="/images/faq/underwater_medium_mobile.svg"
            alt="underwater medium layer"
            width={1000}
            height={10}
            className={style.underwater_med_mobile}
          />
        </div>
        <Image
          src="/images/faq/grass_dark.svg"
          alt="grass dark layer"
          width={1000}
          height={10}
          className={style.grass_dark}
        />
        <Image
          src="/images/faq/grass_dark_mobile.svg"
          alt="grass dark layer"
          width={375}
          height={10}
          className={style.grass_dark_mobile}
        />
        <Image
          src="/images/faq/grass_light.svg"
          alt="grass light layer"
          width={1000}
          height={10}
          className={style.grass_light}
        />
        <Image
          src="/images/faq/grass_light_mobile.svg"
          alt="grass light layer"
          width={375}
          height={10}
          className={style.grass_light_mobile}
        />
        <Image
          src="/images/faq/grass_texture_2.svg"
          alt="grass texture"
          width={150}
          height={10}
          className={style.grass_2}
        />
      </div>
      <div className={style.container}>
        <div className={style.faq_donation}>
          <div className={style.donation}>
            <Image
              src="/images/faq/grass_texture_single.svg"
              alt="grass texture"
              width={150}
              height={10}
              className={style.grass_single}
            />
            <Image
              src="/images/faq/grass_texture_1.svg"
              alt="grass texture"
              width={173}
              height={10}
              className={style.grass_1}
            />
            <Donate />
            <Image
              src="/images/faq/grass_texture_3.svg"
              alt="grass texture"
              width={201}
              height={10}
              className={style.grass_3}
            />
          </div>
          <div className={style.faq}>
            <Image
              src="/images/faq/grass_texture_4.svg"
              alt="grass texture"
              width={201}
              height={10}
              className={style.grass_4}
            />
            <Image
              src="/images/faq/grass_texture_5.svg"
              alt="grass texture"
              width={230}
              height={10}
              className={style.grass_5}
            />
            <Image
              src="/images/faq/firefly_sm.svg"
              alt="firefly"
              width={7}
              height={10}
              className={style.firefly_sm2}
            />
            <Image
              src="/images/faq/firefly_lg.svg"
              alt="firefly"
              width={11}
              height={10}
              className={style.firefly_lg2}
            />
            <Image
              src="/images/faq/firefly_sm.svg"
              alt="firefly"
              width={7}
              height={10}
              className={style.firefly_sm1}
            />
            <Image
              src="/images/faq/firefly_lg.svg"
              alt="firefly"
              width={11}
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
