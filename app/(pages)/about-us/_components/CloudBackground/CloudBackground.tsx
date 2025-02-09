import styles from './CloudBackground.module.scss';
import Image from 'next/image';

export default function CloudBackground() {
  return (
    <div className={styles.container}>
      <div className={styles.child}>
        <Image
          src="/images/cloud_background/LeftClouds.svg"
          alt="clouds"
          width={150}
          height={150}
        />
      </div>
      <div className={styles.child}>
        <Image
          src="/images/cloud_background/RightClouds.svg"
          alt="clouds"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}
