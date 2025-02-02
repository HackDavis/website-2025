import Sky from './_components/Sky/Sky';
import Beach from './_components/Beach/Beach';
import Mud from './_components/Mud/Mud';
import Leaves from './_components/Leaves/Leaves';
import styles from './background.module.scss';

export default function Hero() {
  return (
    <div className={styles.landing_container}>
      <Sky />
      <Beach />
      <div className={styles.mud}>
        <Mud />
      </div>
      <div className={styles.leaves}>
        <Leaves />
      </div>
    </div>
  );
}
