import Image from 'next/image';
import BunnyCharacter from 'public/Sponsors/characters/Bunny.svg';

import styles from './Bunny.module.scss';

export default function Bunny() {
  return (
    <div className={styles.container}>
      <Image
        src={BunnyCharacter}
        alt="bunny"
        width={244}
        height={271}
        className={styles.bunny}
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
