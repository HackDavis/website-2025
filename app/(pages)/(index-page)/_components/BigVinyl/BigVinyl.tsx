'use client';
import styles from './BigVinyl.module.scss';
import Image from 'next/image';

import cloudBottom from '/public/BigVinyl/CloudBottom.svg';
import cloudBottomDim from '/public/BigVinyl/CloudBottomDim.svg';
import cloudCenter from '/public/BigVinyl/CloudCenter.svg';
import cloudTop from '/public/BigVinyl/cloudTop.svg';
import vinyl from '/public/BigVinyl/Vinyl.svg';

export default function BigVinyl() {
  return (
    <div className={styles.container}>
      {/* First Row */}
      <div className={styles.rowTop}>
        <div className={styles.cloudsTopLeft}>
          <div className={styles.cloudsTopLeft_topLayer}>
            <Image src={cloudTop} alt="Clouds Top Left Layer 1" />
          </div>
          <div className={styles.cloudsTopLeft_bottomLayer}>
            <Image src={cloudTop} alt="Clouds Top Left Layer 2" />
          </div>
        </div>
        <div className={styles.cloudsTopRight}>
          <div className={styles.cloudsTopRight_topLayer}>
            <Image src={cloudTop} alt="Clouds Top Right Layer 1" />
          </div>
          <div className={styles.cloudsTopRight_bottomLayer}>
            <Image src={cloudTop} alt="Clouds Top Right Layer 2" />
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
            <Image src={cloudBottom} alt="Clouds Bottom Left Layer 1" />
          </div>
          <div className={styles.cloudsBottomLeft_bottomLayer}>
            <Image src={cloudBottomDim} alt="Clouds Bottom Left Layer 2" />
          </div>
        </div>
        <div className={styles.vinylRow}>
          <div className={styles.bigVinyl}>
            <Image src={vinyl} alt="Big Vinyl Center" />
          </div>
        </div>
        <div className={styles.cloudsBottomRight}>
          <div className={styles.cloudsBottomRight_topLayer}>
            <Image src={cloudBottom} alt="Clouds Bottom Right Layer 1" />
          </div>
          <div className={styles.cloudsBottomRight_bottomLayer}>
            <Image src={cloudBottom} alt="Clouds Bottom Right Layer 2" />
          </div>
        </div>
      </div>

      {/* Vinyl Row */}
    </div>
  );
}
