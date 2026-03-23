// src/components/Footer/Footer.jsx
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Top border sweep */}
      <div className={styles.topLine}></div>

      <div className={styles.container}>
        {/* Logo + tagline */}
        <div className={styles.brand}>
          <span className={styles.brandIcon}>⚙</span>
          <div>
            <p className={styles.brandName}>MOISES ALARCON</p>
            <p className={styles.brandSub}>IT/OT Engineer · SCADA Specialist · RD</p>
          </div>
        </div>

        {/* Status */}
        <div className={styles.status}>
          <span className={styles.statusDot}></span>
          <span className={styles.statusText}>ALL SYSTEMS OPERATIONAL</span>
        </div>

        {/* Social */}
        <div className={styles.social}>
          <a href="https://github.com/abrahanalarcon" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/moisesalarcon/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copy}>
          © {year} Moises Alarcon — Hecho con <FaHeart className={styles.heart} /> en Santo Domingo, RD
        </p>
        <p className={styles.stack}>
          <span className={styles.mono}>React · Vite · CSS Modules</span>
        </p>
      </div>
    </footer>
  );
}
