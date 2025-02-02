'use client';
import Image from 'next/image';
import styles from './Sky.module.scss';
import WaterBuildingLeft from '/public/aboutUs/Hero/Sky/WaterBuildingLeft.svg';
import WaterBuildingRight from '/public/aboutUs/Hero/Sky/WaterBuildingRight.svg';
import WaterSemicircle from '/public/aboutUs/Hero/Sky/WaterSemicircle.svg';
import HeroText from '../../heroText';

export default function Sky() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <HeroText />
        <div className={styles.water_building_left}>
          <Image src={WaterBuildingLeft} alt="Water Building Left" />
        </div>
        <div className={styles.water_building_right}>
          <Image src={WaterBuildingRight} alt="Water Building Right" />
        </div>
      </div>

      <div className={styles.water_semicircle}>
        <Image src={WaterSemicircle} alt="Water Semicircle" />
      </div>
    </div>
  );
}
