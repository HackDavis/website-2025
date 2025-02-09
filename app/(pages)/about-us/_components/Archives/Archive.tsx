import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import styles from './Archive.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface ArchiveProps {
  packageSrc: StaticImport;
  vinylSrc: StaticImport;
  alt: string;
  link: string;
}

export default function Archive({
  packageSrc,
  vinylSrc,
  alt,
  link,
}: ArchiveProps) {
  return (
    <Link href={link} target="_blank" className={styles.container}>
      <div className={styles.package_container}>
        <Image src={packageSrc} alt={alt} className={styles.package_src} />
      </div>
      <div className={styles.vinyl_container}>
        <Image src={vinylSrc} alt={alt} className={styles.vinyl_src} />
      </div>
    </Link>
  );
}
