// import Image from 'next/image';
import CrowdfundCarousel from './_components/CrowdfundCarousel/CrowdfundCarousel';
import styles from './Crowdfund.module.scss';
import { LuHeart } from 'react-icons/lu';

const supportersLine1 = [
  'Alice Johnson',
  'Bob Smith',
  'The Davis Family',
  'Tech for Good Foundation',
];

const supportersLine2 = [
  'Anonymous Donor',
  'River Valley Robotics',
  'Green Earth Org',
  'Mentorship Matters',
];

export default function Crowdfund() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>And a special thanks to our donors</h1>
        <LuHeart className={styles.heartIcon} />
      </div>
      <div className={styles.sponsors}>
        <CrowdfundCarousel
          supportersLine1={supportersLine1}
          supportersLine2={supportersLine2}
        />
      </div>
    </div>
  );
}
