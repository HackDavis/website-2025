// import Directors from './(about-us)/_components/Directors/Directors';
'use client';

import BigVinyl from './_components/BigVinyl/BigVinyl';
import HeroSection from './_components/hero/heroSection';
import SandCastle from './_components/SandCastle';
import Sponsors from './_components/Sponsors/Sponsors';
import styles from './page.module.scss';
import FAQ from './_components/FAQ/FAQ';
import Underwater from '../_components/Underwater/Underwater';
import BigWave from './_components/BigWave/BigWave';

export default function Home() {
  return (
    <div className={styles.container} id="home">
      <HeroSection />
      <SandCastle />
      <BigWave />

      <div id="faq">
        <Underwater />
        <FAQ />
      </div>

      <div id="sponsors">
        <Sponsors />
      </div>
      <BigVinyl />
    </div>
  );
}
