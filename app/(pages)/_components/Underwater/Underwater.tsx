'use client';
import Image from 'next/image';

import style from './Underwater.module.scss';
import Bunny from 'public/images/landing_page/BunnySnorkel.svg';
import ray1 from 'public/images/landing_page/ray1.svg';
import ray2 from 'public/images/landing_page/ray2.svg';
import ray3 from 'public/images/landing_page/ray3.svg';
import ray4 from 'public/images/landing_page/ray4.svg';
import note1 from 'public/images/landing_page/note1.svg';
import note2 from 'public/images/landing_page/note2.svg';
import note3 from 'public/images/landing_page/note3.svg';
import note4 from 'public/images/landing_page/note4.svg';

// import Caustics from 'public/images/landing_page/Caustics.svg';
// import WaterRays from 'public/images/landing_page/WaterRays.svg';

const Underwater = () => (
  <div className={style.container}>
    <div className={style.rayContainer}>
      <Image className={`${style.ray} ${style.ray1}`} src={ray1} alt="ray" />
      <Image className={`${style.ray} ${style.ray2}`} src={ray2} alt="ray" />
      <Image className={`${style.ray} ${style.ray3}`} src={ray3} alt="ray" />
      <Image className={`${style.ray} ${style.ray4}`} src={ray4} alt="ray" />
    </div>

    <div className={style.content}></div>
    <div className={style.imagecontainer}>
      <div className={style.musicContainer}>
        <Image
          className={`${style.note} ${style.note1}`}
          src={note1}
          alt="music note"
        />
        <Image
          className={`${style.note} ${style.note2}`}
          src={note2}
          alt="music note"
        />
        <Image
          className={`${style.note} ${style.note3}`}
          src={note3}
          alt="music note"
        />
        <Image
          className={`${style.note} ${style.note4}`}
          src={note4}
          alt="music note"
        />
      </div>
      <div className={style.bunnyContainer}>
        <Image className={style.bunny} src={Bunny} alt="bunny" />
      </div>
    </div>
    <div className={style.textcontainer}>
      <h2 className={style.text}>create for</h2>
      <h2 className={style.coloredtext}>social good</h2>
      <p>
        HackDavis challenges its participants to utilize tech for social good,
        generating an opportunity for us to explore the intersection between
        technology and society.
      </p>
      <p>
        Creators from all backgrounds are welcome at HackDavis — no coding or
        previous experience required.
      </p>
    </div>
  </div>
);

export default Underwater;
