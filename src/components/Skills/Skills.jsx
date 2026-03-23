// src/components/Skills/Skills.jsx
import { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';
import { skillsData, certifications } from '../../data/skills';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function SkillBar({ name, level, color, visible }) {
  return (
    <div className={styles.skillRow}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel} style={{ color }}>{level}%</span>
      </div>
      <div className={styles.barTrack}>
        <div
          className={styles.barFill}
          style={{
            width: visible ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: visible ? `0 0 10px ${color}55` : 'none',
          }}
        />
        {[25, 50, 75].map((tick) => (
          <div key={tick} className={styles.tick} style={{ left: `${tick}%` }} />
        ))}
      </div>
    </div>
  );
}

function SkillGroup({ group, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already in viewport on mount?
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={styles.group}
      style={{
        '--group-color': group.color,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
      }}
    >
      <div className={styles.groupHeader}>
        <span className={styles.groupIcon}>{group.icon}</span>
        <h3 className={styles.groupTitle}>{group.category}</h3>
        <div className={styles.groupLine} />
      </div>

      <div className={styles.skillList}>
        {group.items.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={group.color}
            visible={visible}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useScrollReveal();
  const certsRef = useScrollReveal();

  return (
    <section className={`section ${styles.skillsSection}`} id="skills">
      <div className="container">
        <div ref={headerRef} className="section-header fade-up">
          <div className="section-tag">COMPETENCIAS</div>
          <h2 className="section-title">
            Skills &amp; <span>Certificaciones</span>
          </h2>
        </div>

        <div className={styles.skillsGrid}>
          {skillsData.map((group, i) => (
            <SkillGroup key={group.category} group={group} index={i} />
          ))}
        </div>

        <div ref={certsRef} className={`${styles.certsSection} fade-up`}>
          <h3 className={styles.certsTitle}>
            <span className={styles.mono}>// </span>Certificaciones &amp; Diplomados
          </h3>
          <div className={styles.certsGrid}>
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className={styles.certCard}
                style={{ '--cert-color': cert.color }}
              >
                <div className={styles.certDot} style={{ background: cert.color }} />
                <div>
                  <p className={styles.certName}>{cert.name}</p>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.badgeRow}>
          {['SCADA','DCS','PLC','HMI','Modbus','Profibus','OPC-UA','Cisco','React','C#','.NET','SQL','CCNA','SAP','Scrum'].map((b) => (
            <span key={b} className={styles.badge}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
