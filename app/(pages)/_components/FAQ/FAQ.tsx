'use client';
import AccordionFAQ from './AccordionFAQ';
import Waterfall from './Waterfall';
import style from './FAQ.module.scss';

export default function FAQ() {
  return (
    <div className={style.container}>
      <div className={style.faq}>
        <AccordionFAQ />
      </div>
      <div className={style.waterfall}>
        <Waterfall />
      </div>
      <div className={style.grass_space}></div>
    </div>
  );
}
