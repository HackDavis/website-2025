import styles from './Values.module.scss';
import Image from 'next/image';
import CowTada from '/public/aboutUs/Values/cow_tada.svg';
import FroggyTada from '/public/aboutUs/Values/froggy_tada.svg';
import BunnyTada from '/public/aboutUs/Values/bunny_tada.svg';

export default function Values() {
  return (
    <div className={styles.container}>
      <h1> What we're all about </h1>
      <div className={styles.valuesContainer}>
        <div className={styles.valuesBoxInclusive}>
          <div>
            <h4> Inclusivity </h4>
            <p>
              We invite individuals of all backgrounds to learn new skills and
              grow in an inclusive environment.
            </p>
          </div>
          <Image src={CowTada} alt="cow tada" />
        </div>
        <div className={styles.valuesBoxLearning}>
          <div>
            <h4> Hands-on learning </h4>
            <p>
              No matter which prompt you choose, each project provides hands-on
              experience and an opportunity to explore a new discipline.
            </p>
          </div>
          <Image src={FroggyTada} alt="froggy tada" />
        </div>
        <div className={styles.valuesBoxProjects}>
          <div>
            <h4> Impactful projects </h4>
            <p>
              Create meaningful, impactful, and innovative solutions that
              benefit local and global communities.
            </p>
          </div>
          <Image src={BunnyTada} alt="bunny tada" />
        </div>
      </div>
    </div>
  );
}
