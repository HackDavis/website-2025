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

import duck from '@public/index/wave/ducky.svg';
import eightNote from '@public/index/wave/eighth-note.svg';
import twoEigthNote from '@public/index/wave/two-eighth-note.svg';

import darkAccents from '@public/index/wave/dark-accents.svg';
import brightAccents from '@public/index/wave/bright-accents.svg';
import brightAccent from '@public/index/wave/bright-accent.svg';

export default function BigWave() {
  return (
    <div className={styles.container}>
      <div className={styles.stats_container}>
        <div className={styles.stats}>
          <Statistics />
          <Link href={'mailto:team@hackdavis.io'} className={styles.sponsor_button}>
            Sponsor 2025
          </Link>
        </div>
      </div>
      <div className={styles.water}>
        <div className={styles.bottom_left}>
          <Image src={bottomLeft} alt="bottom-left-foam" />
        </div>
        <div className={styles.bottom}>
          <Image src={bottom} alt="bottom-foam" />
        </div>
        <div className={styles.bottom_right}>
          <Image src={bottomRight} alt="bottom-right-foam" />
        </div>
        <div className={styles.right}>
          <Image src={right} alt="right-foam" />
        </div>
        <div className={styles.top_right}>
          <Image src={topRight} alt="top-right-foam" />
        </div>
        <div className={styles.box_top}>
          <Image src={boxTop} alt="box-top" />
        </div>
        <div className={`${styles.wave_layer_1} ${styles.wave}`}>
          <Image src={waveLayer1} alt="wave-layer-1" />
        </div>
        <div className={`${styles.wave_layer_2} ${styles.wave}`}>
          <Image src={waveLayer2} alt="wave-layer-2" />
        </div>
        <div className={`${styles.wave_layer_3} ${styles.wave}`}>
          <Image src={waveLayer3} alt="wave-layer-3" />
        </div>
        <div className={`${styles.wave_layer_4}`}>
          <Image src={waveLayer4} alt="wave-layer-4" />
        </div>
        <div className={styles.bright_accents}>
          <Image src={brightAccents} alt="bright-accents" />
        </div>
        <div className={styles.bright_accent}>
          <Image src={brightAccent} alt="bright-accent" />
        </div>
        <div className={styles.dark_accents}>
          <Image src={darkAccents} alt="dark-accents" />
        </div>
      </div>
      <div className={styles.duck_group}>
        <div className={styles.duck_container}>
          <div className={styles.duck}>
            <Image src={duck} alt="duck" />
          </div>
          <div className={styles.eighth_note}>
            <Image src={eightNote} alt="eighth-note" />
          </div>
          <div className={styles.two_eighth_note}>
            <Image src={twoEigthNote} alt="two-eighth-note" />
          </div>
        </div>
      </div>
    </div>
  );
}
