'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './BigWave.module.scss';
import Statistics from './Statistics';

import bottomLeft from '@public/index/wave/bottom-left.svg';
import bottomRight from '@public/index/wave/bottom-right.svg';
import topRight from '@public/index/wave/top-right.svg';
import right from '@public/index/wave/right.svg';
import bottom from '@public/index/wave/bottom.svg';
import boxTop from '@public/index/wave/box-top.svg';
import waveLayer1 from '@public/index/wave/wave-layer-1.svg';
import waveLayer2 from '@public/index/wave/wave-layer-2.svg';
import waveLayer3 from '@public/index/wave/wave-layer-3.svg';
import waveLayer4 from '@public/index/wave/wave-layer-4.svg';

export default function BigWave() {
  return (
    <>
      <div style={{ width: '400px', height: '400px', position: 'relative' }}>
        <Image
          src={bottom}
          alt="bottom-foam"
          width={300}
          height={300}
          style={{ objectFit: 'fill' }}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.stats_container}>
          <Statistics />
          <Link href={'google.com'} className={styles.sponsor_button}>
            Sponsor 2025
          </Link>
        </div>
        <Image
          src={bottomLeft}
          alt="bottom-left-foam"
          className={styles.bottom_left}
        />
        <Image
          src={bottomRight}
          alt="bottom-right-foam"
          className={styles.bottom_right}
        />
        <Image
          src={topRight}
          alt="top-right-foam"
          className={styles.top_right}
        />
        <div className={styles.box_top}>
          <Image src={boxTop} alt="box-top" fill />
        </div>
        <Image
          src={waveLayer1}
          alt="wave-layer-1"
          className={styles.wave_layer_1}
        />
        <Image
          src={waveLayer2}
          alt="wave-layer-2"
          className={styles.wave_layer_2}
        />
        <Image
          src={waveLayer3}
          alt="wave-layer-3"
          className={styles.wave_layer_3}
        />
        <Image
          src={waveLayer4}
          alt="wave-layer-4"
          className={styles.wave_layer_4}
        />
        <div className={styles.right}>
          <Image src={right} alt="right-foam" fill />
        </div>
        <div className={styles.bottom}>
          <Image src={bottom} alt="bottom-foam" />
        </div>
      </div>
    </>
  );
}
