import Marquee from '../Marquee/Marquee';
import styles from './CrowdfundCarousel.module.scss';

type CrowdfundCarouselProps = {
  supporters: string[];
};

export default function CrowdfundCarousel({
  supporters,
}: CrowdfundCarouselProps) {
  return (
    <div className={styles.container}>
      <Marquee iterations={2} duration={50}>
        {supporters.map((name, index) => (
          <span key={index} className={styles.supporterName}>
            {name}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
