import Image from 'next/image';
import DuckyCharacter from 'public/Sponsors/characters/Ducky.svg';

import styles from './Ducky.module.scss';

export default function Ducky() {
  return (
    <div className={styles.container}>
      <Image
        src={DuckyCharacter}
        alt="ducky"
        width={226}
        height={239}
        className={styles.ducky}
      />
      <svg
        className={styles.shadow}
        xmlns="http://www.w3.org/2000/svg"
        width="140"
        height="37"
        viewBox="0 0 140 37"
        fill="none"
      >
        <ellipse cx="70" cy="18.5" rx="70" ry="18.5" fill="#8EC442" />
      </svg>
    </div>
  );
}
