import { useEffect, useState } from 'react';
import { version } from '../package.json';
import Lottie from 'lottie-react';
import pulseAnimation from './animations/pulse.json';
import CompanyStrip from './components/CompanyStrip.jsx';
import GalleryStrip from './components/GalleryStrip.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import SkillBadge from './components/SkillBadge.jsx';
import useScrollReveal from './hooks/useScrollReveal.jsx';
import useScrollParallax from './hooks/useScrollParallax.jsx';

const projects = [
  {
    title: 'Automatización de reportes financieros',
    description:
      'Implementé un pipeline con Supabase + scripts en Node.js para generar dashboards automáticos y notificaciones de desviación de presupuesto.',
    tags: ['Supabase', 'Node.js', 'Power BI', 'SIIGO'],
  },
  {
    title: 'Optimización tributaria con IA',
    description:
      'Desarrollé un asistente basado en IA para detectar oportunidades de deducción y simular escenarios fiscales, reduciendo horas de análisis manual en un 60%.',
    tags: ['IA', 'Excel', 'NIIF', 'Simulaciones'],
  },
  {
    title: 'Facturación electrónica y cumplimiento',
    description:
      'Estandaricé procesos de facturación electrónica usando Nubox/GuruSoft y diseñé flujos de auditoría que facilitan la generación de informes regulatorios.',
    tags: ['Nubox', 'GuruSoft', 'RPA', 'Compliance'],
  },
];

const skills = [
  'Contabilidad financiera',
  'NIIF / NIC',
  'Análisis de datos',
  'Power BI / Excel',
  'Automatización (RPA & IA)',
  'Facturación electrónica',
  'SQL / Supabase',
  'Visualización de datos',
];

export default function App() {
  const [theme, setTheme] = useState('dark');
  const heroRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const galleryRef = useScrollReveal();
  const skillsRef = useScrollReveal();
  const contactRef = useScrollReveal();

  useScrollParallax();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#hero">
          Keiver&nbsp;Quevedo
        </a>
        <nav className="nav">
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <button className="btn-ghost" onClick={toggleTheme} aria-label="Alternar tema">
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </header>

      <main>
        <section className="hero reveal" id="hero" ref={heroRef}>
          <div className="hero__content">
            <div className="hero__text">
              <p className="label">Contador & Asesor Financiero</p>
              <h1 className="title">
                Keiver<span className="accent"> Quevedo</span>
              </h1>
              <p className="subtitle">
                Transformo datos en decisiones estratégicas: automatización con IA, dashboards financieros y cumplimiento
                tributario en la nube.
              </p>
              <div className="hero__actions">
                <a className="btn btn-primary" href="#contacto">
                  Hablemos
                </a>
                <a className="btn btn-outline" href="#proyectos">
                  Ver casos
                </a>
              </div>
            </div>

            <div className="hero__media" aria-label="Foto de Keiver Quevedo">
              <div className="hero__lottie" aria-hidden="true">
                <Lottie animationData={pulseAnimation} loop={true} autoplay={true} />
              </div>
              <div className="avatar">
                <img src="/avatar.svg" alt="Avatar de Keiver Quevedo" loading="lazy" />
                <div className="avatar__glow"></div>
              </div>
              <div className="stat">
                <span className="stat__value">+10</span>
                <span className="stat__label">Años de experiencia</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal" id="proyectos" ref={projectsRef}>
          <header className="section__header">
            <h2>Casos de estudio</h2>
            <p>
              Proyectos que combinan contabilidad, datos y automatización para entregar resultados medibles y escalables.
            </p>
          </header>
          <div className="card-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="section reveal" id="galeria" ref={galleryRef}>
          <header className="section__header">
            <h2>Galería de referencia</h2>
            <p>
              Imágenes de proyectos y experiencias (uso de recursos libres como referencia visual).
            </p>
          </header>
          <GalleryStrip />
        </section>

        <section className="section section--split reveal" id="habilidades" ref={skillsRef}>
          <div className="section__left">
            <h2>Habilidades clave</h2>
            <p className="section__lead">
              Herramientas, metodologías y experiencia que utilizo para generar impacto en cada proyecto.
            </p>
            <div className="skill-grid">
              {skills.map((skill) => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </div>
          <div className="section__right">
            <div className="card card--elevated">
              <h3>Enfoque</h3>
              <ul>
                <li>Automatización de reportes y procesos contables</li>
                <li>Modelado y visualización de datos (Power BI, Excel avanzado)</li>
                <li>Opinión técnica en cumplimiento tributario</li>
                <li>Integración con plataformas en la nube (Supabase, Nubox, GuruSoft)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--brand-strip">
          <header className="section__header">
            <h2>Empresas y clientes</h2>
            <p>Algunos de los equipos y empresas con los que he trabajado.</p>
          </header>
          <CompanyStrip />
        </section>

        <section className="section reveal" id="contacto" ref={contactRef}>
          <header className="section__header">
            <h2>Contáctame</h2>
            <p>¿Tienes un proyecto o quieres explorar oportunidades? Escríbeme y armamos un plan.</p>
          </header>
          <div className="contact-grid">
            <form
              className="form"
              onSubmit={(event) => {
                event.preventDefault();
                alert('Gracias por tu mensaje. Reemplaza este handler con tu integración de correo o Supabase.');
              }}
            >
              <label className="form__label">
                Nombre
                <input className="form__input" type="text" name="name" placeholder="Tu nombre" required />
              </label>
              <label className="form__label">
                Email
                <input className="form__input" type="email" name="email" placeholder="tu@correo.com" required />
              </label>
              <label className="form__label">
                Mensaje
                <textarea className="form__input" name="message" placeholder="¿En qué te puedo ayudar?" rows="5" required />
              </label>
              <button className="btn btn-primary" type="submit">
                Enviar mensaje
              </button>
            </form>
            <div className="contact__aside">
              <div className="card card--elevated">
                <h3>Contacto directo</h3>
                <p>
                  <strong>Email:</strong> <a href="mailto:contacto@keiverquevedo.com">contacto@keiverquevedo.com</a>
                </p>
                <p>
                  <strong>LinkedIn:</strong>{' '}
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    linkedin.com/in/keiverquevedo
                  </a>
                </p>
                <p>
                  <strong>GitHub:</strong>{' '}
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    github.com/keiverquevedo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer__info">
            <div className="footer__avatar">
              <img src="/avatar.svg" alt="Avatar de Keiver Quevedo" loading="lazy" />
            </div>
            <div>
              <p className="footer__name">Henry Parra .JF</p>
              <p className="footer__meta">
          Full Stack Developer • versión <span className="footer__version">{version}</span>
              </p>
            </div>
          </div>

        </footer>
      </main>
    </div>
  );
}
