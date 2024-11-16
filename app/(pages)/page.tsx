import Landing from './(index-page)/_components/Landing/Landing'

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr] items-center justify-items-center pb-20 gap-16">
      <div id='landing'>
        <Landing />
      </div>
      <p className="text-4xl font-bold font-montserrat">Halo! Welcome to the HackDavis template repo :D</p>
      <p className="text-4xl font-bold font-inter">Halo! Welcome to the HackDavis template repo :D</p>
    </div>
  );
}
