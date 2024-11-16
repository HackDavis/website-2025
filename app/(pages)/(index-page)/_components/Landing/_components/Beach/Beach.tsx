'use client';
import Image from 'next/image';
import styles from './Beach.module.scss';
import WaterRectangle from '/public/index/Hero/WaterRectangle.svg';
import WaterLight from '/public/index/Hero/WaterLight.svg';
import SandDark from '/public/index/Hero/SandDark.svg';
import SandLight from '/public/index/Hero/SandLight.svg';
import SandSemicircle from '/public/index/Hero/SandSemicircle.svg';

export default function Sand() {
  return (
    <div className={styles.container}>
      
      <div className={styles.sand_semicircle}>
        <Image 
          src={SandSemicircle} 
          alt="Sand Semicircle" 
          width={2089}
          height={812} 
        />
      </div>
      <div className={styles.water_light}>
        <Image 
          src={WaterLight} 
          alt="Water Light" 
          width={1726}
          height={100}
        />
      </div>
      <div className={styles.sand_dark}>
        <Image 
          src={SandDark} 
          alt="Sand Dark"
          width={1726}
          height={100}
        />
      </div>
      <div className={styles.sand_light}>
        <Image 
          src={SandLight} 
          alt="Sand Light"
          width={1726}
          height={100}
        />
      </div>
      <div className={styles.water_rectangle}>
        <Image 
          src={WaterRectangle} 
          alt="Water Rectangle" 
          width={1792}
          height={147}
        />
      </div>
      

    </div>
  );
}
