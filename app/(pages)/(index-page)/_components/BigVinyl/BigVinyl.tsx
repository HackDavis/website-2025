'use client';
//import { useParallax } from 'react-scroll-parallax';
import styles from './BigVinyl.module.scss';
import Image from 'next/image';

import cloudBottom from '@public/BigVinyl/CloudBottom.svg';
import cloudBottomDim from '@public/BigVinyl/CloudBottomDim.svg';
import cloudCenter from '@public/BigVinyl/CloudCenter.svg';
import cloudTop from '@public/BigVinyl/CloudTop.svg';
//import vinyl from '/public/BigVinyl/Vinyl.svg';
import vinyl from '@public/BigVinyl/Vinyl_text_style_1.svg';
//import vinyl from '/public/BigVinyl/Vinyl_text_style_2.svg';

export default function BigVinyl() {
  // const parallax = useParallax<HTMLDivElement>({
  //   rotate: [0, 360],
  // });

  return (
    <div className={styles.container}>
      {/* First Row */}
      <div className={styles.rowTop}>
        <div className={styles.cloudsTopLeft}>
          <div className={styles.cloudsTopLeft_topLayer}>
            <Image
              src={cloudTop}
              alt="Clouds Top Left Layer 1"
              objectFit="fill"
            />
          </div>
          <div className={styles.cloudsTopLeft_bottomLayer}>
            <Image
              src={cloudTop}
              alt="Clouds Top Left Layer 2"
              objectFit="fill"
            />
          </div>
        </div>
        <div className={styles.cloudsTopRight}>
          <div className={styles.cloudsTopRight_topLayer}>
            <Image
              src={cloudTop}
              alt="Clouds Top Right Layer 1"
              objectFit="fill"
            />
          </div>
          <div className={styles.cloudsTopRight_bottomLayer}>
            <Image
              src={cloudTop}
              alt="Clouds Top Right Layer 2"
              objectFit="fill"
            />
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className={styles.rowMiddle}>
        <div className={styles.cloudCenter}>
          <Image src={cloudCenter} alt="center cloud" />
        </div>
      </div>

      {/* Third Row */}
      <div className={styles.rowBottom}>
        <div className={styles.cloudsBottomLeft}>
          <div className={styles.cloudsBottomLeft_topLayer}>
            <Image
              src={cloudBottom}
              alt="Clouds Bottom Left Layer 1"
              objectFit="fill"
            />
          </div>
          <div className={styles.cloudsBottomLeft_bottomLayer}>
            <Image
              src={cloudBottomDim}
              alt="Clouds Bottom Left Layer 2"
              objectFit="fill"
            />
          </div>
        </div>

        <div className={styles.cloudsBottomRight}>
          <div className={styles.cloudsBottomRight_topLayer}>
            <Image
              src={cloudBottom}
              alt="Clouds Bottom Right Layer 1"
              objectFit="fill"
            />
          </div>
          <div className={styles.cloudsBottomRight_bottomLayer}>
            <Image
              src={cloudBottom}
              alt="Clouds Bottom Right Layer 2"
              objectFit="fill"
            />
          </div>
        </div>
      </div>

      {/* Vinyl Row */}
      <div className={styles.vinylRow}>
        <div className={styles.bigVinyl}>
          <Image
            src={vinyl}
            //ref={parallax.ref}
            alt="Big Vinyl Center"
            objectFit="fill"
          />
        </div>
      </div>
    </div>
  );
}
