import Image from 'next/image';

import Bunny from './_components/Bunny/Bunny';
import Cow from './_components/Cow/Cow';
import Ducky from './_components/Ducky/Ducky';
import Froggy from './_components/Froggy/Froggy';
import SponsorsCarousel from './_components/Sponsors/SponsorsCarousel';
import RedFlower from 'public/Sponsors/characters/red-flower.svg';
import YellowFlower from 'public/Sponsors/characters/yellow-flower.svg';
import LeftGrass from 'public/Sponsors/characters/left-grass.svg';
import RightGrass from 'public/Sponsors/characters/right-grass.svg';
import TopGrass from 'public/Sponsors/characters/TopGrass.svg';
import BottomCow from 'public/Sponsors/characters/BottomCow.svg';

import styles from './Sponsors.module.scss';

export default async function Sponsors() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image
          src={TopGrass}
          alt="grass"
          width={1280}
          height={189}
          className={styles.grass}
        />
      </div>

      <div className={styles.left}>
        <div className={styles.grass}>
          <Image src={LeftGrass} alt="grass" height={185} width={617} />
          <Image
            className={styles.yellowFlower}
            src={YellowFlower}
            alt="yellow flower"
            height={68}
            width={68}
          />
        </div>
        <div className={styles.topBlock}></div>
        <div className={styles.middleBlock}>
          <div className={styles.bunny}>
            <Bunny />
          </div>
          <Image
            className={styles.redFlower}
            src={RedFlower}
            alt="red flower"
            height={79}
            width={79}
          />
        </div>
        <div className={styles.bottomBlock}>
          <div className={styles.cow}>
            <Cow />
          </div>
          <div className={`${styles.sandTexture} ${styles.firstTexture}`}></div>
          <div
            className={`${styles.sandTexture} ${styles.secondTexture}`}
          ></div>
        </div>
      </div>

      <div className={styles.sponsors}>
        <SponsorsCarousel />
      </div>

      <div className={styles.right}>
        <div className={styles.grass}>
          <Image src={RightGrass} alt="grass" height={197} width={562} />
          <Image
            className={styles.redFlower}
            src={RedFlower}
            alt="red flower"
            height={53}
            width={53}
          />
        </div>
        <div className={styles.topBlock}></div>
        <div className={styles.middleBlock}>
          <div className={styles.ducky}>
            <Ducky />
          </div>
          <Image
            className={styles.yellowFlower}
            src={YellowFlower}
            alt="yellow flower"
            height={68}
            width={68}
          />
        </div>
        <div className={styles.bottomBlock}>
          <div className={styles.froggy}>
            <Froggy />
          </div>
          <div className={`${styles.sandTexture} ${styles.firstTexture}`}></div>
        </div>
      </div>

      <div className={styles.bottom}>
        <Image
          src={BottomCow}
          alt="sleeping cow"
          width={396}
          height={209}
          className={styles.bottomCow}
        />
      </div>
    </div>
  );
}
