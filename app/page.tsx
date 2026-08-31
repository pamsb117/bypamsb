import { ArrowDownRight, ArrowUpRight, Code2, LockKeyhole, Mail, MapPin, MessageCircle } from "lucide-react";
import { ProjectPreview } from "@/components/project-preview";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const email = "angeldejesus.franco20@gmail.com";
const whatsapp = "https://wa.me/529512800070";
const projects = [
  {
    number: "01", title: "OXXO · Torre de Control", type: "Sistema empresarial · Plaza Oaxaca", private: true,
    image: "/projects/oxxo-torre-control.png", width: 1905, height: 919,
    imageAlt: "Captura real del portal OXXO Torre de Control de Plaza Oaxaca, con navegación por áreas y vista ejecutiva",
    detail: "Un punto de entrada para consultar indicadores de Recursos Humanos, Comercial y Administrativo, con información conectada a Google Sheets.",
    challenge: "Organizar la consulta de indicadores de distintas áreas en una interfaz común y fácil de recorrer.",
    role: "Diseñé y desarrollé la interfaz del portal, la organización de los dashboards y su integración con Google Sheets.",
    solution: "Un portal con navegación por áreas y una vista ejecutiva que reúne información para el seguimiento operativo.",
    tags: ["Dashboards", "Google Sheets", "Diseño de interfaces"],
  },
  {
    number: "02", title: "Don Aurelio", type: "Catálogo digital · Pedidos por WhatsApp", private: false,
    image: "/projects/don-aurelio-catalogo.png", width: 1265, height: 712,
    imageAlt: "Catálogo Don Aurelio con productos, búsqueda y resumen del pedido", href: "https://pamsb117.github.io/CatalogoWats/",
    detail: "Un catálogo de abarrotes y antojitos que permite explorar productos y preparar un pedido desde el celular o la computadora.",
    challenge: "Facilitar la consulta de productos y reunir un pedido sin depender de un intercambio de mensajes por cada artículo.",
    role: "Diseñé y desarrollé el catálogo, los filtros, el buscador y el carrito con cálculo del total.",
    solution: "El cliente elige productos y cantidades; el carrito prepara un mensaje para continuar el pedido por WhatsApp.",
    tags: ["Catálogo interactivo", "Carrito", "WhatsApp"],
  },
  {
    number: "03", title: "3 Para el ES3", type: "Turismo · Mezcal artesanal", private: false,
    image: "/projects/mezcal-3es3.png", width: 1265, height: 712,
    imageAlt: "Portada del sitio 3 Para el ES3, experiencias de mezcal en Santiago Matatlán, Oaxaca", href: "https://pamsb117.github.io/Mezcal3es3/",
    detail: "Un sitio para descubrir la historia del palenque y los recorridos de mezcal artesanal en Santiago Matatlán, Oaxaca.",
    challenge: "Presentar la identidad del palenque y explicar sus experiencias de forma clara para quien planea una visita.",
    role: "Diseñé y desarrollé el sitio, su estructura de contenido y su presentación en computadora y celular.",
    solution: "Una experiencia visual que reúne la historia, los recorridos y la información del proyecto en un mismo lugar.",
    tags: ["Sitio web", "Diseño responsive", "Turismo"],
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Pamsb, inicio">Pamsb<span>.</span></a>
        <nav aria-label="Navegación principal"><a href="#proyectos">Proyectos</a><a href="#sobre-mi">Sobre mí</a><a href="#contacto">Contacto</a></nav>
        <a className="header-contact" href="#contacto">Hablemos <ArrowUpRight aria-hidden="true" /></a>
      </header>
      <main id="contenido">
        <section id="inicio" className="hero shell" aria-labelledby="hero-title">
          <div className="eyebrow"><span>Pamsb · Diseño & desarrollo web</span><span>Oaxaca, México</span></div>
          <h1 id="hero-title">Tu negocio.<br />Su próxima <em>versión digital.</em></h1>
          <div className="hero-bottom">
            <p>Diseño y desarrollo sitios web, catálogos y dashboards para negocios. Desde la primera idea hasta una experiencia que se entiende y se usa.</p>
            <div className="hero-actions"><a className="button button-primary" href="#proyectos">Ver proyectos <ArrowDownRight aria-hidden="true" /></a><a className="button button-outline" href="#contacto">Hablemos de tu proyecto <ArrowUpRight aria-hidden="true" /></a></div>
          </div>
          <div className="hero-index" aria-label="Especialidades"><span>Sitios que presentan</span><span>Catálogos que conectan</span><span>Dashboards que organizan</span></div>
        </section>
        <section id="proyectos" className="projects shell" aria-labelledby="projects-title">
          <div className="section-heading"><span>01 / Proyectos seleccionados</span><h2 id="projects-title">Ideas distintas.<br /><em>Soluciones a medida.</em></h2></div>
          <div className="project-grid">{projects.map((project) => (
            <article className={`project${project.private ? " project--featured" : ""}`} key={project.number} aria-labelledby={`project-${project.number}`}>
              <div className="project-topline"><span>{project.number} / {project.private ? "Proyecto destacado" : project.type}</span>{project.private && <span className="private-badge"><LockKeyhole aria-hidden="true" /> Uso interno</span>}</div>
              <div className="project-heading">
                <h3 id={`project-${project.number}`}>{project.title}</h3>
                {project.href && <a className="project-site-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${project.title} (abre en otra pestaña)`}>Explorar sitio <ArrowUpRight aria-hidden="true" /></a>}
              </div>
              <ProjectPreview title={project.title} src={`${basePath}${project.image}`} alt={project.imageAlt} width={project.width} height={project.height} confidential={project.private} tone={project.private ? "project-visual--private" : `project-visual--${project.number}`} />
              <p className="project-intro">{project.detail}</p>
              <dl className="project-story"><div><dt>El reto</dt><dd>{project.challenge}</dd></div><div><dt>Mi trabajo</dt><dd>{project.role}</dd></div><div><dt>La solución</dt><dd>{project.solution}</dd></div></dl>
              <ul className="tags" aria-label={`Características de ${project.title}`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              {project.private && <p className="project-confidentiality"><LockKeyhole aria-hidden="true" /><span>Proyecto de uso interno. Se presenta únicamente esta captura para mostrar el trabajo realizado, sin acceso al sistema ni a sus fuentes de datos. La marca OXXO identifica el proyecto y no implica un aval de este portafolio.</span></p>}
            </article>
          ))}</div>
        </section>
        <section id="sobre-mi" className="about shell" aria-labelledby="about-title">
          <div className="section-heading"><span>02 / Sobre mí</span><h2 id="about-title">Diseño con intención.<br /><em>Desarrollo con propósito.</em></h2></div>
          <div className="about-grid">
            <div className="identity-card"><span className="identity-label">La persona detrás de Pamsb</span><span className="identity-monogram" aria-hidden="true">af<span>.</span></span><div><strong>Ángel Franco</strong><span>Creador de Pamsb · Diseño y desarrollo web</span><span className="identity-location"><MapPin aria-hidden="true" /> Oaxaca, México</span></div></div>
            <div className="about-copy"><h3>Hola, soy Ángel.</h3><p className="lead">Conecto el diseño visual con la parte funcional de un sitio: lo que una persona ve, entiende y puede hacer.</p><p>Mi trabajo abarca sitios para presentar experiencias, catálogos con pedidos por WhatsApp y portales de dashboards conectados a Google Sheets. Me interesa que cada proyecto responda a una necesidad concreta, con una estructura clara y una interfaz fácil de recorrer.</p><p>Parto del contenido y del objetivo, desarrollo la experiencia y cuido su adaptación a computadora y celular. Los proyectos de este portafolio muestran distintas formas de aplicar ese enfoque.</p><ul className="skills" aria-label="Áreas de trabajo"><li><Code2 aria-hidden="true" /> Desarrollo web</li><li>Diseño de interfaces</li><li>Diseño responsive</li><li>Dashboards</li></ul></div>
          </div>
        </section>
      </main>
      <footer id="contacto">
        <div className="shell contact">
          <span className="footer-label">03 / Contacto</span>
          <div className="contact-grid">
            <h2>Tu idea puede<br /><em>empezar aquí.</em></h2>
            <div className="contact-copy">
              <p>¿Un sitio para tu negocio, un catálogo o una herramienta para tu equipo? Cuéntame qué tienes en mente por WhatsApp o correo.</p>
              <a className="button button-lime" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Escríbeme por WhatsApp al +52 951 280 0070 (abre en otra pestaña)"><MessageCircle aria-hidden="true" /> Escríbeme por WhatsApp <ArrowUpRight aria-hidden="true" /></a>
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
