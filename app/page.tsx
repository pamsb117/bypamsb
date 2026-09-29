import { ArrowDownRight, ArrowUpRight, CheckCircle2, Code2, Layers3, LockKeyhole, Mail, MapPin, MessageCircle, Send, Sparkles } from "lucide-react";
import { ProjectPreview } from "@/components/project-preview";
import { ScrollMotion } from "@/components/scroll-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const email = "angeldejesus.franco20@gmail.com";
const whatsappQuote = `https://wa.me/529512800070?text=${encodeURIComponent("Hola Ángel, vi tu portafolio y quiero cotizar un proyecto digital.")}`;
const services = [
  {
    title: "Página web para negocio",
    description: "Presenta lo que ofreces y facilita que tus clientes te contacten o reserven.",
    icon: Sparkles,
  },
  {
    title: "Catálogo con pedidos por WhatsApp",
    description: "Tus clientes eligen productos y envían su pedido listo por WhatsApp.",
    icon: Send,
  },
  {
    title: "Dashboard o panel interno",
    description: "Consulta indicadores y reportes de tu equipo en un solo lugar.",
    icon: Layers3,
  },
];
const workflow = [
  "Cuéntame qué necesitas.",
  "Diseño y preparo una primera versión.",
  "Ajustamos y publicamos.",
];
const projects = [
  {
    number: "01", title: "OXXO · Torre de Control", type: "Sistema empresarial · Plaza Oaxaca", private: true,
    image: "/projects/oxxo-torre-control-2026.png", width: 1604, height: 906,
    imageAlt: "Captura del portal OXXO Torre de Control de Plaza Oaxaca, con navegación por áreas y tarjetas de dashboards diarios",
    detail: "Diseñé un portal que reúne indicadores de distintas áreas y los conecta con Google Sheets.",
    challenge: "Organizar la consulta de indicadores de distintas áreas en una interfaz común y fácil de recorrer.",
    role: "Diseñé y desarrollé la interfaz del portal, la organización de los dashboards y su integración con Google Sheets.",
    solution: "Un portal con navegación por áreas y una vista ejecutiva que reúne información para el seguimiento operativo.",
  },
  {
    number: "02", title: "Don Aurelio", type: "Catálogo digital · Pedidos por WhatsApp", private: false,
    image: "/projects/don-aurelio-catalogo.png", width: 1265, height: 712,
    imageAlt: "Catálogo Don Aurelio con productos, búsqueda y resumen del pedido", href: "https://pamsb117.github.io/CatalogoWats/",
    detail: "Diseñé un catálogo con buscador y carrito que prepara el pedido para enviarlo por WhatsApp.",
    challenge: "Facilitar la consulta de productos y reunir un pedido sin depender de un intercambio de mensajes por cada artículo.",
    role: "Diseñé y desarrollé el catálogo, los filtros, el buscador y el carrito con cálculo del total.",
    solution: "El cliente elige productos y cantidades; el carrito prepara un mensaje para continuar el pedido por WhatsApp.",
  },
  {
    number: "03", title: "3 Para el ES3", type: "Turismo · Mezcal artesanal", private: false,
    image: "/projects/mezcal-3es3.png", width: 1265, height: 712,
    imageAlt: "Portada del sitio 3 Para el ES3, experiencias de mezcal en Santiago Matatlán, Oaxaca", href: "https://pamsb117.github.io/Mezcal3es3/",
    detail: "Creé un sitio para mostrar el palenque y facilitar la consulta de sus recorridos de mezcal.",
    challenge: "Presentar la identidad del palenque y explicar sus experiencias de forma clara para quien planea una visita.",
    role: "Diseñé y desarrollé el sitio, su estructura de contenido y su presentación en computadora y celular.",
    solution: "Una experiencia visual que reúne la historia, los recorridos y la información del proyecto en un mismo lugar.",
  },
];

const spiderWeb = (
  <svg className="spider-web" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
    <g fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
      <path d="M200 0 0 0M200 0 20 90M200 0 70 160M200 0 140 195M200 0 200 200" />
      <path d="M170 0Q176 16 173 26Q184 28 200 30" />
      <path d="M130 0Q140 30 133 46Q148 60 157 69Q170 64 200 64" />
      <path d="M88 0Q100 42 92 64Q118 88 118 108Q150 112 200 106" />
      <path d="M44 0Q60 56 50 82Q86 118 90 142Q124 150 200 146" />
    </g>
  </svg>
);

export default function Home() {
  return (
    <>
      <ScrollMotion />
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Pamsb, inicio">Pamsb<span>.</span></a>
        <nav aria-label="Navegación principal"><a href="#servicios">Servicios</a><a href="#proyectos">Proyectos</a><a href="#sobre-mi">Sobre mí</a></nav>
        <a className="header-contact" href={whatsappQuote} target="_blank" rel="noopener noreferrer">Cotizar <ArrowUpRight aria-hidden="true" /></a>
      </header>
      <main id="contenido">
        <section id="inicio" className="hero shell" aria-labelledby="hero-title">
          {spiderWeb}
          <div className="eyebrow"><span>Pamsb · Presencia digital para negocios</span><span>Oaxaca, México</span></div>
          <code className="code-deco code-deco--hero" aria-hidden="true">{"<Negocio online={true} />"}</code>
          <h1 id="hero-title">Tu negocio.<br />Su próxima <em>versión digital.</em></h1>
          <div className="hero-bottom">
            <p>Creo páginas web, catálogos y paneles para que tu negocio muestre lo que ofrece y tus clientes sepan cómo contactarte.</p>
            <div className="hero-actions"><a className="button button-primary" href={whatsappQuote} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Cotiza por WhatsApp</a><a className="button button-glass" href="#proyectos">Ver proyectos <ArrowDownRight aria-hidden="true" /></a></div>
          </div>
          <div className="hero-index" aria-label="Especialidades"><span>Sitios que presentan</span><span>Catálogos que conectan</span><span>Dashboards que organizan</span></div>
        </section>
        <section id="servicios" className="services shell" aria-labelledby="services-title">
          <div className="section-heading" data-reveal><span>01 / Servicios</span><h2 id="services-title">Lo que puedes pedir.<br /><em>Sin vueltas.</em></h2></div>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title} data-reveal>
                  <div className="service-icon"><Icon aria-hidden="true" /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
          <div className="process-strip" aria-label="Proceso de trabajo" data-reveal>
            <span>Cómo empezamos</span>
            <ol>
              {workflow.map((step) => <li key={step}><CheckCircle2 aria-hidden="true" /> {step}</li>)}
            </ol>
          </div>
        </section>
        <section id="proyectos" className="projects shell" aria-labelledby="projects-title">
          <div className="section-heading" data-reveal><span>02 / Proyectos seleccionados</span><h2 id="projects-title">Ideas distintas.<br /><em>Soluciones a medida.</em></h2></div>
          <div className="project-grid">{projects.map((project) => (
            <article className={`project${project.private ? " project--featured" : ""}`} key={project.number} aria-labelledby={`project-${project.number}`} data-reveal>
              <div className="project-topline"><span>{project.number} / {project.private ? "Proyecto destacado" : project.type}</span>{project.private && <span className="private-badge"><LockKeyhole aria-hidden="true" /> Uso interno</span>}</div>
              <div className="project-heading">
                <h3 id={`project-${project.number}`}>{project.title}</h3>
                {project.href && <a className="project-site-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${project.title} (abre en otra pestaña)`}>Explorar sitio <ArrowUpRight aria-hidden="true" /></a>}
              </div>
              <ProjectPreview title={project.title} src={`${basePath}${project.image}`} alt={project.imageAlt} width={project.width} height={project.height} confidential={project.private} tone={project.private ? "project-visual--private" : `project-visual--${project.number}`} />
              <p className="project-intro">{project.detail}</p>
              <details className="project-details">
                <summary>Cómo se hizo <ArrowDownRight aria-hidden="true" /></summary>
                <dl className="project-story"><div><dt>El reto</dt><dd>{project.challenge}</dd></div><div><dt>Mi trabajo</dt><dd>{project.role}</dd></div><div><dt>La solución</dt><dd>{project.solution}</dd></div></dl>
              </details>
              {project.private && <p className="project-confidentiality"><LockKeyhole aria-hidden="true" /><span>Proyecto de uso interno. Solo muestro una captura, sin acceso al sistema ni a sus datos. OXXO identifica el proyecto y no avala este portafolio.</span></p>}
            </article>
          ))}</div>
        </section>
        <section id="sobre-mi" className="about shell" aria-labelledby="about-title">
          <div className="section-heading" data-reveal><span>03 / Sobre mí</span><h2 id="about-title">Diseño con intención.<br /><em>Desarrollo con propósito.</em></h2></div>
          <div className="about-grid">
            <div className="identity-card" data-reveal><span className="identity-label">La persona detrás de Pamsb</span><span className="identity-monogram" aria-hidden="true">af<span>.</span></span><div><strong>Ángel Franco</strong><span>Creador de Pamsb · Diseño y desarrollo web</span><span className="identity-location"><MapPin aria-hidden="true" /> Oaxaca, México</span></div></div>
            <div className="about-copy" data-reveal><h3>Hola, soy Ángel.</h3><p className="lead">Desde Oaxaca diseño y desarrollo sitios, catálogos y paneles para negocios y proyectos independientes. Me enfoco en que cada persona encuentre lo que necesita y pueda dar el siguiente paso con facilidad.</p><ul className="skills" aria-label="Áreas de trabajo"><li><Code2 aria-hidden="true" /> Desarrollo web</li><li>Diseño de interfaces</li><li>Diseño responsive</li><li>Dashboards</li></ul></div>
          </div>
        </section>
      </main>
      <footer id="contacto">
        <div className="shell contact">
          <span className="footer-label">04 / Contacto</span>
          <code className="code-deco code-deco--footer" aria-hidden="true">{"cliente.escribe(\"Hola\") // → WhatsApp"}</code>
          <div className="contact-grid" data-reveal>
            <h2>Tu idea puede<br /><em>empezar aquí.</em></h2>
            <div className="contact-copy">
              <p>¿Quieres una página, un catálogo o una herramienta para tu equipo? Mándame un mensaje con tu idea y te digo qué camino conviene.</p>
              <a className="button button-primary" href={whatsappQuote} target="_blank" rel="noopener noreferrer" aria-label="Cotiza tu proyecto por WhatsApp al +52 951 280 0070 (abre en otra pestaña)"><MessageCircle aria-hidden="true" /> Cotizar por WhatsApp <ArrowUpRight aria-hidden="true" /></a>
              <p className="contact-phone">+52 951 280 0070</p>
              <a className="contact-email" href={`mailto:${email}`}><Mail aria-hidden="true" /><span>{email.split("@")[0]}<wbr />@{email.split("@")[1]}</span><ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
          <div className="footer-bottom"><span>© 2026 Pamsb · Ángel Franco</span><span><MapPin aria-hidden="true" /> Oaxaca, México</span><a href="#inicio">Volver al inicio ↑</a></div>
        </div>
      </footer>
    </>
  );
}
