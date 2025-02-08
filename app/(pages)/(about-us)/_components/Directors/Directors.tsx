import styles from './Directors.module.scss';
// import { useState } from 'react';
// const [activeCategory, setActiveCategory] = useState('Technical');

export default function Directors() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Meet our Directors</h1>
        <h3>HackDavis is built by students, for students.</h3>
      </div>

      <div className={styles.buttonsContainer}>
        <div className={styles.buttons}>Design</div>
        <div className={styles.buttons}>External</div>
        <div className={styles.buttons}>Finance</div>
        <div className={styles.buttons}>Marketing</div>
        <div className={styles.buttons}>Operations</div>
        <div className={styles.buttons}>Sponsorship</div>
        <div className={styles.buttons}>Technical</div>
      </div>

      <div className={styles.team}>
        {/* one profile */}
        <div className={styles.profile}>
          {/* <Image /> */}
          <h4>First last</h4>
          <p> Position, lead</p>
        </div>

        {/* 2nd profile */}
        <div className={styles.profile}>
          {/* <Image /> */}
          <h4>First last</h4>
          <p> Position, lead</p>
        </div>

        {/* 3rd profile */}
        <div className={styles.profile}>
          {/* <Image /> */}
          <h4>First last</h4>
          <p> Position, lead</p>
        </div>

        {/* 4th profile */}
        <div className={styles.profile}>
          {/* <Image /> */}
          <h4>First last</h4>
          <p> Position, lead</p>
        </div>
      </div>
    </div>
  );
}
