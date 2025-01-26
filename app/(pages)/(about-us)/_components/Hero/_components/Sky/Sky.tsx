'use client';
import Image from 'next/image';
import styles from './Sky.module.scss';
import WaterBuildingLeft from '/public/index/Hero/Sky/WaterBuildingLeft.svg';
import WaterBuildingRight from '/public/index/Hero/Sky/WaterBuildingRight.svg';
import WaterSemicircle from '/public/index/Hero/Sky/WaterSemicircle.svg';

export default function Sky() {
  return (
    <div className={styles.container}>
      <div className={styles.water_building_left}>
        <Image
          src={WaterBuildingLeft}
          alt="Water Building Left"
          z-index={0}
          fill
        />
      </div>
      <div className={styles.water_building_right}>
        <Image
          src={WaterBuildingRight}
          alt="Water Building Right"
          z-index={0}
        />
      </div>
      <div className={styles.water_semicircle}>
        <Image
          src={WaterSemicircle}
          alt="Water Semicircle"
          width={2089}
          height={1047}
        />
      </div>
    </div>
  );
}
