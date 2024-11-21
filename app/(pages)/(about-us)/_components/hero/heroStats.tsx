'use client';
import styles from './heroStats.module.scss';

import CountUp from '@components/CountUp/CountUp';

const statsData = [
  { stat: 750, text: 'HACKERS', suffix: '+', duration: 2000 },
  { stat: 150, text: 'PROJECTS', suffix: '+', duration: 2000 },
  { stat: 15, text: 'PRIZES', prefix: '$', suffix: 'k+', duration: 2000 },
  { stat: 24, text: 'HOURS', duration: 2000 },
];

export default function HeroStats() {
  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        {statsData.map((item) => (
          <div key={item.stat} className={styles.stats_inside}>
            <h1>
              <CountUp
                end={item.stat}
                duration={item.duration}
                prefix={item.prefix}
                suffix={item.suffix}
              />
            </h1>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
