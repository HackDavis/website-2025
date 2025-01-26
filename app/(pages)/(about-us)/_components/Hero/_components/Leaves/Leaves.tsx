'use client';
import Image from 'next/image';
import styles from './Leaves.module.scss';
import LeavesSVG from '/public/index/Hero/Leaves/Leaves.svg';

export default function Leaves() {
  return (
    <div className={styles.container}>
      <div className={styles.leaves}>
        <Image src={LeavesSVG} alt="Leaves" fill />
      </div>
    </div>
  );
}
