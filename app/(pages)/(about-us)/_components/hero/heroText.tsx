'use client';
import styles from './heroText.module.scss';

export default function HeroText() {
    return (
        <div className={styles.container}>
            <h2>HELLO, WE'RE</h2>
            <h1>HackDavis</h1>
            <p>Bringing together the most talented students <br/> and leaders to create for social good</p>
        </div>
    );
}