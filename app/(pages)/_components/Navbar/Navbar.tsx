'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';
import Menu from './Menu';
import Exit from './Exit';

import Banner from '/public/Navbar/mlh-banner-2025.svg';

import styles from './Navbar.module.scss';

interface NavLink {
  body: React.ReactNode;
  page: string;
  path: string;
  id: string;
  color: string;
}

interface Section {
  id: string;
  page: string;
  baseColor: string;
  activeColor: string;
  background: string;
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
    body: 'DONATE',
    page: '/',
    path: '/?section=donate',
    id: 'donate',
    color: '#FFC53D',
  },
  {
    body: 'ABOUT',
    page: '/about-us',
    path: '/about-us',
    id: 'about',
    color: '#005271',
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

const sections = [
  {
    id: 'home',
    page: '/',
    baseColor: '#1589BE',
    activeColor: '#005271',
    background: 'rgba(255, 255, 255, 0.50)',
  },
  {
    id: 'donate',
    page: '/',
    baseColor: '#FFFFFF',
    activeColor: '#FFC53D',
    background: 'rgba(136, 136, 136, 0.50)',
  },
  {
    id: 'faq',
    page: '/',
    baseColor: '#FFFFFF',
    activeColor: '#AFD157',
    background: 'rgba(136, 136, 136, 0.50)',
  },
  {
    id: 'sponsors',
    page: '/',
    baseColor: '#FFFFFF',
    activeColor: '#FFFFFF',
    background: 'rgba(136, 136, 136, 0.50)',
  },
  {
    id: 'about',
    page: '/about-us',
    baseColor: '#1589BE',
    activeColor: '#005271',
    background: 'rgba(255, 255, 255, 0.50)',
  },
  {
    id: 'values',
    page: '/about-us',
    baseColor: '#FFFFFF',
    activeColor: '#005271',
    background: 'rgba(136, 136, 136, 0.50)',
  },
  {
    id: 'team',
    page: '/about-us',
    baseColor: '#FFFFFF',
    activeColor: '#005271',
    background: 'rgba(136, 136, 136, 0.50)',
  },
  {
    id: 'recap',
    page: '/about-us',
    baseColor: '#FFFFFF',
    activeColor: '#005271',
    background: 'rgba(136, 136, 136, 0.50)',
  },
] as Section[];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get('section');
  const [activeLink, setActiveLink] = useState(
    section || (pathname === '/' ? 'home' : 'about')
  );
  const [activeSection, setActiveSection] = useState(
    section || (pathname === '/' ? 'home' : 'about')
  );
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const currScroll = window.scrollY + window.innerHeight * 0.2;
      const pageSections = sections
        .filter((section) => section.page === pathname)
        .map((section) => {
          const sectionContainer = document.getElementById(section.id);
          if (!sectionContainer) {
            return { id: '', sectionStart: 0, sectionEnd: 0 };
          }
          const { offsetTop, offsetHeight } = sectionContainer;
          return {
            id: section.id,
            sectionStart: offsetTop,
            sectionEnd: offsetTop + offsetHeight,
          };
        })
        .sort((a, b) => a.sectionStart - b.sectionStart);

      let i = pageSections.length - 1;
      for (i; i >= 0; i--) {
        if (currScroll >= pageSections[i].sectionStart) {
          break;
        }
      }

      if (pathname === '/about-us') {
        setActiveLink('about');
      } else {
        setActiveLink(
          currScroll > pageSections[i].sectionEnd ? '' : pageSections[i].id
        );
      }

      setActiveSection(
        currScroll > pageSections[i].sectionEnd ? '' : pageSections[i].id
      );
    };

    const handleScroll = () => updateActiveSection();

    window.addEventListener('scroll', handleScroll, { passive: true });

    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const currentSection = section || (pathname === '/' ? 'home' : 'about');
    const sectionContainer = document.getElementById(currentSection as string);
    if (sectionContainer) {
      sectionContainer.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section, pathname]);

  const getClickHandler = (path: string) => {
    return (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      router.push(path, { scroll: false });
    };
  };

  const getLogoColor = () => {
    const currentSection = sections.find(
      (section) => activeSection === section.id
    );
    if (!currentSection) return '#005271';

    return currentSection.activeColor;
  };

  const getLinkColor = (link: NavLink) => {
    const currentSection = sections.find(
      (section) => activeSection === section.id
    );
    if (!currentSection) return 'var(--text-medium)';

    if (activeLink === link.id) return currentSection.activeColor;
    return currentSection.baseColor;
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.navigation} ${showNavbar ? styles.visible : null}`}
      >
        <Logo fill={getLogoColor()} width="50px" height="50px" />
        <div
          className={styles.links}
          style={{
            background:
              sections.find((section) => activeSection === section.id)
                ?.background ?? 'var(--text-light)',
          }}
        >
          {links.map((link) => (
            <Link
              className={`${styles.link} ${styles[link.id]} ${activeLink === link.id ? styles.active : null}`}
              style={{
                color: getLinkColor(link),
              }}
              key={link.path}
              href={link.path}
              onClick={getClickHandler(link.path)}
            >
              {link.body}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.mlh_banner}>
          <Image src={Banner} alt="mlh 2025 banner" height={150} />
        </div>
        {showNavbar ? (
          <div className={styles.exit} onClick={() => setShowNavbar(false)}>
            <Exit width="23px" height="23px" />
          </div>
        ) : (
          <div className={styles.menu} onClick={() => setShowNavbar(true)}>
            <Menu width="30px" height="20px" />
          </div>
        )}
      </div>
    </div>
  );
}
