import AccordionFAQ from './AccordionFAQ';
import style from './FAQ.module.scss';

export default function FAQ() {
  return (
    <div className={style.container}>
      <AccordionFAQ />
    </div>
  );
}
