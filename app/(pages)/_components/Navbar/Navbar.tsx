'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

import Banner from '/public/Navbar/mlh-banner-2025.svg';

import styles from './Navbar.module.scss';

interface NavLink {
  ids: string[];
  body: React.ReactNode;
  page: string;
  path: string;
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
    ids: ['home', 'underwater'],
    body: 'HOME',
    page: '/',
    path: '/?section=home', // remove section if scroll issue fixed
  },
  /*{
    ids: ['donate'],
    body: 'DONATE',
    page: '/',
    path: '/?section=donate',
  },
  {
    ids: ['teams'],
    body: 'TEAMS',
    page: '/',
    path: '/?section=teams',
  },
  // {
  //   ids: ['faq'],
  //   body: 'FAQ',
  //   page: '/',
  //   path: '/?section=faq',
  // },
  {
    ids: ['sponsors'],
    body: 'SPONSORS',
    page: '/',
    path: '/?section=sponsors',
  },*/
  {
    ids: ['about'],
    body: 'ABOUT',
    page: '/about-us',
    path: '/about-us?section=about', // remove section if scroll issue fixed
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
    id: 'underwater',
    page: '/',
    baseColor: '#FFFFFF',
    activeColor: '#FFC53D',
    background: 'rgba(136, 136, 136, 0.50)',
  },
  /*{
    id: 'donate',
    page: '/',
    baseColor: '#FFFFFF',
    activeColor: '#AFD157',
    background: 'rgba(136, 136, 136, 0.50)',
  },
  {
    id: 'teams',
    page: '/',
    baseColor: '#FFFFFF',
    activeColor: '#AFD157',
    background: 'rgba(136, 136, 136, 0.50)',
  },*/
  // {
  //   id: 'faq',
  //   page: '/',
  //   baseColor: '#FFFFFF',
  //   activeColor: '#AFD157',
  //   background: 'rgba(136, 136, 136, 0.50)',
  // },
  /*{
    id: 'sponsors',
    page: '/',
    baseColor: '#FFFFFF',
    activeColor: '#FFFFFF',
    background: 'rgba(136, 136, 136, 0.50)',
  },*/
  {
    id: 'about',
    page: '/about-us',
    baseColor: '#1589BE',
    activeColor: '#005271',
    background: 'rgba(255, 255, 255, 0.50)',
  },
  {
    id: 'about-page',
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
          const { offsetHeight } = sectionContainer;
          const rect = sectionContainer.getBoundingClientRect();
          return {
            id: section.id,
            sectionStart: rect.top + window.scrollY,
            sectionEnd: rect.top + window.scrollY + offsetHeight,
          };
        })
        .sort((a, b) => a.sectionStart - b.sectionStart)
        .filter(
          (section) => section.sectionStart !== 0 || section.sectionEnd !== 0
        );

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
    // const currentSection = section || (pathname === '/' ? 'home' : 'about');
    const currentSection = section;
    const sectionContainer = document.getElementById(currentSection as string);
    if (sectionContainer) {
      sectionContainer.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section, pathname]);

  const getClickHandler = (path: string) => {
    return (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setShowNavbar(false);
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
    if (!currentSection) return 'var(--text-light)';

    if (link.ids.find((id) => activeLink === id))
      return currentSection.activeColor;
    return currentSection.baseColor;
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.navigation} ${showNavbar ? styles.visible : null}`}
      >
        <div className={styles.logo} style={{ color: getLogoColor() }}>
          <Logo height="50" width="50" />
        </div>
        <div
          className={styles.links}
          style={{
            background:
              sections.find((section) => activeSection === section.id)
                ?.background ?? 'rgba(136, 136, 136, 0.50)',
          }}
        >
          {links.map((link) => (
            <Link
              className={`${styles.link} ${link.ids.find((id) => activeLink === id) ? styles.active : null}`}
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
        <div className={styles.menu} onClick={() => setShowNavbar(!showNavbar)}>
          <div
            className={`${showNavbar ? styles.hamburger_active : styles.hamburger}`}
          >
            <span
              className={styles.hamburger_line}
              style={{ backgroundColor: getLogoColor() }}
            ></span>
            <span
              className={styles.hamburger_line}
              style={{ backgroundColor: getLogoColor() }}
            ></span>
            <span
              className={styles.hamburger_line}
              style={{ backgroundColor: getLogoColor() }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
