// src/components/About/About.jsx
import { useRef, useState, useEffect } from 'react';
import styles from './About.module.css';
import { aboutData } from '../../data/about';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function About() {
  const headerRef  = useScrollReveal();
  const textRef    = useScrollReveal();
  const trackRef   = useRef(null);
  const [active, setActive]   = useState(0);
  const [paused, setPaused]   = useState(false);

  const { tag, title, titleAccent, description, stats, photos } = aboutData;

  /* ── autoplay ── */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % photos.length);
    }, 4500);
    return () => clearInterval(id);
  }, [paused, photos.length]);

  /* ── sync scroll to active ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[active];
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
  }, [active]);

  const prev = () => setActive((p) => Math.max(p - 1, 0));
  const next = () => setActive((p) => Math.min(p + 1, photos.length - 1));

  return (
    <section className={styles.aboutSection} id="about">

      {/* ── Header ── */}
      <div className="container">
        <div ref={headerRef} className="section-header fade-up">
          <div className="section-tag">{tag}</div>
          <h2 className="section-title">
            {title} <span>{titleAccent}</span>
          </h2>
        </div>
      </div>

      {/* ── Full-width slider ── */}
      <div
        className={styles.sliderWrap}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Track */}
        <div ref={trackRef} className={styles.track}>
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${styles.slide} ${i === active ? styles.slideActive : ''}`}
              onClick={() => setActive(i)}
            >
              <img src={photo.src} alt={photo.caption} draggable={false} />

              {/* Dark overlay */}
              <div className={styles.overlay} />

              {/* Top HUD bar */}
              <div className={styles.hudTop}>
                <div className={styles.hudLeft}>
                  <span className={styles.recDot} />
                  <span className={styles.recLabel}>CAM_{String(i + 1).padStart(2, '0')}</span>
                </div>
                <span className={styles.hudCounter}>
                  {String(i + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
                </span>
              </div>

              {/* Bottom — stats + caption */}
              <div className={styles.slideBottom}>
                {/* Stats row */}
                <div className={styles.statsRow}>
                  {stats.map((s, idx) => (
                    <div key={idx} className={styles.statBox}>
                      <span className={styles.statVal}>{s.value}</span>
                      <span className={styles.statLbl}>{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Caption */}
                <div className={styles.captionBar}>
                  <span className={styles.captionIcon}>📍</span>
                  <span className={styles.captionText}>{photo.caption}</span>
                </div>
              </div>

              {/* Corner decorations */}
              <span className={`${styles.corner} ${styles.tl}`} />
              <span className={`${styles.corner} ${styles.tr}`} />
              <span className={`${styles.corner} ${styles.bl}`} />
              <span className={`${styles.corner} ${styles.br}`} />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          className={`${styles.arrow} ${styles.arrowL}`}
          onClick={prev}
          disabled={active === 0}
          aria-label="Anterior"
        >‹</button>
        <button
          className={`${styles.arrow} ${styles.arrowR}`}
          onClick={next}
          disabled={active === photos.length - 1}
          aria-label="Siguiente"
        >›</button>

        {/* Progress bar */}
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${((active + 1) / photos.length) * 100}%` }}
          />
        </div>
      </div>

      {/* ── Dots ── */}
      <div className={styles.dots}>
        {photos.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Text + CTA ── */}
      <div ref={textRef} className={`${styles.textSection} fade-up`}>
        <div className="container">
          <div className={styles.textGrid}>
            <div className={styles.textBlock}>
              <span className={styles.textTag}>// PERFIL</span>
              <p className={styles.textDesc}>{description}</p>
            </div>
            <div className={styles.ctaBlock}>
              <a href="#contact" className={styles.cta}>
                <span>CONTACTAR</span>
                <span className={styles.ctaArrow}>→</span>
              </a>
              <a href="#experience" className={styles.ctaSecondary}>
                VER EXPERIENCIA
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
