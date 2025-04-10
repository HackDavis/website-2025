// import Image from 'next/image';
import CrowdfundCarousel from './_components/CrowdfundCarousel/CrowdfundCarousel';
import styles from './Crowdfund.module.scss';
import { LuHeart } from 'react-icons/lu';

const supportersLine1 = [
  'Aarav Gambhir',
  'Aland Liu',
  'Alice Heng',
  'Alison Young',
  'Anthony Thomas',
  'April Fallon',
  'Arun Pratap Singh',
  'Bill Mead',
  'Caitlyn Wong',
  'Cambria Yang',
  'Carlos Alvarez Vereterra',
  'Chelsea Lai',
  'Dilip Mandadi',
  'Elizabeth White',
  'Eric Lin',
  'Fiona Phongsa',
  'Glenda Drew',
  'Hung-Ta Chen',
  'Jason Bui',
  'Jason Xie',
  'Joël Porquet-Lupine',
  'Katerina Rahhal',
  'Lana Wong',
];

const supportersLine2 = [
  'Michelle Feng',
  'Murali Krishna Bachhu',
  'Peter Webster',
  'Pragati Satpute',
  'Raju Dandigam',
  'Raman Dhir',
  'Ravi Sandhu',
  'Ritu Prajapati',
  'Rushil Patel',
  'Sam Poder',
  'Sasikala Sasikumar',
  'Sauvikesh Lal',
  'Shashank Kapadia',
  'Sreeprasad Govindankutty',
  'Srinivasa Rao Bittla',
  'Tarini Maram',
  'Tiffany Chac',
  'Trisha Baadkar',
  'Vamsi Chagari',
  'Vivek Sandhu',
  'Win Cheng',
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
