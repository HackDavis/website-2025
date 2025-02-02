'use client';
import Image from 'next/image';
import styles from './Mud.module.scss';
import MudLight from '/public/aboutUs/Hero/Mud/MudLight.svg';
import MudDark from '/public/aboutUs/Hero/Mud/MudDark.svg';

export default function Mud() {
  return (
    <div className={styles.container}>
      <div className={styles.mud_light}>
        <Image src={MudLight} alt="Light Mud" fill />
      </div>
      <div className={styles.mud_dark}>
        <Image src={MudDark} alt="Dark Mud" fill />
      </div>
    </div>
  );
}

// styles.mud_light
