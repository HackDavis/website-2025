import Image from 'next/image';
import CowCharacter from 'public/Sponsors/characters/Cow.svg';

import styles from './Cow.module.scss';

export default function Cow() {
  return (
    <div className={styles.container}>
      <Image
        src={CowCharacter}
        alt="cow"
        width={187}
        height={222}
        className={styles.cow}
      />
      <svg
        className={styles.shadow}
        xmlns="http://www.w3.org/2000/svg"
        width="140"
        height="37"
        viewBox="0 0 140 37"
        fill="none"
      >
        <ellipse cx="70" cy="18.5" rx="70" ry="18.5" fill="#DFAF67" />
      </svg>
    </div>
  );
}
