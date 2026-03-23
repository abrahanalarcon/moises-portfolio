// src/components/Projects/Projects.jsx
import { useState } from 'react';
import styles from './Projects.module.css';
import { projectsData, projectCategories } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { FaGithub, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';

const STATUS_MAP = {
  LIVE: { label: 'LIVE', color: '#22c55e' },
  DEPLOYED: { label: 'DEPLOYED', color: '#00b4d8' },
  BUILD: { label: 'BUILD', color: '#f59e0b' },
  IN_PROGRESS: { label: 'IN PROGRESS', color: '#8b5cf6' },
};

function ProjectCard({ project, index }) {
  const ref = useScrollReveal();
  const status = STATUS_MAP[project.status] || STATUS_MAP.BUILD;

  return (
    <div
      ref={ref}
      className={`${styles.card} fade-up`}
      style={{ '--delay': `${index * 0.1}s`, '--card-color': project.color }}
    >
      {/* Corner decorations */}
      <span className={`${styles.corner} ${styles.tl}`}></span>
      <span className={`${styles.corner} ${styles.tr}`}></span>
      <span className={`${styles.corner} ${styles.bl}`}></span>
      <span className={`${styles.corner} ${styles.br}`}></span>

      {/* Header */}
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{project.icon}</span>
        <div className={styles.cardStatus} style={{ color: status.color, borderColor: `${status.color}33`, background: `${status.color}11` }}>
          <span className={styles.statusPip} style={{ background: status.color }}></span>
          {status.label}
        </div>
      </div>

      {/* Content */}
      <div className={styles.cardBody}>
        <p className={styles.cardCategory}>{project.category.toUpperCase()}</p>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardSubtitle}>{project.subtitle}</p>
        <p className={styles.cardDesc}>{project.description}</p>
      </div>

      {/* Tags */}
      <div className={styles.cardTags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag} style={{ '--tag-color': project.color }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className={styles.cardLinks}>
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
            <FaGithub /> CODE
          </a>
        )}
        {project.links.live && (
          <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.linkBtnPrimary}`} style={{ '--btn-color': project.color }}>
            <FaExternalLinkAlt /> LIVE
          </a>
        )}
        {project.links.docs && (
          <a href={project.links.docs} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.linkBtnPrimary}`} style={{ '--btn-color': project.color }}>
            <FaFileAlt /> DOCS
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const headerRef = useScrollReveal();

  const filtered = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className={`section ${styles.projectsSection}`} id="projects">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="section-header fade-up">
          <div className="section-tag">REPOSITORIOS</div>
          <h2 className="section-title">
            Proyectos &amp; <span>Sistemas</span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className={styles.filters}>
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className={styles.countLabel}>
          <span className={styles.mono}>// {filtered.length} sistemas encontrados</span>
        </p>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={styles.githubCta}>
          <p className={styles.ctaText}>Más proyectos en GitHub</p>
          <a
            href="https://github.com/abrahanalarcon"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            <FaGithub />
            <span>VER TODOS LOS REPOS</span>
          </a>
        </div>
      </div>
    </section>
  );
}
