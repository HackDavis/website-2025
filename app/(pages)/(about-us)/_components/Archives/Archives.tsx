import styles from './Archives.module.scss';
import CarouselContextProvider from '@pages/(about-us)/_contexts/CarouselContext';
import CarouselArrows from './CarouselArrows';
import CarouselWindow from './CarouselWindow';
import CarouselProgress from './CarouselProgress';
import Archive from './Archive';

import package2017 from '@public/about-us/archives/2017-packaging.png';
import vinyl2017 from '@public/about-us/archives/2017-vinyl.png';
import package2018 from '@public/about-us/archives/2018-packaging.png';
import vinyl2018 from '@public/about-us/archives/2018-vinyl.png';
import package2019 from '@public/about-us/archives/2019-packaging.png';
import vinyl2019 from '@public/about-us/archives/2019-vinyl.png';
import package2020 from '@public/about-us/archives/2020-packaging.png';
import vinyl2020 from '@public/about-us/archives/2020-vinyl.png';
import package2021 from '@public/about-us/archives/2021-packaging.png';
import vinyl2021 from '@public/about-us/archives/2021-vinyl.png';
import package2022 from '@public/about-us/archives/2022-packaging.png';
import vinyl2022 from '@public/about-us/archives/2022-vinyl.png';
import package2023 from '@public/about-us/archives/2023-packaging.png';
import vinyl2023 from '@public/about-us/archives/2023-vinyl.png';
import package2024 from '@public/about-us/archives/2024-packaging.png';
import vinyl2024 from '@public/about-us/archives/2024-vinyl.png';

const archives = [
  {
    year: 2017,
    packageSrc: package2017,
    vinylSrc: vinyl2017,
    alt: 'Vinyl record representing 2017 HackDavis hackathon',
  },
  {
    year: 2018,
    packageSrc: package2018,
    vinylSrc: vinyl2018,
    alt: 'Vinyl record representing 2018 HackDavis hackathon',
  },
  {
    year: 2019,
    packageSrc: package2019,
    vinylSrc: vinyl2019,
    alt: 'Vinyl record representing 2019 HackDavis hackathon',
  },
  {
    year: 2020,
    packageSrc: package2020,
    vinylSrc: vinyl2020,
    alt: 'Vinyl record representing 2020 HackDavis hackathon',
  },
  {
    year: 2021,
    packageSrc: package2021,
    vinylSrc: vinyl2021,
    alt: 'Vinyl record representing 2021 HackDavis hackathon',
  },
  {
    year: 2022,
    packageSrc: package2022,
    vinylSrc: vinyl2022,
    alt: 'Vinyl record representing 2022 HackDavis hackathon',
  },
  {
    year: 2023,
    packageSrc: package2023,
    vinylSrc: vinyl2023,
    alt: 'Vinyl record representing 2023 HackDavis hackathon',
  },
  {
    year: 2024,
    packageSrc: package2024,
    vinylSrc: vinyl2024,
    alt: 'Vinyl record representing 2024 HackDavis hackathon',
  },
];

export default function Archives() {
  return (
    <CarouselContextProvider>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>From the archive</h2>
          <CarouselArrows />
        </div>
        <CarouselWindow>
          {archives.toReversed().map(({ year, packageSrc, vinylSrc, alt }) => (
            <Archive
              key={year}
              packageSrc={packageSrc}
              vinylSrc={vinylSrc}
              alt={alt}
            />
          ))}
        </CarouselWindow>
        <div className={styles.progress_container}>
          <CarouselProgress />
        </div>
      </div>
    </CarouselContextProvider>
  );
}
