'use client';
import Image from 'next/image';
import styles from './Beach.module.scss';
import WaterNormalWavy from '/public/aboutUs/Hero/Beach/WaterTransition/WaterNormalWavy.svg';
import WaterLight from '/public/aboutUs/Hero/Beach/WaterTransition/WaterLightWavy.svg';
import SandDark from '/public/aboutUs/Hero/Beach/WaterTransition/SandDarkWavy.svg';
import SandLight from '/public/aboutUs/Hero/Beach/WaterTransition/SandLightWavy.svg';
import BeachDecoration from '/public/aboutUs/Hero/Beach/SandArea/BeachDecoration.svg';

// import CowSitting from '/public/aboutUs/Hero/Beach/BeachCampfire/CowSitting.svg';
// import DuckySitting from '/public/aboutUs/Hero/Beach/BeachCampfire/DuckySitting.svg';
// import FrogSitting from '/public/aboutUs/Hero/Beach/BeachCampfire/FrogSitting.svg';
// import GuitarBunny from '/public/aboutUs/Hero/Beach/BeachCampfire/GuitarBunny.svg';

import FullGroup from '/public/aboutUs/Hero/Beach/BeachCampfire/FullGroup.svg';
import HeroStats from '../../heroStats';

export default function Sand() {
  return (
    <div className={styles.container}>
      <div className={styles.transition}>
        <div className={styles.water_normal}>
          <Image src={WaterNormalWavy} alt="Normal Water" objectFit="cover" />
        </div>
        <div className={styles.water_light}>
          <Image src={WaterLight} alt="Water Light" objectFit="cover" />
        </div>
        <div className={styles.sand_dark}>
          <Image src={SandDark} alt="Sand Dark" objectFit="cover" />
        </div>
        <div className={styles.sand_light}>
          <Image src={SandLight} alt="Sand Light" objectFit="cover" />
        </div>
      </div>
      <div className={styles.mascots}>
        <div className={styles.full_group}>
          <Image src={FullGroup} alt="Bunny Cow Frog Duck sitting" />
        </div>
      </div>
      <HeroStats />
      <div className={styles.beach_decoration}>
        <Image
          src={BeachDecoration}
          alt="Beach Decorations"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
