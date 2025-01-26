import Leaves from './_components/Leaves/Leaves';
import Beach from './_components/Beach/Beach';
import Sky from './_components/Sky/Sky';
import Mud from './_components/Mud/Mud';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.landing_container}>
      <div className={styles.sky}>
        <Sky />
      </div>
      <div className={styles.beach}>
        <Beach />
      </div>
      <div className={styles.mud}>
        <Mud />
      </div>
      <div className={styles.leaves}>
        <Leaves />
      </div>
    </div>
  );
}
