import Image from 'next/image';
import FroggyCharacter from 'public/Sponsors/characters/Froggy.svg';

import styles from './Froggy.module.scss';

export default function Froggy() {
  return (
    <div className={styles.container}>
      <Image
        src={FroggyCharacter}
        alt="froggy"
        width={256}
        height={123}
        className={styles.froggy}
      />
      <svg
        className={styles.shadow}
        width="265"
        height="37"
        viewBox="0 0 265 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="132.5" cy="18.5" rx="132.5" ry="18.5" fill="#DFAF67" />
      </svg>
    </div>
  );
}
