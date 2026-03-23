// src/components/Contact/Contact.jsx
import { useState } from 'react';
import styles from './Contact.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const CONTACT_ITEMS = [
  {
    icon: <FaEnvelope />,
    label: 'EMAIL',
    value: 'moiseshazim@gmail.com',
    href: 'mailto:moiseshazim@gmail.com',
    color: '#00b4d8',
  },
  {
    icon: <FaPhone />,
    label: 'TELÉFONO',
    value: '849-517-8829',
    href: 'tel:8495178829',
    color: '#22c55e',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'UBICACIÓN',
    value: 'Santo Domingo, RD',
    href: null,
    color: '#f59e0b',
  },
  {
    icon: <FaGithub />,
    label: 'GITHUB',
    value: 'github.com/abrahanalarcon',
    href: 'https://github.com/abrahanalarcon',
    color: '#8b5cf6',
  },
  {
    icon: <FaLinkedin />,
    label: 'LINKEDIN',
    value: 'in/moisesalarcon',
    href: 'https://www.linkedin.com/in/moisesalarcon/',
    color: '#00b4d8',
  },
];

export default function Contact() {
  const headerRef = useScrollReveal();
  const formRef = useScrollReveal();
  const infoRef = useScrollReveal();

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link with form values
    const subject = encodeURIComponent(form.subject || 'Contacto desde portafolio');
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    );
    window.location.href = `mailto:moiseshazim@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className={`section ${styles.contactSection}`} id="contact">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="section-header fade-up">
          <div className="section-tag">COMUNICACIÓN</div>
          <h2 className="section-title">
            Hablemos de <span>tu Proyecto</span>
          </h2>
          <p className={styles.headerSub}>
            ¿Tienes un proyecto de automatización, SCADA o IT/OT? Estoy disponible para colaborar.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Info panel */}
          <div ref={infoRef} className={`${styles.infoPanel} fade-up`}>
            <div className={styles.infoPanelHeader}>
              <span className={styles.panelTag}>// CONTACT INFO</span>
            </div>

            <div className={styles.contactList}>
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className={styles.contactItem} style={{ '--item-color': item.color }}>
                  <div className={styles.contactIcon} style={{ color: item.color, borderColor: `${item.color}33`, background: `${item.color}11` }}>
                    {item.icon}
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={styles.contactValue}>
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles.contactValue}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability widget */}
            <div className={styles.availWidget}>
              <div className={styles.availHeader}>
                <span className={styles.statusDot}></span>
                <span>DISPONIBLE PARA PROYECTOS</span>
              </div>
              <p className={styles.availText}>
                Abierto a oportunidades en SCADA, automatización industrial, IT/OT e ingeniería de sistemas.
              </p>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className={`${styles.formPanel} fade-up`} style={{ '--delay': '0.15s' }}>
            <div className={styles.formHeader}>
              <span className={styles.panelTag}>// SEND MESSAGE</span>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="name">NOMBRE</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">EMAIL</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="subject">ASUNTO</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className={styles.input}
                  placeholder="Proyecto SCADA / Automatización / Otro"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">MENSAJE</label>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={`${styles.submitBtn} ${sent ? styles.sent : ''}`}>
                {sent ? (
                  <>✓ MENSAJE ENVIADO</>
                ) : (
                  <>
                    <span>ENVIAR MENSAJE</span>
                    <span className={styles.btnArrow}>→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
