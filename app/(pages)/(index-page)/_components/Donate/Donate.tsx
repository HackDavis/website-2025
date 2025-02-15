'use client';
import Link from 'next/link';
import Image from 'next/image';

import style from './Donate.module.scss';
import HeartButton from '../HeartButton/heartButton';

const Donate = () => (
  <div className={style.container}>
    <Image
      src="/images/donate/light_grass_bg.svg"
      alt="donate section background"
      width={1000}
      height={450}
    />

    <div className={style.dark_grass_container}>
      <div className={style.dark_grass_left}>
        <Image
          src="/images/donate/dark_grass_left.svg"
          alt="donate section background"
          width={260}
          height={280}
        />
      </div>
      <div className={style.dark_grass_right}>
        <div className={style.dark_grass_top}>
          <Image
            src="/images/donate/dark_grass_top.svg"
            alt="donate section background"
            width={700}
            height={130}
          />
          <h2>support for social good.</h2>
        </div>
        <div className={style.dark_grass_hanging}>
          <div className={style.information}>
            <Image
              src="/images/donate/dark_grass_hanging.svg"
              alt="donate section background"
              width={330}
              height={280}
            />
            <div className={style.link_wrapper}>
              <Link
                href="https://www.guidestar.org/profile/shared/4cf39094-2e34-44e6-890e-7a547408155b"
                target="_blank"
                className={style.seal_wrapper}
              >
                <Image
                  src="https://widgets.guidestar.org/TransparencySeal/10110290"
                  alt="Guidestar Transparency Seal"
                  fill={true}
                  unoptimized={true}
                />
              </Link>
              {/* <Link
                className={style.sponsorButton}
                href="mailto:team@hackdavis.io"
              >
                <div className={style.heartButton}>
                  <Image
                    src="/images/donate/Heart.svg"
                    alt="Heart blue icon"
                    width={30}
                    height={30}
                    // fill={true}
                  />
                </div>
                Donate
              </Link> */}
              <div className={style.donate_button}>
                <HeartButton
                  text="Donate"
                  href="https://www.givecampus.com/schools/UniversityofCaliforniaDavis/crowdfund-uc-davis-february-2025/pages/hackdavis2025"
                />
              </div>
            </div>
          </div>
          <div className={style.dark_grass_droplet}>
            <Image
              src="/images/donate/dark_grass_droplet.svg"
              alt="donate section background"
              width={40}
              height={90}
            />
          </div>
          <div className={style.cow_on_grass}>
            <Image
              src="/images/donate/cow_on_grass.svg"
              alt="donate section background"
              width={370}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Donate;
