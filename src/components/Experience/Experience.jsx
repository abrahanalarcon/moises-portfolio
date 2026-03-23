// src/components/Experience/Experience.jsx
import { useEffect, useRef, useState } from 'react';
import styles from './Experience.module.css';
import { experienceData, educationData } from '../../data/experience';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function ExperienceCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const intervalRef = useRef(null);
  const cardRef = useScrollReveal();

  const startCarousel = () => {
    setHovered(true);
    intervalRef.current = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % item.photos.length);
    }, 900);
  };

  const stopCarousel = () => {
    setHovered(false);
    clearInterval(intervalRef.current);
    setPhotoIndex(0);
  };

  useEffect(() => () => clearInterval(intervalRef.current), []);

  return (
    <div
      ref={cardRef}
      className={`${styles.expCard} fade-up`}
      style={{ '--delay': `${index * 0.12}s`, '--card-color': item.color }}
      onMouseEnter={startCarousel}
      onMouseLeave={stopCarousel}
    >
      {/* Photo carousel on hover */}
      <div className={`${styles.photoOverlay} ${hovered ? styles.photoVisible : ''}`}>
        {item.photos.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${item.company} ${i + 1}`}
            className={`${styles.photo} ${i === photoIndex ? styles.photoActive : ''}`}
            loading="lazy"
          />
        ))}
        <div className={styles.photoDots}>
          {item.photos.map((_, i) => (
            <span key={i} className={`${styles.dot} ${i === photoIndex ? styles.dotActive : ''}`} />
          ))}
        </div>
        <div className={styles.photoOverlayGrad}></div>
      </div>

      {/* Status + type */}
      <div className={styles.cardMeta}>
        <span className={`${styles.status} ${styles[`status_${item.status}`]}`}>
          <span className={styles.statusDot}></span>
          {item.status}
        </span>
        <span className={styles.type}>{item.type}</span>
      </div>

      {/* Content */}
      <div className={styles.cardContent}>
        <div className={styles.companyLine}>
          <span className={styles.companyAccent} style={{ color: item.color }}>//</span>
          <h3 className={styles.company}>{item.company}</h3>
        </div>
        <p className={styles.subtitle}>{item.subtitle}</p>
        <h4 className={styles.role}>{item.role}</h4>
        <p className={styles.period}>
          <span className={styles.mono}>⏱ {item.period}</span>
        </p>

        <ul className={styles.descList}>
          {item.description.map((d, i) => (
            <li key={i} className={styles.descItem}>
              <span className={styles.bullet} style={{ color: item.color }}>▸</span>
              {d}
            </li>
          ))}
        </ul>

        <div className={styles.tags}>
          {item.tags.map((tag) => (
            <span key={tag} className={styles.tag} style={{ '--tag-color': item.color }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function EducationCard({ edu, index }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`${styles.eduCard} fade-up`}
      style={{ '--delay': `${index * 0.1}s`, '--card-color': edu.color }}
    >
      <div className={styles.eduAccent} style={{ background: edu.color }}></div>
      <div>
        <h4 className={styles.eduDegree}>{edu.degree}</h4>
        <p className={styles.eduInstitution}>{edu.institution}</p>
        <p className={styles.eduPeriod}>{edu.period}</p>
        {edu.note && <p className={styles.eduNote}>{edu.note}</p>}
      </div>
    </div>
  );
}

export default function Experience() {
  const headerRef = useScrollReveal();

  return (
    <section className={`section ${styles.experienceSection}`} id="experience">
      <div className="container">
        <div ref={headerRef} className={`section-header fade-up`}>
          <div className="section-tag">TRAYECTORIA</div>
          <h2 className="section-title">
            Experiencia &amp; <span>Educación</span>
          </h2>
          <p className={styles.headerSub}>
            Pasa el cursor sobre cada tarjeta para ver imágenes del trabajo en campo.
          </p>
        </div>

        {/* Experience grid */}
        <div className={styles.expGrid}>
          {experienceData.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Education */}
        <div className={styles.eduSection}>
          <h3 className={styles.eduTitle}>
            <span className={styles.mono}>// </span>Educación
          </h3>
          <div className={styles.eduGrid}>
            {educationData.map((edu, i) => (
              <EducationCard key={edu.id} edu={edu} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
