// import Directors from './(about-us)/_components/Directors/Directors';
import SandCastle from './_components/SandCastle';
import Sponsors from './_components/Sponsors/Sponsors';
import styles from './page.module.scss';
import FAQ from './_components/FAQ/FAQ';
import Donate from '@app/(pages)/_components/Donate/Donate';

export default function Home() {
  return (
    <div>
      <Donate />
      <div className={styles.container} id="home">
      <div className="h-[300px] w-full bg-red-500"></div>
      <div className="flex flex-col items-center justify-center">
        <SandCastle />
      </div>
      </div>

      {/* Sections for Testing */}
      <div
        id="about"
        className="flex h-[1000px] w-full items-center justify-center bg-gray-100"
      >
        <h2 className="text-3xl font-bold">Underwater Section</h2>
      </div>

      <div>
        <FAQ />
      </div>

      <div id="sponsors" className={styles.sponsors}>
        <Sponsors />
      </div>
    </div>
  );
}
