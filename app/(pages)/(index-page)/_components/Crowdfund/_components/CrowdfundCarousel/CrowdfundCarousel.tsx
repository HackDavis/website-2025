import Marquee from '../Marquee/Marquee';
import styles from './CrowdfundCarousel.module.scss';

type CrowdfundCarouselProps = {
  supportersLine1: string[];
  supportersLine2: string[];
};

export default function CrowdfundCarousel({
  supportersLine1,
  supportersLine2,
}: CrowdfundCarouselProps) {
  return (
    <div className={styles.container}>
      <Marquee iterations={2} duration={50}>
        {supportersLine1.map((name, index) => (
          <span key={`line1-${index}`} className={styles.supporterName}>
            {name}
          </span>
        ))}
      </Marquee>
      <Marquee iterations={2} reverse duration={50}>
        {supportersLine2.map((name, index) => (
          <span key={`line2-${index}`} className={styles.supporterName}>
            {name}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
