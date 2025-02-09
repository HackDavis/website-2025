import Hero from './_components/Hero/background';
import Values from './_components/Values/Values';
import OurTeam from './_components/OurTeam/OurTeam';
import Archives from './_components/Archives/Archives';
import CelebrateWrapper from './_components/CelebrateWrapper/CelebrateWrapper';
import Recap from './_components/Recap/Recap';
import CloudBackground from './_components/CloudBackground/CloudBackground';
export default function AboutUs() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Values />
      <OurTeam />
      <CloudBackground>
        <CelebrateWrapper>
          <Recap />
          <Archives />
        </CelebrateWrapper>
      </CloudBackground>
    </div>
  );
}
