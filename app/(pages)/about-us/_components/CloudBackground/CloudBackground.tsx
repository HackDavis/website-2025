import styles from './CloudBackground.module.scss';
import Image from 'next/image';

export default function CloudBackground() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/cloud_background/TopClouds.svg"
        alt="cloud"
        width={500} // Adjust as needed
        height={300} // Adjust as needed
      />
    </div>
  );
}
