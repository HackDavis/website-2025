import Values from '../_components/Values/Values';
import OurTeam from '../_components/OurTeam/OurTeam';

import HeroStats from '../_components/hero/heroStats';
import HeroText from '../_components/hero/heroText';

export default function AboutUs() {
  return (
    <div>
      <HeroText />
      <HeroStats />
      <Values />
      <OurTeam />
    </div>
  );
}
