'use client';
import Link from 'next/link';
import Image from 'next/image';

import style from './Donate.module.scss';
import Heart from 'public/images/Donate/Heart.svg';

const Donate = () => (
  <div className={style.container}>
    <div className={style.grassContainer}>
      <div className={style.title}>
        <h2>support for social good.</h2>
      </div>

      <div className={style.children}>
        <div className={style.sealWrapper}>
          <Link
            className={style.sealChildren}
            href="https://www.guidestar.org/profile/shared/4cf39094-2e34-44e6-890e-7a547408155b"
            target="_blank"
          >
            <Image
              src="https://widgets.guidestar.org/TransparencySeal/10110290"
              alt="Guidestar Transparency Seal"
              fill={true}
              unoptimized={true}
            />
          </Link>

          <div className={style.buttons}>
            <a className={style.sponsorButton}>
              <div className={style.heartButton}>
                <Image src={Heart} alt="Heart blue icon" unoptimized={true} />
              </div>
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Donate;
