import Sky from './_components/Sky/Sky';
import Beach from './_components/Beach/Beach';
import styles from './background.module.scss';

export default function Hero() {
  return (
    <div className={styles.landing_container}>
      <Sky />
      <Beach />
    </div>
  );
}
