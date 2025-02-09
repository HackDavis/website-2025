// import Directors from './(about-us)/_components/Directors/Directors';
import HeroSection from './_components/hero/heroMainSection';
import SandCastle from './_components/SandCastle';
import Sponsors from './_components/Sponsors/Sponsors';
import styles from './page.module.scss';
import FAQ from './_components/FAQ/FAQ';
import Underwater from '../_components/Underwater/Underwater';

export default function Home() {
  return (
    <div className={styles.container} id="home">
      {/* Intro Section */}
      {/* <p className="invisible font-metropolis text-4xl font-bold">
        Halo! Welcome to the HackDavis template repo :D
      </p>
      <p className="font-montserrat text-4xl font-bold">
        Halo! Welcome to the HackDavis template repo :D
      </p>
      <p className="font-inter text-4xl font-bold">
        Halo! Welcome to the HackDavis template repo :D
      </p>
      <p className="font-jakarta text-4xl font-bold">
        Halo! Welcome to the HackDavis template repo :D
      </p> */}
      <HeroSection />
      <div className="flex flex-col items-center justify-center">
        <SandCastle />
      </div>

      {/* Sections for Testing */}
      <div
        id="about"
        className="flex h-[800px] w-full items-center justify-center bg-gray-100"
      >
        <h2 className="text-3xl font-bold">About Section</h2>
      </div>

      <div
      // id="faq"
      // className="h-[800px] w-full flex items-center justify-center bg-gray-200"
      >
        {/* <h2 className="text-3xl font-bold">FAQ Section</h2> */}
        <Underwater />
        <FAQ />
      </div>

      <div id="sponsors">
        <Sponsors />
      </div>
    </div>
  );
}
