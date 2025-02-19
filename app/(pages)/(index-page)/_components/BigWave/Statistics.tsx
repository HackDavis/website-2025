'use client';

import NumberCountUp from '@components/NumberCountUp/NumberCountUp';
import styles from './Statistics.module.scss';

const ANIMATION_LEN = 2000;

const statsData = [
  { stat: 900, text: 'HACKERS', suffix: '+' },
  { stat: 24, text: 'HOURS' },
  { stat: 150, text: 'PROJECTS', suffix: '+' },
  { stat: 20, text: 'PRIZES', prefix: '$', suffix: 'k+' },
];

export default function Statistics() {
  return (
    <div>
      <div className={styles.stats}>
        {statsData.map((item) => (
          <div className={styles.stat} key={item.stat}>
            <p className={styles.number}>
              {item.prefix}
              <NumberCountUp endValue={item.stat} duration={ANIMATION_LEN} />
              {item.suffix}
            </p>
            <p className={styles.number_label}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
