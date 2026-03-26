// src/components/Experience/ExperienceTimeline.jsx
import { useState, useEffect } from 'react';
import styles from './ExperienceTimeline.module.css';
import { experienceData } from '../../data/experience';
import { useScrollReveal } from '../../hooks/useScrollReveal';

// 👉 ITEM DEL TIMELINE
function TimelineItem({ item, index, onClick, isActive }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${styles.item} ${isActive ? styles.activeItem : ''}`}
      style={{ '--item-color': item.color, '--delay': `${index * 0.1}s` }}
      onClick={onClick}
    >
        
      {/* Línea y dot */}
      <div className={styles.timelineSide}>
        <div
          className={styles.dot}
          style={{
            background: item.color,
            boxShadow: isActive
              ? `0 0 16px ${item.color}`
              : `0 0 8px ${item.color}`
          }}
        />
        <div className={styles.line} />
      </div>

      {/* Contenido */}
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.companyRow}>
              <span
                className={styles.companyAccent}
                style={{ color: item.color }}
              >
                //
              </span>

              <h3 className={styles.company}>{item.company}</h3>

              <span
                className={`${styles.status} ${
                  styles[`status_${item.status}`]
                }`}
              >
                <span className={styles.statusPip} />
                {item.status}
              </span>
            </div>

            <p className={styles.subtitle}>{item.subtitle}</p>

            <h4
              className={styles.role}
              style={{ color: item.color }}
            >
              {item.role}
            </h4>

            <p className={styles.period}>⏱ {item.period}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// 👉 PANEL DERECHO
function DetailPanel({ item }) {
  if (!item) return null;

  return (
    <div className={styles.detailPanelContent}>
      <div className={styles.detailHeader}>
        <h3 style={{ color: item.color }}>{item.company}</h3>

        <span
          className={`${styles.status} ${
            styles[`status_${item.status}`]
          }`}
        >
          <span className={styles.statusPip} />
          {item.status}
        </span>
      </div>

      <p className={styles.subtitle}>{item.subtitle}</p>

      <h4 style={{ color: item.color }}>{item.role}</h4>

      <p className={styles.period}>⏱ {item.period}</p>

      {/* Descripción */}
      <ul className={styles.descList}>
        {item.description.map((d, i) => (
          <li key={i} className={styles.descItem}>
            <span
              className={styles.bullet}
              style={{ color: item.color }}
            >
              ▸
            </span>
            {d}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className={styles.tags}>
        {item.tags.map((tag) => (
          <span
            key={tag}
            className={styles.tag}
            style={{ '--tag-color': item.color }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// 👉 COMPONENTE PRINCIPAL
export default function ExperienceTimeline() {
  const headerRef = useScrollReveal();

  // 🔥 estado global (optimizado)
  const [activeItem, setActiveItem] = useState(() => experienceData[0]);

  useEffect(() => {
    // opcional: driver.js aquí
  }, []);

  return (
    <section
      className={`section ${styles.timelineSection}`}
      id="experience-timeline"
    >
      <div className="container">
        {/* HEADER */}
        <div ref={headerRef} className="section-header fade-up">
          <div className="section-tag">TRAYECTORIA</div>
          <h2 className="section-title">
            Experience <span>Timeline</span>
          </h2>
        </div>

        {/* LAYOUT */}
        <div className={styles.wrapper}>
          
          {/* IZQUIERDA */}
          <div className={styles.timeline}>
            {experienceData.map((item, i) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={i}
                isActive={activeItem.id === item.id}
                onClick={() => setActiveItem(item)}
              />
            ))}
          </div>

          {/* DERECHA */}
          <div id="detail-panel">
            <DetailPanel item={activeItem} />
          </div>

        </div>
      </div>
    </section>
  );
}