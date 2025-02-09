import Hero from './_components/Hero/background';
import Values from './_components/Values/Values';
import OurTeam from './_components/OurTeam/OurTeam';
import Recap from './_components/Recap/Recap';

export default function AboutUs() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Values />
      <OurTeam />
      <Recap />
    </div>
  );
}
