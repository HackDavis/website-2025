import styles from './page.module.scss';
import SandCastle from './_components/SandCastle';
import Sponsors from './_components/Sponsors/Sponsors';
import FAQ from './_components/FAQ/FAQ';
import BigWave from './_components/BigWave/BigWave';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="h-[300px] w-full bg-red-500"></div>
      <div id="about">
        <SandCastle />
        <BigWave />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="sponsors" className={styles.sponsors}>
        <Sponsors />
      </div>
    </div>
  );
}
