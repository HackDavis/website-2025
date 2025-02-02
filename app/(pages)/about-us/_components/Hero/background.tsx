import Leaves from './_components/Leaves/Leaves';
import Beach from './_components/Beach/Beach';
import Sky from './_components/Sky/Sky';
import Mud from './_components/Mud/Mud';
import styles from './background.module.scss';

export default function Hero() {
  return (
    <div className={styles.landing_container}>
      <Sky />
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
