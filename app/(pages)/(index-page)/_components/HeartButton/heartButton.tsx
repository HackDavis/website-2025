'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './heartButton.module.scss';

export default function HeartButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link href={href} className={styles.button_container}>
      <div className={styles.heart_coin}>
        <Image
          src="/images/donate/button_heart_coin-cropped.svg"
          alt="heart"
          // width={20}
          // height={20}
          fill={true}
        />
      </div>
      <div className={styles.heart_coin_animated}>
        <Image
          src="/images/donate/button_heart_coin-cropped.svg"
          alt="heart"
          // width={20}
          // height={20}
          fill={true}
        />
      </div>
      <h4>{text}</h4>
    </Link>
  );
}
