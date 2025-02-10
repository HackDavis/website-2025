// import Directors from './(about-us)/_components/Directors/Directors';
import HeroSection from './_components/hero/heroSection';
import SandCastle from './_components/SandCastle';
import Sponsors from './_components/Sponsors/Sponsors';
import styles from './page.module.scss';
import FAQ from './_components/FAQ/FAQ';
import Underwater from '../_components/Underwater/Underwater';

export default function Home() {
  return (
    <div className={styles.container}>
      <div id="home">
        <HeroSection />
        <SandCastle />
      </div>

      <div id="donate">
        <Underwater />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <div id="sponsors">
        <Sponsors />
      </div>
    </div>
  );
}
