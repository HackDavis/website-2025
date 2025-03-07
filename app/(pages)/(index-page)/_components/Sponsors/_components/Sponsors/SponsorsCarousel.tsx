import Logo from '../Marquee/Logo';
import Marquee from '../Marquee/Marquee';
import styles from './SponsorsCarousel.module.scss';

// Row 1: tier 1 sponsors
import csDepartment from 'public/index/Sponsors/cs.png';
import asucd from 'public/index/Sponsors/asucd.png';
// import anthropic from 'public/index/Sponsors/anthropic.png';
import ucDavis from 'public/index/Sponsors/ucDavis.png';

// Row 2: tier 2 sponsors
// import pepsi from 'public/index/Sponsors/pepsi.png';
// import cfc from 'public/index/Sponsors/cfc.jpg';
// import ucdLS from 'public/index/Sponsors/ls.png';
import datalab from 'public/index/Sponsors/datalab.png';
import cerebras from 'public/index/Sponsors/cerebras.png';
import msba from 'public/index/Sponsors/MSBA.png';

// Row 3: IPO Sponsors
import govops from 'public/index/Sponsors/IPOs/govops.png';
import yolonami from 'public/index/Sponsors/IPOs/yoloNAMI.png';

export default function SponsorsCarousel() {
  return (
    <div className={styles.container}>
      <Marquee iterations={2} duration={50}>
        <Logo
          imgSrc={ucDavis}
          url="https://www.ucdavis.edu"
          alt="UC Davis Logo"
        />
        <Logo
          imgSrc={csDepartment}
          url="https://cs.ucdavis.edu/"
          alt="UC Davis Computer Science Department Logo"
        />
        <Logo
          imgSrc={asucd}
          url="https://asucd.ucdavis.edu/"
          alt="ASUCD Logo"
        />
        {/*         <Logo
          imgSrc={anthropic}
          url="https://www.anthropic.com/"
          alt="Anthropic Logo"
        /> */}
      </Marquee>

      <Marquee iterations={2} reverse duration={50}>
        {/* <Logo imgSrc={pepsi} url="https://www.pepsi.com/" alt="Pepsi Logo" /> */}
        <Logo
          imgSrc={datalab}
          url="https://datalab.ucdavis.edu/"
          alt="Datalab Logo"
        />
        <Logo
          imgSrc={msba}
          url="https://gsm.ucdavis.edu/master-science-business-analytics-msba"
          alt="MSBA Logo"
        />
        {/* <Logo
          imgSrc={cfc}
          url="https://csi.ucdavis.edu/cfc/"
          alt="Club Financial Council Logo"
        />
        <Logo
          imgSrc={ucdLS}
          url="https://lettersandscience.ucdavis.edu/"
          alt="UC Davis College of Letters & Science Logo"
        /> */}
        <Logo
          imgSrc={cerebras}
          url="https://cerebras.ai/"
          alt="Cerebras Logo"
        />
      </Marquee>

      <Marquee iterations={2} duration={50}>
        <Logo
          imgSrc={govops}
          url="https://www.govops.ca.gov/"
          alt="California Government Operations Agency Logo"
        />
        <Logo
          imgSrc={yolonami}
          url="https://namiyolo.org/"
          alt="NAMI Yolo Country Logo"
        />
      </Marquee>
    </div>
  );
}
