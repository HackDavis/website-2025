'use client';
import Image from 'next/image';

import style from './Underwater.module.scss';
import Bunny from 'public/images/landing_page/BunnySnorkel.svg';
// import Caustics from 'public/images/landing_page/Caustics.svg';
// import WaterRays from 'public/images/landing_page/WaterRays.svg';

const Underwater = () => (
  <div className={style.container}>
    <div className={style.imagecontainer}>
      <Image className={style.bunny} src={Bunny} alt="bunny" />
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
