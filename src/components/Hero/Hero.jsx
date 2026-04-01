// src/components/Hero/Hero.jsx
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const TYPING_LINES = [
  'Instrumentation and control',
  'IT/OT Engineer',
  'SCADA & Industrial Control Systems',
  'Industrial Automation Specialist',
  'Mechatronics Engineer',
];

function TypingText() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_LINES[lineIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setLineIndex((prev) => (prev + 1) % TYPING_LINES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, lineIndex]);

  return (
    <span className={styles.typingText}>
      {displayed}
      <span className={styles.cursor}>|</span>
    </span>
  );
}

// Mini SCADA HUD display — simulates live data
function ScadaHud() {
  const [values, setValues] = useState({ freq: 60.0, volt: 13.8, temp: 42.1, load: 78 });

  useEffect(() => {
    const interval = setInterval(() => {
      setValues({
        freq: (59.97 + Math.random() * 0.06).toFixed(2),
        volt: (13.7 + Math.random() * 0.2).toFixed(1),
        temp: (41.5 + Math.random() * 1.5).toFixed(1),
        load: Math.round(76 + Math.random() * 5),
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.scadaHud}>
      <div className={styles.hudHeader}>
        <span className={styles.statusDot}></span>
        <span>SIMULATION — CONTROL ROOM LIVE</span>
      </div>
      <div className={styles.hudGrid}>
        <div className={styles.hudCell}>
          <span className={styles.hudLabel}>FREQ</span>
          <span className={styles.hudValue}>{values.freq}</span>
          <span className={styles.hudUnit}>Hz</span>
        </div>
        <div className={styles.hudCell}>
          <span className={styles.hudLabel}>VOLTAGE</span>
          <span className={styles.hudValue}>{values.volt}</span>
          <span className={styles.hudUnit}>kV</span>
        </div>
        <div className={styles.hudCell}>
          <span className={styles.hudLabel}>TEMP</span>
          <span className={styles.hudValue}>{values.temp}</span>
          <span className={styles.hudUnit}>°C</span>
        </div>
        <div className={styles.hudCell}>
          <span className={styles.hudLabel}>LOAD</span>
          <span className={`${styles.hudValue} ${styles.loadValue}`}>{values.load}</span>
          <span className={styles.hudUnit}>%</span>
        </div>
      </div>
      <div className={styles.hudBar}>
        <div className={styles.hudBarFill} style={{ width: `${values.load}%` }}></div>
      </div>
      <div className={styles.hudFooter}>
        <span>MODBUS TCP/RTU ● DCS ● WOIS SCADA</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Decorative vertical lines */}
      <div className={styles.vertLine} style={{ left: '10%' }}></div>
      <div className={styles.vertLine} style={{ left: '90%' }}></div>

      <div className={styles.container}>
        {/* Left — main intro */}
        <div className={styles.intro}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <p className={styles.greeting}>
            <span className={styles.mono}>// Hello, it's me!</span>
          </p>

          <h1 className={styles.name}>
            Moises<br />
            <span className={styles.nameAccent}>Alarcon</span>
          </h1>

          <h2 className={styles.role}>
            And I'm a{' '}
            <span className={styles.roleHighlight}>
              <TypingText />
            </span>
          </h2>

          <p className={styles.bio}>
            IT/OT Engineer con más de 5 años de experiencia en entornos industriales.
            Especialista en <strong>SCADA, redes industriales y automatización</strong> de plantas
            de generación eléctrica. Integro tecnología IT con sistemas operacionales (OT)
            para optimizar procesos críticos.
          </p>

          <div className={styles.social}>
            <a href="https://github.com/abrahanalarcon" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/moisesalarcon/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:moiseshazim@gmail.com" className={styles.socialLink} aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="tel:8495178829" className={styles.socialLink} aria-label="Phone">
              <FaPhone />
            </a>
          </div>

          <div className={styles.ctas}>
            <a href="#projects" className={styles.ctaPrimary}>
              <span>VER PROYECTOS</span>
              <span className={styles.ctaArrow}>→</span>
            </a>
            <a href="#contact" className={styles.ctaSecondary}>
              CONTACTAR
            </a>
          </div>
        </div>

        {/* Right — SCADA HUD */}
        <div className={styles.hudWrapper}>
          <ScadaHud />

          {/* Stats */}
          <div className={styles.stats}>
            {[
              { value: '5+', label: 'AÑOS\nEXPERIENCIA' },
              { value: '225', label: 'MW\nSOLAR' },
              { value: '12×', label: 'MOTORES\nWARTSILA' },
              { value: 'CCNA', label: 'CISCO\nCERTIFIED' },
            ].map((s) => (
              <div key={s.value} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
