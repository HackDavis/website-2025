import Link from 'next/link';
import Image from 'next/image';
import styles from './heartButton.module.scss';

export default function HeartButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link href={href} className={styles.button_container}>
      <div className={styles.heart_coin}>
        <Image
          src="/images/donate/button_heart_coin-cropped.svg"
          alt="heart"
          // width={20}
          // height={20}
          fill={true}
        />
      </div>
      <h4>{text}</h4>
    </Link>
  );
}
// import React, { useState } from 'react';
// import Link from 'next/link';
// import styles from './heartButton.module.scss';
// import heartIcon from '/public/images/donate/Heart.svg';
// import Image from 'next/image';

// interface HeartButtonProps {
//   text: string;
//   href: string;
// }

// const HeartButton = ({ text, href }: HeartButtonProps) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Link
//       href={href}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className={styles.heartButton}
//     >
//       <div className={styles.content}>
//         <div className={styles.iconWrapper}>
//           <Image
//             src={heartIcon}
//             alt="heart"
//             className={styles.icon}
//             width={20}
//             height={20}
//           />
//         </div>
//         <span className={styles.text}>{text}</span>
//       </div>
//     </Link>
//   );
// };

// export default HeartButton;
