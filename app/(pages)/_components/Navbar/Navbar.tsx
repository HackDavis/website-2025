'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.scss';
import WhiteLogo from '/public/icons/white_logo.svg';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 150); // Apply "scrolled" class after 150px

      const sections = ['about', 'faq', 'sponsors'];
      let newActiveSection = '';

      let closestDistance = Infinity;
      let closestSection = '';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionStart = offsetTop;
          const sectionEnd = offsetTop + offsetHeight;

          // Check if scroll position is within this section's range
          if (scrollPosition >= sectionStart - 100 && scrollPosition < sectionEnd - 100) {
            newActiveSection = section;
          }

          // Calculate distance to section if it's not the active section
          const distance = Math.abs(scrollPosition - (sectionStart + sectionEnd) / 2);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      });

      // If no section is fully in view, highlight the closest one
      setActiveSection(newActiveSection || closestSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.container}>
        <div className={`${styles.content} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.hdIcon}>
                <Image src={WhiteLogo} alt="White HackDavis Logo" />
            </div>
            <div className={styles.navLinks}>
                <p
                onClick={() => scrollToSection('about')}
                className={`${styles.navLink} ${
                    activeSection === 'about' ? styles.active : ''
                }`}
                >
                ABOUT
                </p>
                <p
                onClick={() => scrollToSection('faq')}
                className={`${styles.navLink} ${
                    activeSection === 'faq' ? styles.active : ''
                }`}
                >
                FAQ
                </p>
                <p
                onClick={() => scrollToSection('sponsors')}
                className={`${styles.navLink} ${
                    activeSection === 'sponsors' ? styles.active : ''
                }`}
                >
                SPONSORS
                </p>
            </div>
        </div>
    </div>
    
  );
}
