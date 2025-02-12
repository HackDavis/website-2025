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
      <div id="about">
        <Hero />
      </div>

      <div id="values">
        <Values />
      </div>

      <div id="team">
        <OurTeam />
      </div>

      <div id="recap">
        <CloudBackground>
          <CelebrateWrapper>
            <Recap />
            <Archives />
          </CelebrateWrapper>
        </CloudBackground>
      </div>
    </div>
  );
}
