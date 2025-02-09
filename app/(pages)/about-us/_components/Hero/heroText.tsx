'use client';
import styles from './heroText.module.scss';

export default function HeroText() {
  return (
    <div className={styles.container}>
      <h3>HELLO, WE'RE</h3>
      <h1>HackDavis</h1>
      <h3 className={styles.description}>
        Bringing together the most talented students{' '}
        <div className={styles.text_break} /> and leaders to create for social
        good
      </h3>
    </div>
  );
}
