'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { MouseEvent, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

import Banner from '/public/Navbar/mlh-banner-2025.svg';

import styles from './Navbar.module.scss';

const NAVBAR_SHOW_THRESHOLD = 200;

interface NavLink {
  body: React.ReactNode;
  page: string;
  path: string;
  id: string;
  color: string;
}

const links = [
  {
    body: 'HOME',
    page: '/',
    path: '/',
    id: 'home',
    color: '#005271',
  },
  {
    body: 'ABOUT',
    page: '/',
    path: '/?section=about',
    id: 'about',
    color: '#FFC53D',
  },
  {
    body: 'FAQ',
    page: '/',
    path: '/?section=faq',
    id: 'faq',
    color: '#AFD157',
  },
  {
    body: 'SPONSORS',
    page: '/',
    path: '/?section=sponsors',
    id: 'sponsors',
    color: '#FFF',
  },
] as NavLink[];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get('section');
  const [activeSection, setActiveSection] = useState(section || 'home');
  const [showNavbar, setShowNavbar] = useState(true);

  const currScroll = useRef(0);

  useEffect(() => {
    const updateActiveSection = () => {
      const currScroll = window.scrollY + window.innerHeight * 0.3;
      const pageLinks = links.filter((link) => link.page === pathname);
      const sections = pageLinks
        .map((link) => {
          const sectionContainer = document.getElementById(link.id);
          if (!sectionContainer) {
            return { id: '', sectionStart: 0, sectionEnd: 0 };
          }
          const { offsetTop, offsetHeight } = sectionContainer;
          return {
            id: link.id,
            sectionStart: offsetTop,
            sectionEnd: offsetTop + offsetHeight,
          };
        })
        .sort((a, b) => a.sectionStart - b.sectionStart);

      let i = sections.length - 1;
      for (i; i >= 0; i--) {
        if (currScroll >= sections[i].sectionStart) {
          break;
        }
      }

      setActiveSection(
        currScroll > sections[i].sectionEnd ? '' : sections[i].id
      );
    };

    const updateNavbarVisibility = () => {
      const scroll = window.scrollY;
      const delta = scroll - currScroll.current;
      currScroll.current = scroll;

      if (scroll > NAVBAR_SHOW_THRESHOLD) {
        setShowNavbar(delta < 0);
      } else {
        setShowNavbar(true);
      }
    };

    const handleScroll = () => {
      updateActiveSection();
      updateNavbarVisibility();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const sectionContainer = document.getElementById(section as string);
    if (sectionContainer) {
      sectionContainer.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section]);

  const getClickHandler = (path: string) => {
    return (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      router.push(path, { scroll: false });
    };
  };

  return (
    <div
      className={`${styles.container} ${showNavbar ? styles.visible : null}`}
    >
      <div className={styles.left}>
        <Logo
          fill={`${links.find((link) => activeSection === link.id)?.color ?? '#005271'}`}
          width="50px"
          height="50px"
        />
      </div>
      <div className={styles.right}>
        <div
          className={`${styles.links} ${activeSection === 'home' ? styles.home_links : null}`}
        >
          {links.map((link) => (
            <Link
              className={`${styles.link} ${styles[link.id]} ${activeSection === link.id ? styles.active : null}`}
              key={link.path}
              href={link.path}
              onClick={getClickHandler(link.path)}
            >
              {link.body}
            </Link>
          ))}
        </div>
        <div className={styles.mlh_banner}>
          <Image src={Banner} alt="mlh 2025 banner" height={150} />
        </div>
      </div>
    </div>
  );
}
