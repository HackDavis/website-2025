'use client';
import Link from 'next/link';
import Image from 'next/image';

import style from './Donate.module.scss';
// import Grass from 'public/images/Donate/Grass.svg';
// import Bunny from 'public/images/landing_page/BunnySnorkel.svg';
// import Caustics from 'public/images/landing_page/Caustics.svg';
// import WaterRays from 'public/images/landing_page/WaterRays.svg';

const Underwater = () => (
  <div className={style.container}>
    <div className={style.grassContainer}>
      <h2>support for social good</h2>

      {/* <div className={}></div> */}
      <Link
        href="https://www.guidestar.org/profile/shared/4cf39094-2e34-44e6-890e-7a547408155b"
        target="_blank"
      >
        <div className={style.sealWrapper}>
          <Image
            src="https://widgets.guidestar.org/TransparencySeal/10110290"
            alt="Guidestar Transparency Seal"
            fill={true}
            unoptimized={true}
          />
        </div>
      </Link>
    </div>
  </div>
);

export default Underwater;
