import Hero from './_components/Hero/background';
import Values from './_components/Values/Values';
import OurTeam from './_components/OurTeam/OurTeam';
import Archives from './_components/Archives/Archives';

export default function AboutUs() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Values />
      <OurTeam />
      <Archives />
    </div>
  );
}
