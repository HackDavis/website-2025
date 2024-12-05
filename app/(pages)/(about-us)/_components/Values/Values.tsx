import styles from './Values.module.scss';
// import { useState } from 'react';
// const [activeCategory, setActiveCategory] = useState('Technical');

export default function Values() {
  return (
    <div className={styles.container}>
      <h1> What we're all about </h1>
      <div className={styles.valuesContainer}>
        <div className={styles.valuesBox}>
          <h4> Inclusivity </h4>
          <p>
            We invite individuals of all backgrounds to learn new skills and
            grow in an inclusive environment.
          </p>
        </div>
        <div className={styles.valuesBox}>
          <h4> Hands-on learning </h4>
          <p>
            No matter which prompt you choose, each project provides hands-on
            experience and an opportunity to explore a new discipline.
          </p>
        </div>
        <div className={styles.valuesBox}>
          <h4> Impactful projects </h4>
          <p>
            Create meaningful, impactful, and innovative solutions that benefit
            local and global communities.
          </p>
        </div>
      </div>
    </div>
  );
}
