import Image from 'next/image';
import Bunny from './_components/Bunny/Bunny';
import Cow from './_components/Cow/Cow';
import Ducky from './_components/Ducky/Ducky';
import Froggy from './_components/Froggy/Froggy';
import SponsorsCarousel from './_components/Sponsors/SponsorsCarousel';
import RedFlower from 'public/Sponsors/characters/red-flower.svg';
import YellowFlower from 'public/Sponsors/characters/yellow-flower.svg';
import styles from './Sponsors.module.scss';

export default async function Sponsors() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.topBlock}></div>
        <div className={styles.middleBlock}>
          <div className={styles.bunny}>
            <Bunny />
          </div>
          <div className={styles.redFlower}>
            <Image src={RedFlower} alt="red flower" height={79} width={79} />
          </div>
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
        <div className={styles.topBlock}></div>
        <div className={styles.middleBlock}>
          <div className={styles.ducky}>
            <Ducky />
          </div>
          <div className={styles.yellowFlower}>
            <Image
              src={YellowFlower}
              alt="yellow flower"
              height={68}
              width={68}
            />
          </div>
        </div>
        <div className={styles.bottomBlock}>
          <div className={styles.froggy}>
            <Froggy />
          </div>
          <div className={`${styles.sandTexture} ${styles.firstTexture}`}></div>
        </div>
      </div>
    </div>
  );
}
