// import Image from 'next/image';
import CrowdfundCarousel from './_components/CrowdfundCarousel/CrowdfundCarousel';
import styles from './Crowdfund.module.scss';
import { LuHeart } from 'react-icons/lu';

const supporters = [
  'Alice Johnson',
  'Bob Smith',
  'The Davis Family',
  'Tech for Good Foundation',
  'Anonymous Donor',
];

export default function Crowdfund() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>And a special thanks to our donors</h1>
        <LuHeart className={styles.heartIcon} />
      </div>
      <div className={styles.sponsors}>
        <CrowdfundCarousel supporters={supporters} />
      </div>
    </div>
  );
}
