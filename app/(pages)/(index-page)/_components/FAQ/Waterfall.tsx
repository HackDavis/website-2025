'use client';
import style from './Waterfall.module.scss';
import Image from 'next/image';

export default function Waterfall() {
  return (
    <div className={style.container}>
      <Image
        src="/images/faq/waterfall_gradient.svg"
        alt="waterfall gradient"
        width={270}
        height={10}
      />
      <Image
        src="/images/faq/waterfall_sheen.svg"
        alt="waterfall gradient"
        width={180}
        height={10}
        className={style.water_sheen}
      />
      <Image
        src="/images/faq/waterfall_sheen.svg"
        alt="waterfall gradient"
        width={180}
        height={10}
        className={style.water_sheen}
      />
      <Image
        src="/images/faq/waterfall_base.svg"
        alt="waterfall gradient"
        width={423}
        height={10}
        className={style.water_base}
      />
    </div>
  );
}
