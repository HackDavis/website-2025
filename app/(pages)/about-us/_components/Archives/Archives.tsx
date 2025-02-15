import styles from './Archives.module.scss';
import CarouselContextProvider from '@pages/about-us/_contexts/CarouselContext';
import CarouselArrows from './CarouselArrows';
import CarouselWindow from './CarouselWindow';
import CarouselProgress from './CarouselProgress';
import Archive from './Archive';

import package2017 from '@public/aboutUs/archives/2017-packaging.png';
import vinyl2017 from '@public/aboutUs/archives/2017-vinyl.svg';
import package2018 from '@public/aboutUs/archives/2018-packaging.png';
import vinyl2018 from '@public/aboutUs/archives/2018-vinyl.svg';
import package2019 from '@public/aboutUs/archives/2019-packaging.png';
import vinyl2019 from '@public/aboutUs/archives/2019-vinyl.svg';
import package2020 from '@public/aboutUs/archives/2020-packaging.png';
import vinyl2020 from '@public/aboutUs/archives/2020-vinyl.svg';
import package2021 from '@public/aboutUs/archives/2021-packaging.png';
import vinyl2021 from '@public/aboutUs/archives/2021-vinyl.svg';
import package2022 from '@public/aboutUs/archives/2022-packaging.png';
import vinyl2022 from '@public/aboutUs/archives/2022-vinyl.svg';
import package2023 from '@public/aboutUs/archives/2023-packaging.png';
import vinyl2023 from '@public/aboutUs/archives/2023-vinyl.svg';
import package2024 from '@public/aboutUs/archives/2024-packaging.png';
import vinyl2024 from '@public/aboutUs/archives/2024-vinyl.svg';

const archives = [
  {
    year: 2017,
    packageSrc: package2017,
    vinylSrc: vinyl2017,
    alt: 'Vinyl record representing 2017 HackDavis hackathon',
    link: 'https://2017.hackdavis.io/',
  },
  {
    year: 2018,
    packageSrc: package2018,
    vinylSrc: vinyl2018,
    alt: 'Vinyl record representing 2018 HackDavis hackathon',
    link: 'https://2018.hackdavis.io/',
  },
  {
    year: 2019,
    packageSrc: package2019,
    vinylSrc: vinyl2019,
    alt: 'Vinyl record representing 2019 HackDavis hackathon',
    link: 'https://2019.hackdavis.io/',
  },
  {
    year: 2020,
    packageSrc: package2020,
    vinylSrc: vinyl2020,
    alt: 'Vinyl record representing 2020 HackDavis hackathon',
    link: 'https://2020.hackdavis.io/',
  },
  {
    year: 2021,
    packageSrc: package2021,
    vinylSrc: vinyl2021,
    alt: 'Vinyl record representing 2021 HackDavis hackathon',
    link: 'https://2021.hackdavis.io/',
  },
  {
    year: 2022,
    packageSrc: package2022,
    vinylSrc: vinyl2022,
    alt: 'Vinyl record representing 2022 HackDavis hackathon',
    link: 'https://2022.hackdavis.io/',
  },
  {
    year: 2023,
    packageSrc: package2023,
    vinylSrc: vinyl2023,
    alt: 'Vinyl record representing 2023 HackDavis hackathon',
    link: 'https://2023.hackdavis.io/',
  },
  {
    year: 2024,
    packageSrc: package2024,
    vinylSrc: vinyl2024,
    alt: 'Vinyl record representing 2024 HackDavis hackathon',
    link: 'https://2024.hackdavis.io/',
  },
];

export default function Archives() {
  return (
    <CarouselContextProvider>
      <div className={styles.container}>
        <div className="flex flex-row items-center justify-between px-16">
          <h2 className="font-metropolis text-xl font-bold text-[#123041] sm:text-[2.25rem]">
            From the archive
          </h2>
          <div className={styles.arrow_container}>
            <CarouselArrows />
          </div>
        </div>
        <CarouselWindow>
          {archives
            .toReversed()
            .map(({ year, packageSrc, vinylSrc, alt, link }) => (
              <Archive
                key={year}
                packageSrc={packageSrc}
                vinylSrc={vinylSrc}
                alt={alt}
                link={link}
              />
            ))}
        </CarouselWindow>
        <div className={styles.progress_container}>
          <CarouselProgress />
        </div>
        <div className={styles.arrows_mobile}>
          <CarouselArrows />
        </div>
      </div>
    </CarouselContextProvider>
  );
}
