// import Directors from './(about-us)/_components/Directors/Directors';
// 'use client';

import BigVinyl from './_components/BigVinyl/BigVinyl';
import HeroSection from './_components/hero/heroMainSection';
import SandCastle from './_components/SandCastle';
import Sponsors from './_components/Sponsors/Sponsors';
import styles from './page.module.scss';
import FAQ from './_components/FAQ/FAQ';
import Underwater from '../_components/Underwater/Underwater';
import BigWave from './_components/BigWave/BigWave';
import Crowdfund from './_components/Crowdfund/Crowdfund';

export default function Home() {
  return (
    <div className={styles.container}>
      <div id="home">
        <HeroSection />
        {/*<SandCastle />*/}
      </div>
      {/*
      <div id="underwater">
        <BigWave />
        <Underwater />
      </div>

      <div id="donate">
        <FAQ />
      </div>

      <div id="sponsors">
        <Sponsors />
        <Crowdfund />
        <BigVinyl />
      </div>*/}
    </div>
  );
}
