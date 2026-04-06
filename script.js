// ===== TRANSLATIONS =====
const translations = {
  es: {
    title: 'Julian Ardila | Growth Lead & Estratega Digital',
    nav: { home: 'Inicio', about: 'Sobre mi', services: 'Servicios', work: 'Proyectos', experience: 'Experiencia', contact: 'Contacto' },
    hero: { badge: 'Disponible para trabajar', greeting: 'Hola! Soy Julian Ardila -', roleHighlight: 'Growth Lead', cta: 'Contr\u00e1tame', desc: 'Especializado en escalar negocios combinando inteligencia de datos, automatizacion e IA con estrategia de contenido y marketing digital.', ctaExp: 'Ver mi experiencia', ctaProj: 'Ver proyectos', scroll: 'DESPLAZATE' },
    about: {
      label: 'Sobre Mi', title: 'Construyendo el futuro digital', subtitle: 'Con pasion por la excelencia y atencion al detalle', skillsTitle: 'Habilidades Clave', download: 'Descargar CV',
      stats: { years: 'ANOS DE EXPERIENCIA', companies: 'EMPRESAS & CLIENTES', projects: 'PROYECTOS DIGITALES' },
      bio: 'Comunicador Social con mas de 6 anos de experiencia en fintech, fondos de inversion, productos digitales y agencias. He trabajado en mercados de inversion y brokerage en EE. UU. y Latinoamerica. Combino estrategia de contenido, social media, UX writing, email marketing y SEO con una mirada analitica y de producto. Mi foco: que la comunicacion sea clara, coherente con la marca y se traduzca en resultados medibles.',
      bio2: 'Actualmente lidero la estrategia de crecimiento en Agencia Digital Flash, donde diseno dashboards integrados, automatizo procesos con IA y construyo pipelines de prospeccion outbound.'
    },
    exp: {
      label: 'Trayectoria', title: 'Experiencia Profesional', subtitle: 'Un recorrido por mi evolucion como estratega digital', skillsTitle: 'Stack & Herramientas',
      e1: { date: 'Feb 2026 - Presente', desc: 'Liderazgo de la estrategia de crecimiento combinando inteligencia de datos, automatizacion e IA para escalar resultados de negocio. Diseno de dashboards integrados con data en tiempo real. Construccion de procesos de prospeccion outbound.' },
      e2: { desc: 'Investigacion de mercados en EE. UU. y LATAM con IA. Estrategia de contenidos para 4 marcas y CRM GoHighLevel.' },
      e3: { title: 'Gestor IA y Automatizacion', desc: 'Desarrollo de flujos conversacionales con IA en Dapta. Mejora de prompts y consecucion de leads en bases de datos frias.' },
      e4: { desc: 'Estructuracion de paginas web, planificacion de contenidos e implementacion de estrategias de marketing con IA.' },
      e5: { desc: 'Diseno UX/UI de plataforma Web y App en Figma para clientes B2B. Brandbook completo de la marca.' },
      e6: { desc: 'Content Manager, desarrollador web No-code en Webflow/Wix, email marketing con Mailchimp y analisis de datos de audiencia.' }
    },
    services: { label: 'Servicios', title: 'Mis Especialidades' },
    work: {
      label: 'Proyectos', title: 'Proyectos Destacados', viewCode: 'Ver proyecto',
      p1: { desc: 'Dashboard de analytics que agrega data de Google Ads y Meta Ads. KPIs en tiempo real, tablas de campanas, filtros por fecha y estado.' },
      p2: { desc: 'Dashboard para monitorear campanas de outreach en Snov.io. Vista multicanal con metricas de Email y LinkedIn.' },
      p3: { desc: 'Playbook interno: checklists de onboarding, timelines de procesos, sistema de scoring y catalogo de herramientas.' },
      p4: { name: 'ESTRATEGIA & PRODUCTOS', desc: 'Plan de crecimiento $20M, prospeccion B2B, analisis de portafolio.', t1: 'Estrategia' },
      tabDev: 'Desarrollo', tabDesign: 'Diseno & UX', demo: 'Demo'
    },
    contact: { label: 'Contacto', title: 'Tienes un proyecto en mente?', subtitle: 'Si buscas a alguien que combine estrategia digital, datos e IA para llevar tu negocio al siguiente nivel, hablemos.', phone: 'Telefono', location: 'Ubicacion', form: { name: 'Nombre', email: 'Email', subject: 'Asunto', message: 'Mensaje', send: 'Enviar mensaje' } }
  },
  en: {
    title: 'Julian Ardila | Growth Lead & Digital Strategist',
    nav: { home: 'Home', about: 'About', services: 'Services', work: 'Projects', experience: 'Experience', contact: 'Contact' },
    hero: { badge: 'Available for work', greeting: "Hi! I'm Julian Ardila -", roleHighlight: 'Growth Lead', cta: 'Hire Me Now', desc: 'Specialized in scaling businesses by combining data intelligence, automation and AI with content strategy and digital marketing.', ctaExp: 'See my experience', ctaProj: 'See projects', scroll: 'SCROLL DOWN' },
    about: {
      label: 'About Me', title: 'Building the digital future', subtitle: 'With passion for excellence and attention to detail', skillsTitle: 'Key Skills', download: 'Download CV',
      stats: { years: 'YEARS OF EXPERIENCE', companies: 'COMPANIES & CLIENTS', projects: 'DIGITAL PROJECTS' },
      bio: 'Communications professional with 6+ years of experience in fintech, investment funds, digital products and agencies. I have worked in investment and brokerage markets in the US and Latin America. I combine content strategy, social media, UX writing, email marketing and SEO with an analytical and product-focused approach. My focus: clear communication aligned with the brand that delivers measurable business results.',
      bio2: 'Currently leading the growth strategy at Agencia Digital Flash, where I design integrated dashboards, automate processes with AI and build outbound prospecting pipelines.'
    },
    exp: {
      label: 'Career', title: 'Professional Experience', subtitle: 'A journey through my evolution as a digital strategist', skillsTitle: 'Stack & Tools',
      e1: { date: 'Feb 2026 - Present', desc: 'Leading growth strategy combining data intelligence, automation and AI to scale business results. Designing integrated real-time dashboards. Building outbound prospecting processes.' },
      e2: { desc: 'Market research in the US and LATAM with AI. Content strategy for 4 brands and GoHighLevel CRM.' },
      e3: { title: 'AI & Automation Manager', desc: 'Development of conversational AI flows in Dapta. Prompt engineering and cold lead generation.' },
      e4: { desc: 'Website structuring, content planning and AI-driven marketing strategy implementation.' },
      e5: { desc: 'UX/UI design for Web and App platform in Figma for B2B clients. Complete brand book.' },
      e6: { desc: 'Content Manager, No-code web developer on Webflow/Wix, email marketing with Mailchimp and data analysis.' }
    },
    services: { label: 'Services', title: 'My Specialties' },
    work: {
      label: 'Projects', title: 'Featured Projects', viewCode: 'View project',
      p1: { desc: 'Analytics dashboard aggregating Google Ads and Meta Ads data. Real-time KPIs, campaign tables, date and status filters.' },
      p2: { desc: 'Dashboard to monitor Snov.io outreach campaigns. Multichannel view with Email and LinkedIn metrics.' },
      p3: { desc: 'Internal playbook: onboarding checklists, process timelines, scoring system and tools catalog.' },
      p4: { name: 'STRATEGY & PRODUCTS', desc: '$20M growth plan, B2B prospecting, portfolio analysis.', t1: 'Strategy' },
      tabDev: 'Development', tabDesign: 'Design & UX', demo: 'Live Demo'
    },
    contact: { label: 'Contact', title: 'Got a project in mind?', subtitle: "If you're looking for someone who combines digital strategy, data and AI to take your business to the next level, let's talk.", phone: 'Phone', location: 'Location', form: { name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', send: 'Send message' } }
  }
};

// ===== LANGUAGE =====
let currentLang = localStorage.getItem('lang') || 'es';

function getVal(obj, path) {
  return path.split('.').reduce((o, k) => o && o[k], obj);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.title = translations[lang].title;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = getVal(translations[lang], el.getAttribute('data-i18n'));
    if (v) el.textContent = v;
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

  // Switch CV download link
  const cvLink = document.getElementById('cvDownload');
  if (cvLink) cvLink.href = lang === 'en' ? 'assets/CV_Julian_Ardila_EN.docx' : 'assets/CV_Julian_Ardila_ES.docx';
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  // Lang toggle
  document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => setLanguage(b.dataset.lang)));

  // Theme toggle (dark mode)
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // Scroll animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-anim').forEach(el => observer.observe(el));

  // Skill bar animation
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-bar-fill').forEach(bar => bar.classList.add('animated'));
        barObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  const skillSection = document.querySelector('.skill-bars');
  if (skillSection) barObserver.observe(skillSection);

  // Active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const secObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === e.target.id));
      }
    });
  }, { threshold: 0.25 });
  sections.forEach(s => secObserver.observe(s));

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // Mobile menu
  const toggle = document.getElementById('menuToggle');
  const overlay = document.getElementById('mobileOverlay');
  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    overlay.classList.toggle('show', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  overlay.querySelectorAll('.mobile-link').forEach(l => {
    l.addEventListener('click', () => {
      toggle.classList.remove('open');
      overlay.classList.remove('show');
      document.body.style.overflow = '';
    });
  });

  // Project tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 68;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
});
