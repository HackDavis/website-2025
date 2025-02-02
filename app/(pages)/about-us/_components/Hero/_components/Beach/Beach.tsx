'use client';
import Image from 'next/image';
import styles from './Beach.module.scss';
import WaterNormalWavy from '/public/index/Hero/Beach/WaterTransition/WaterNormalWavy.svg';
import WaterLight from '/public/index/Hero/Beach/WaterTransition/WaterLightWavy.svg';
import SandDark from '/public/index/Hero/Beach/WaterTransition/SandDarkWavy.svg';
import SandLight from '/public/index/Hero/Beach/WaterTransition/SandLightWavy.svg';
import BeachDecoration from '/public/index/Hero/Beach/SandArea/BeachDecoration.svg';

// import CowSitting from '/public/index/Hero/Beach/BeachCampfire/CowSitting.svg';
// import DuckySitting from '/public/index/Hero/Beach/BeachCampfire/DuckySitting.svg';
// import FrogSitting from '/public/index/Hero/Beach/BeachCampfire/FrogSitting.svg';
// import GuitarBunny from '/public/index/Hero/Beach/BeachCampfire/GuitarBunny.svg';

import FullGroup from '/public/index/Hero/Beach/BeachCampfire/FullGroup.svg';
import HeroStats from '../../heroStats';

export default function Sand() {
  return (
    <div className={styles.container}>
      <div className={styles.sand_semicircle}>
        <HeroStats />
      </div>
      <div className={styles.water_normal_wavy}>
        <Image src={WaterNormalWavy} alt="Normal Water" fill />
      </div>
      <div className={styles.water_light}>
        <Image src={WaterLight} alt="Water Light" fill />
      </div>
      <div className={styles.sand_dark}>
        <Image src={SandDark} alt="Sand Dark" fill />
      </div>
      <div className={styles.sand_light}>
        <Image src={SandLight} alt="Sand Light" fill />
      </div>
      {/* <div className={styles.campfire}>
        <div className={styles.cow_sitting}>
          <Image src={CowSitting} alt="Cow Sitting" />
        </div>
        <div className={styles.ducky_sitting}>
          <Image src={DuckySitting} alt="Ducky Sitting" />
        </div>
        <div className={styles.frog_sitting}>
          <Image src={FrogSitting} alt="Frog Sitting" />
        </div>
        <div className={styles.guitar_bunny}>
          <Image src={GuitarBunny} alt="Guitar Bunny" />
        </div>
      </div> */}
      <div className={styles.full_group}>
        <div className={styles.full_group_inside}>
          <Image src={FullGroup} alt="Bunny Cow Frog Duck sitting" />
        </div>
      </div>
      <div className={styles.beach_decoration}>
        <Image src={BeachDecoration} alt="Beach Decorations" fill />
      </div>
    </div>
  );
}
