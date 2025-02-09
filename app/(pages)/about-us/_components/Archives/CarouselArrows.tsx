'use client';
import styles from './CarouselArrows.module.scss';
import { useCarouselContext } from '@pages/about-us/_hooks/useCarouselContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

export default function CarouselArrows() {
  const { windowWidth, scroll, windowRef, contentWidth } = useCarouselContext();

  const carouselWindow = windowRef?.current;

  const scrollRight = () => {
    carouselWindow?.scrollTo({
      left: scroll + windowWidth / 2,
      behavior: 'smooth',
    });
  };

  const scrollLeft = () => {
    carouselWindow?.scrollTo({
      left: scroll - windowWidth / 2,
      behavior: 'smooth',
    });
  };

  const canGoLeft = scroll !== 0;
  const canGoRight = scroll + windowWidth < contentWidth - 1;

  return (
    <div className={styles.container}>
      <button onClick={scrollLeft} className={canGoLeft ? styles.active : ''}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button onClick={scrollRight} className={canGoRight ? styles.active : ''}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}
