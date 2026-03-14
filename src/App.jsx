import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import {
  BarChart2,
  FileText,
  LineChart,
  Bot,
  Receipt,
  Cloud,
  Award,
  CheckCircle,
  Search,
  ClipboardList,
  Wrench,
  BarChart,
  Handshake,
  ChevronDown,
  Mail,
  Calendar,
  Clock,
  ArrowRight,
} from 'lucide-react';
import pulseAnimation from './animations/pulse.json';
import CompanyStrip from './components/CompanyStrip.jsx';
import GalleryStrip from './components/GalleryStrip.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import SkillBadge from './components/SkillBadge.jsx';
import useScrollReveal from './hooks/useScrollReveal.jsx';
import useScrollParallax from './hooks/useScrollParallax.jsx';
import { supabase } from './lib/supabase.js';

const version = '1.0.0';

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

const services = [
  {
    icon: BarChart2,
    title: 'Automatización Contable',
    description: 'Diseño pipelines automáticos para reportes financieros, eliminando tareas manuales repetitivas y reduciendo errores hasta un 90%.',
    items: ['Reportes automáticos', 'Dashboards en tiempo real', 'Alertas de desviación', 'Integración con ERP'],
  },
  {
    icon: FileText,
    title: 'Asesoría Tributaria',
    description: 'Optimización fiscal bajo normativa NIIF/NIC, cumplimiento regulatorio y simulación de escenarios para minimizar carga impositiva.',
    items: ['Declaraciones fiscales', 'Cumplimiento NIIF', 'Simulación de escenarios', 'Auditoría preventiva'],
  },
  {
    icon: LineChart,
    title: 'Dashboards Financieros',
    description: 'Visualización de datos financieros en Power BI y Excel avanzado para toma de decisiones estratégicas en tiempo real.',
    items: ['Power BI personalizado', 'KPIs financieros', 'Análisis de tendencias', 'Reportes ejecutivos'],
  },
  {
    icon: Bot,
    title: 'Consultoría con IA',
    description: 'Implementación de asistentes basados en IA para análisis financiero, detección de anomalías y predicción de flujo de caja.',
    items: ['Análisis predictivo', 'Detección de anomalías', 'Asistente financiero IA', 'Automatización RPA'],
  },
  {
    icon: Receipt,
    title: 'Facturación Electrónica',
    description: 'Estandarización e integración de procesos de facturación electrónica con plataformas como Nubox y GuruSoft.',
    items: ['Integración Nubox', 'Flujos de auditoría', 'Compliance regulatorio', 'Capacitación al equipo'],
  },
  {
    icon: Cloud,
    title: 'Contabilidad en la Nube',
    description: 'Migración y gestión de procesos contables a plataformas cloud con Supabase, garantizando acceso seguro y escalable.',
    items: ['Migración a la nube', 'Base de datos Supabase', 'Acceso remoto seguro', 'Respaldo automático'],
  },
];

const testimonials = [
  {
    name: 'María González',
    position: 'Gerente Financiera',
    company: 'TechCorp Solutions',
    text: 'Keiver automatizó nuestros reportes financieros, reduciendo el tiempo de cierre mensual de 40 a 15 horas. Su expertise en Power BI transformó cómo visualizamos nuestros datos.',
    rating: 5,
    date: 'Enero 2025'
  },
  {
    name: 'Carlos Rodríguez',
    position: 'Director de Operaciones',
    company: 'Manufacturas del Norte',
    text: 'La implementación de facturación electrónica con Nubox que Keiver lideró nos permitió reducir errores en un 90% y mejorar nuestro flujo de caja significativamente.',
    rating: 5,
    date: 'Diciembre 2024'
  },
  {
    name: 'Ana Martínez',
    position: 'Contadora General',
    company: 'Servicios Logísticos SA',
    text: 'Gracias a la asesoría de Keiver en cumplimiento NIIF, pasamos nuestra auditoría sin observaciones. Su conocimiento técnico es excepcional.',
    rating: 5,
    date: 'Noviembre 2024'
  },
  {
    name: 'Luis Fernández',
    position: 'CEO',
    company: 'Startup Fintech',
    text: 'El dashboard financiero que Keiver desarrolló con Supabase nos da visibilidad en tiempo real de nuestras métricas clave. Invaluable para la toma de decisiones.',
    rating: 5,
    date: 'Octubre 2024'
  }
];

const stats = [
  { value: 10, suffix: '+', label: 'Años de experiencia' },
  { value: 50, suffix: '+', label: 'Clientes atendidos' },
  { value: 30, suffix: '+', label: 'Proyectos completados' },
  { value: 60, suffix: '%', label: 'Reducción de tiempo promedio' },
];

const process = [
  {
    icon: Search,
    step: '01',
    title: 'Diagnóstico',
    description: 'Analizo los procesos actuales de tu empresa para identificar ineficiencias, riesgos y oportunidades de mejora.',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Planificación',
    description: 'Diseño un plan de acción personalizado con objetivos claros, plazos definidos y métricas de éxito.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Implementación',
    description: 'Ejecuto las soluciones acordadas: automatizaciones, dashboards, integraciones o asesoría tributaria.',
  },
  {
    icon: BarChart,
    step: '04',
    title: 'Seguimiento',
    description: 'Monitoreo los resultados, ajusto lo necesario y entrego reportes de avance para garantizar el impacto.',
  },
  {
    icon: Handshake,
    step: '05',
    title: 'Soporte continuo',
    description: 'Ofrezco acompañamiento post-implementación para resolver dudas, actualizar procesos y escalar soluciones.',
  },
];

const faqs = [
  {
    question: '¿Cuánto tiempo toma implementar una automatización contable?',
    answer: 'Depende de la complejidad del proceso. Un reporte automatizado básico puede estar listo en 1-2 semanas. Proyectos más complejos con integración de múltiples sistemas pueden tomar 4-8 semanas.',
  },
  {
    question: '¿Trabajo con empresas de cualquier tamaño?',
    answer: 'Sí. He trabajado con freelancers, PyMEs y empresas medianas. Las soluciones se adaptan al tamaño y presupuesto de cada cliente.',
  },
  {
    question: '¿Qué plataformas de facturación electrónica manejas?',
    answer: 'Trabajo principalmente con Nubox y GuruSoft, pero también tengo experiencia con SIIGO y otras plataformas de facturación electrónica según la región del cliente.',
  },
  {
    question: '¿Puedo contratar solo asesoría tributaria sin automatización?',
    answer: 'Por supuesto. Cada servicio es independiente. Puedes contratar solo asesoría NIIF, solo dashboards en Power BI, o cualquier combinación que necesites.',
  },
  {
    question: '¿Cómo se manejan los datos confidenciales de mi empresa?',
    answer: 'Trabajo bajo acuerdos de confidencialidad (NDA). Los datos se manejan con cifrado, acceso restringido y se eliminan al finalizar el proyecto si así lo requieres.',
  },
  {
    question: '¿Ofreces soporte después de entregar el proyecto?',
    answer: 'Sí. Incluyo un período de soporte post-entrega y ofrezco planes de mantenimiento mensual para garantizar que las soluciones sigan funcionando correctamente.',
  },
];

const blogPosts = [
  {
    id: 1,
    title: 'Automatización Contable con IA: Guía Completa 2026',
    excerpt: 'Descubre cómo implementar inteligencia artificial en tus procesos contables para reducir errores y ahorrar tiempo. Casos prácticos y herramientas recomendadas.',
    date: '2026-03-10',
    readTime: '8 min',
    category: 'Automatización',
    tags: ['IA', 'Automatización', 'Eficiencia'],
    featured: true,
  },
  {
    id: 2,
    title: 'NIIF 2026: Cambios Clave que Debes Conocer',
    excerpt: 'Análisis detallado de las actualizaciones más importantes en las Normas Internacionales de Información Financiera para este año.',
    date: '2026-03-05',
    readTime: '6 min',
    category: 'Normativa',
    tags: ['NIIF', 'Compliance', 'Regulación'],
    featured: true,
  },
  {
    id: 3,
    title: 'Power BI para Contadores: Dashboard Financiero en 30 Minutos',
    excerpt: 'Tutorial paso a paso para crear tu primer dashboard financiero profesional usando Power BI. Incluye plantilla descargable.',
    date: '2026-02-28',
    readTime: '12 min',
    category: 'Herramientas',
    tags: ['Power BI', 'Dashboards', 'Visualización'],
    featured: false,
  },
  {
    id: 4,
    title: 'Facturación Electrónica: Errores Comunes y Cómo Evitarlos',
    excerpt: 'Los 10 errores más frecuentes en la implementación de facturación electrónica y las mejores prácticas para prevenirlos.',
    date: '2026-02-20',
    readTime: '5 min',
    category: 'Facturación',
    tags: ['Facturación Electrónica', 'Errores', 'Mejores Prácticas'],
    featured: false,
  },
  {
    id: 5,
    title: 'Migración a la Nube: Supabase vs. Otras Alternativas',
    excerpt: 'Comparativa completa de plataformas cloud para contadores. Ventajas, desventajas y casos de uso de cada opción.',
    date: '2026-02-15',
    readTime: '10 min',
    category: 'Tecnología',
    tags: ['Cloud', 'Supabase', 'Migración'],
    featured: false,
  },
  {
    id: 6,
    title: 'Optimización Tributaria: 7 Estrategias Legales para PyMEs',
    excerpt: 'Estrategias probadas para reducir la carga fiscal de pequeñas y medianas empresas dentro del marco legal vigente.',
    date: '2026-02-10',
    readTime: '7 min',
    category: 'Tributaria',
    tags: ['Optimización', 'PyMEs', 'Estrategias'],
    featured: false,
  },
];

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [countersStarted, setCountersStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const statsRef = useScrollReveal();
  const heroRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const galleryRef = useScrollReveal();
  const skillsRef = useScrollReveal();
  const aboutRef = useScrollReveal();
  const processRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const blogRef = useScrollReveal();
  const contactRef = useScrollReveal();

  useScrollParallax();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Cerrar menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const toggleMenu = () => setMenuOpen((o) => !o);
  const closeMenu = () => setMenuOpen(false);

  // Contador animado al hacer scroll
  useEffect(() => {
    if (!statsRef.current || countersStarted) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersStarted(true);
          stats.forEach((stat, i) => {
            const duration = 1800;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[i] = Math.floor(current);
                return next;
              });
            }, duration / steps);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [countersStarted, statsRef]);

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    
    // Verificar si Supabase está configurado
    if (!supabase) {
      alert('⚠️ El sistema de contacto no está disponible temporalmente.\n\nPor favor, escríbeme directamente a:\n📧 keiver30@gmail.com\n📱 WhatsApp: +58 4126722754');
      return;
    }
    
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Validación del mensaje
    if (!message || message.trim().length < 10) {
      alert('El mensaje debe tener al menos 10 caracteres.');
      setIsSubmitting(false);
      return;
    }

    // Validación del nombre
    if (!name || name.trim().length < 2) {
      alert('El nombre debe tener al menos 2 caracteres.');
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: name.trim(),
            email: email.trim(),
            message: message.trim()
          }
        ]);

      if (error) throw error;

      alert('✅ ¡Mensaje enviado con éxito!\n\nTe contactaré pronto a través de:\n📧 keiver30@gmail.com\n📱 WhatsApp: +58 4126722754');
      trackEvent('form_submit', { event_category: 'contact', event_label: 'contact_form' });
      event.target.reset();
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      
      // Mensajes de error más específicos
      if (error.code === '23514') {
        alert('Por favor verifica que:\n- El nombre tenga al menos 2 caracteres\n- El mensaje tenga al menos 10 caracteres');
      } else if (error.code === 'PGRST116') {
        alert('❌ Error de conexión con la base de datos.\n\nPor favor, escríbeme directamente a:\n📧 keiver30@gmail.com\n📱 WhatsApp: +58 4126722754');
      } else {
        alert('❌ Hubo un error al enviar el mensaje.\n\nPor favor, intenta de nuevo o escríbeme directamente a:\n📧 keiver30@gmail.com\n📱 WhatsApp: +58 4126722754');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '584126722754'; // Número sin espacios ni símbolos
  const whatsappMessage = encodeURIComponent('Hola Keiver, me gustaría conversar sobre tus servicios de asesoría contable.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Helper para trackear eventos en GA4
  const trackEvent = (eventName, params = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params);
    }
  };

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();
    
    if (!supabase) {
      alert('⚠️ El sistema de newsletter no está disponible temporalmente.\n\nPor favor, escríbeme directamente a keiver30@gmail.com para recibir tips contables.');
      return;
    }
    
    setIsSubscribing(true);
    const formData = new FormData(event.target);
    const email = formData.get('newsletter-email');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: email.trim() }]);

      if (error) {
        if (error.code === '23505') { // Duplicate key error
          alert('✅ Ya estás suscrito al newsletter.\n\nRecibirás tips contables semanales en tu email.');
        } else {
          throw error;
        }
      } else {
        alert('✅ ¡Suscripción exitosa!\n\nRecibirás tips contables y actualizaciones semanales en tu email.');
        trackEvent('newsletter_subscribe', { event_category: 'engagement', event_label: 'newsletter_form' });
      }
      
      event.target.reset();
    } catch (error) {
      console.error('Error al suscribir:', error);
      alert('❌ Error al suscribirse.\n\nPor favor, escríbeme a keiver30@gmail.com para agregarte manualmente.');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#hero" onClick={closeMenu}>
          Keiver&nbsp;Quevedo
        </a>

        {/* Nav desktop */}
        <nav className="nav nav--desktop">
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="topbar__right">
          <button className="btn-ghost" onClick={toggleTheme} aria-label="Alternar tema">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>

          {/* Botón hamburguesa */}
          <button
            className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Nav móvil desplegable */}
        <nav className={`nav nav--mobile ${menuOpen ? 'nav--mobile-open' : ''}`}>
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
          <a href="#habilidades" onClick={closeMenu}>Habilidades</a>
          <a href="#testimonios" onClick={closeMenu}>Testimonios</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
          <a className="btn btn-primary nav__cta" href="#contacto" onClick={closeMenu}>
            Hablemos
          </a>
        </nav>
      </header>

      {/* Overlay para cerrar menú */}
      {menuOpen && (
        <div className="nav-overlay" onClick={closeMenu} aria-hidden="true" />
      )}

      {/* Botón flotante de WhatsApp */}
      <a
        href={whatsappUrl}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onClick={() => trackEvent('whatsapp_click', { event_category: 'contact', event_label: 'floating_button' })}
      >
        <svg
          className="whatsapp-float__icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="whatsapp-float__text">Escríbeme</span>
      </a>

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

        <section className="section reveal" id="servicios" ref={servicesRef}>
          <header className="section__header">
            <h2>Servicios</h2>
            <p>Soluciones contables y financieras adaptadas a las necesidades de tu empresa.</p>
          </header>
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="service-card">
                  <div className="service-card__icon">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                  <ul className="service-card__list">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="btn btn-outline service-card__cta" href="#contacto">
                    Solicitar servicio
                  </a>
                </div>
              );
            })}
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

        <section className="section reveal section--about" id="sobre-mi" ref={aboutRef}>
          <div className="about__grid">
            <div className="about__image">
              <img src="/avatar.svg" alt="Keiver Quevedo - Contador" loading="lazy" />
            </div>
            <div className="about__content">
              <p className="label">Sobre mí</p>
              <h2>Contador con visión tecnológica</h2>
              <p className="about__lead">
                Soy Keiver Quevedo, Contador Público con más de 10 años de experiencia ayudando a empresas a transformar sus procesos financieros mediante automatización e inteligencia artificial.
              </p>
              <p className="about__text">
                Mi enfoque combina el rigor técnico de la contabilidad tradicional con las herramientas modernas de análisis de datos. He trabajado con empresas de distintos sectores, implementando soluciones que reducen costos operativos y mejoran la toma de decisiones.
              </p>
              <div className="about__stats">
                <div className="about__stat">
                  <span className="about__stat-value">+10</span>
                  <span className="about__stat-label">Años de experiencia</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-value">+50</span>
                  <span className="about__stat-label">Clientes atendidos</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-value">+30</span>
                  <span className="about__stat-label">Proyectos completados</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-value">60%</span>
                  <span className="about__stat-label">Reducción promedio de tiempo</span>
                </div>
              </div>
              <div className="about__certs">
                <h3>Formación y certificaciones</h3>
                <ul>
                  <li><Award size={16} /> Contador Público Colegiado</li>
                  <li><Award size={16} /> Especialista en NIIF / NIC</li>
                  <li><CheckCircle size={16} /> Certificado en Automatización RPA</li>
                  <li><CheckCircle size={16} /> Power BI Data Analyst</li>
                  <li><CheckCircle size={16} /> Supabase &amp; SQL Avanzado</li>
                </ul>
              </div>
              <a className="btn btn-primary" href="#contacto">Trabajemos juntos</a>
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

        {/* ===== ESTADÍSTICAS ANIMADAS ===== */}
        <section className="section section--stats" ref={statsRef}>
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={stat.label} className="stat-counter">
                <span className="stat-counter__value">
                  {counts[i]}{stat.suffix}
                </span>
                <span className="stat-counter__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PROCESO DE TRABAJO ===== */}
        <section className="section reveal" id="proceso" ref={processRef}>
          <header className="section__header">
            <h2>Cómo trabajo</h2>
            <p>Un proceso claro y estructurado para garantizar resultados medibles en cada proyecto.</p>
          </header>
          <div className="process-list">
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="process-item">
                  <div className="process-item__left">
                    <div className="process-item__icon">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    {i < process.length - 1 && <div className="process-item__line" />}
                  </div>
                  <div className="process-item__content">
                    <span className="process-item__step">Paso {step.step}</span>
                    <h3 className="process-item__title">{step.title}</h3>
                    <p className="process-item__desc">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="section reveal" id="faq" ref={faqRef}>
          <header className="section__header">
            <h2>Preguntas frecuentes</h2>
            <p>Respuestas a las dudas más comunes antes de empezar a trabajar juntos.</p>
          </header>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}
              >
                <button
                  className="faq-item__question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className="faq-item__chevron" size={20} />
                </button>
                <div className="faq-item__answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section reveal" id="testimonios">
          <header className="section__header">
            <h2>Lo que dicen mis clientes</h2>
            <p>Testimonios reales de profesionales y empresas que han trabajado conmigo.</p>
          </header>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial__rating">
                  {'★'.repeat(testimonial.rating)}
                  <span className="testimonial__rating-text">{testimonial.rating}/5</span>
                </div>
                <p className="testimonial__text">"{testimonial.text}"</p>
                <div className="testimonial__author">
                  <div>
                    <strong className="testimonial__name">{testimonial.name}</strong>
                    <p className="testimonial__position">{testimonial.position}</p>
                    <p className="testimonial__company">{testimonial.company}</p>
                  </div>
                  <span className="testimonial__date">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== BLOG ===== */}
        <section className="section reveal" id="blog" ref={blogRef}>
          <header className="section__header">
            <h2>Blog contable</h2>
            <p>Artículos, guías y análisis sobre contabilidad moderna, automatización y mejores prácticas del sector.</p>
          </header>
          
          {/* Artículos destacados */}
          <div className="blog__featured">
            <h3 className="blog__section-title">Artículos destacados</h3>
            <div className="blog__featured-grid">
              {blogPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="blog-card blog-card--featured">
                  <div className="blog-card__meta">
                    <span className="blog-card__category">{post.category}</span>
                    <div className="blog-card__date">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="blog-card__read-time">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-card__tag">{tag}</span>
                    ))}
                  </div>
                  <button 
                    className="blog-card__cta"
                    onClick={() => {
                      trackEvent('blog_click', { event_category: 'content', event_label: post.title });
                      alert(`📖 Artículo: "${post.title}"\n\n📧 Para leer el artículo completo, escríbeme a keiver30@gmail.com\n\n💡 También puedes suscribirte al newsletter para recibir todos los artículos directamente en tu email.`);
                    }}
                  >
                    Leer artículo <ArrowRight size={16} />
                  </button>
                </article>
              ))}
            </div>
          </div>

          {/* Más artículos */}
          <div className="blog__more">
            <h3 className="blog__section-title">Más artículos</h3>
            <div className="blog__grid">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-card__meta">
                    <span className="blog-card__category">{post.category}</span>
                    <div className="blog-card__date">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="blog-card__read-time">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h4 className="blog-card__title">{post.title}</h4>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__tags">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="blog-card__tag">{tag}</span>
                    ))}
                  </div>
                  <button 
                    className="blog-card__cta"
                    onClick={() => {
                      trackEvent('blog_click', { event_category: 'content', event_label: post.title });
                      alert(`📖 Artículo: "${post.title}"\n\n📧 Para leer el artículo completo, escríbeme a keiver30@gmail.com\n\n💡 También puedes suscribirte al newsletter para recibir todos los artículos.`);
                    }}
                  >
                    Leer más <ArrowRight size={14} />
                  </button>
                </article>
              ))}
            </div>
          </div>

          {/* CTA del blog */}
          <div className="blog__cta">
            <h3>¿Quieres más contenido como este?</h3>
            <p>Suscríbete al newsletter y recibe artículos exclusivos, guías prácticas y análisis del sector contable.</p>
            <a className="btn btn-primary" href="#newsletter">
              Suscribirme al newsletter
            </a>
          </div>
        </section>

        {/* ===== NEWSLETTER ===== */}
        <section className="section section--newsletter">
          <div className="newsletter">
            <div className="newsletter__content">
              <div className="newsletter__icon">
                <Mail size={32} strokeWidth={1.5} />
              </div>
              <div className="newsletter__text">
                <h2>Tips contables semanales</h2>
                <p>Recibe consejos prácticos sobre automatización, NIIF, optimización tributaria y las últimas tendencias en contabilidad digital.</p>
              </div>
            </div>
            <form className="newsletter__form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                name="newsletter-email"
                placeholder="tu@email.com"
                className="newsletter__input"
                required
              />
              <button
                type="submit"
                className="btn btn-primary newsletter__btn"
                disabled={isSubscribing}
              >
                {isSubscribing ? 'Suscribiendo...' : 'Suscribirme gratis'}
              </button>
            </form>
            <p className="newsletter__disclaimer">
              Sin spam. Cancela cuando quieras. Solo contenido de valor sobre contabilidad moderna.
            </p>
          </div>
        </section>

        <section className="section reveal" id="contacto" ref={contactRef}>
          <header className="section__header">
            <h2>Contáctame</h2>
            <p>¿Tienes un proyecto o quieres explorar oportunidades? Escríbeme y armamos un plan.</p>
          </header>
          <div className="contact-grid">
            <form
              className="form"
              onSubmit={handleContactSubmit}
            >
              <label className="form__label">
                Nombre
                <input 
                  className="form__input" 
                  type="text" 
                  name="name" 
                  placeholder="Tu nombre" 
                  minLength="2"
                  maxLength="100"
                  required 
                />
              </label>
              <label className="form__label">
                Email
                <input 
                  className="form__input" 
                  type="email" 
                  name="email" 
                  placeholder="tu@correo.com" 
                  required 
                />
              </label>
              <label className="form__label">
                Mensaje (mínimo 10 caracteres)
                <textarea 
                  className="form__input" 
                  name="message" 
                  placeholder="¿En qué te puedo ayudar?" 
                  rows="5" 
                  minLength="10"
                  maxLength="1000"
                  required 
                />
              </label>
              <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
            <div className="contact__aside">
              <div className="card card--elevated">
                <h3>Contacto directo</h3>
                <p>
                  <strong>Email:</strong> <a href="mailto:keiver30@gmail.com">keiver30@gmail.com</a>
                </p>
                <p>
                  <strong>LinkedIn:</strong>{' '}
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    linkedin.com/in/keiverquevedo
                  </a>
                </p>
                <p>
                  <strong>Facebook:</strong>{' '}
                  <a href="https://facebook.com/keiver30" target="_blank" rel="noreferrer">
                    facebook.com/keiver30
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer__info">
            <div className="footer__avatar">
              <img src="/desarollador.png" alt="Henry Parra - Full Stack Developer" loading="lazy" />
            </div>
            <div>
              <p className="footer__name">Henry Parra</p>
              <p className="footer__meta">
                Full Stack Developer  • versión <span className="footer__version">{version}</span>
              </p>
            </div>
          </div>

          <p className="footer__credits">Desarrollado por Henry Parra - Full Stack Developer</p>
          <p className="footer__small">© 2026 Henry Parra. Todos los derechos reservados.</p>
        </footer>
      </main>
    </div>
  );
}
