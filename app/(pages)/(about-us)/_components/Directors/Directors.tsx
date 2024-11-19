import styles from './Directors.module.scss';

export default function Directors() {
  return (
    <div className={styles.container}>

        <div className={styles.text}>
          <h1>Meet our Directors</h1>
          <h3>HackDavis is built by students, for students.</h3>
        </div>

        <div className={styles.buttonsContainer}>
          <div className={styles.buttons}>Team 1</div>
          <div className={styles.buttons}>Team 1</div>
          <div className={styles.buttons}>Team 1</div>
          <div className={styles.buttons}>Team 1</div>
        </div>

    </div>
  );
}