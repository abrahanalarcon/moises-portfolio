// src/components/Navbar/Navbar.jsx
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#hero', label: 'INICIO' },
  { href: '#experience', label: 'EXPERIENCIA' },
  { href: '#projects', label: 'PROYECTOS' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#contact', label: 'CONTACTO' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoIcon}>⚙</span>
          <div className={styles.logoText}>
            <span className={styles.logoName}>MOISES ALARCON</span>
            <span className={styles.logoSub}>IT/OT ENGINEER</span>
          </div>
        </a>

        {/* Status indicator */}
        <div className={styles.statusBar}>
          <span className={styles.statusDot}></span>
          <span className={styles.statusText}>SYS_ONLINE</span>
        </div>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.link}
                onClick={() => setActive(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
