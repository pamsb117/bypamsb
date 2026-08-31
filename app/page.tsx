import { ArrowDownRight, ArrowUpRight, Code2, LockKeyhole, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const projects = [
  { number: "01", title: "3 Para el ES3", type: "Turismo · Diseño y desarrollo web", tone: "bg-[#17140e]", mark: "3 Para el ES3", detail: "Sitio web de tours de mezcal artesanal en Santiago Matatlán, Oaxaca. Presenta el recorrido, las experiencias y la historia del palenque.", href: "https://pamsb117.github.io/Mezcal3es3/", image: "/projects/mezcal-3es3.png" },
  { number: "02", title: "Tienda de sneakers", type: "E-commerce · UI/UX", tone: "bg-[#dfe8ed]", mark: "DROP 01", detail: "Catálogo editorial, navegación simple y una experiencia de compra pensada para móvil." },
  { number: "03", title: "OXXO · Torre de Control", type: "Sistema empresarial · Diseño y desarrollo web", tone: "bg-[#f0e5df]", mark: "", detail: "Diseño y desarrollo de un portal de dashboards para OXXO, Plaza Oaxaca. Centraliza la consulta de indicadores de Recursos Humanos, Comercial y Administrativo, con información conectada a Google Sheets.", image: "/projects/oxxo-torre-control.png", private: true },
  { number: "04", title: "Portafolio creativo", type: "Identidad · Desarrollo", tone: "bg-[#e2ebdf]", mark: "ESTUDIO", detail: "Una vitrina visual flexible que pone el trabajo y la personalidad del creador al frente." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Inicio">Ángel<span>.</span></a>
        <nav aria-label="Navegación principal"><a href="#proyectos">Proyectos</a><a href="#sobre-mi">Sobre mí</a><a href="#contacto">Contacto</a></nav>
        <a className="availability" href="#contacto"><span />Disponible para proyectos</a>
      </header>
      <section id="inicio" className="hero shell">
        <div className="eyebrow"><span>Diseñador & desarrollador web</span><span>Oaxaca, México</span></div>
        <h1>Creo páginas web<br />que se sienten <em>claras.</em></h1>
        <div className="hero-bottom"><p>Combino diseño y desarrollo para transformar ideas en experiencias digitales funcionales, atractivas y fáciles de usar.</p><a className="circle-link" href="#proyectos" aria-label="Ver proyectos"><ArrowDownRight /></a></div>
      </section>
      <section id="proyectos" className="projects shell">
        <div className="section-heading"><span>01 / Proyectos seleccionados</span><p>Una mezcla de sitios, tiendas y productos digitales.</p></div>
        <div className="project-grid">{projects.map((project) => (
          <article className={`project${project.private ? " project--private" : ""}`} key={project.number}>
            {project.href && project.image ? (
              <a className={`project-visual project-visual--live ${project.tone}`} href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Ver sitio de ${project.title} (abre en otra pestaña)`}>
                <span className="project-number">{project.number}</span>
                <Image className="project-preview" src={`${basePath}${project.image}`} alt="Portada del sitio 3 Para el ES3, tours de mezcal artesanal en Oaxaca" width={1265} height={712} />
                <span className="project-visit">Ver sitio <ArrowUpRight aria-hidden="true" /></span>
              </a>
            ) : project.private && project.image ? (
              <div className={`project-visual project-visual--private ${project.tone}`}>
                <span className="project-number">{project.number}</span>
                <span className="project-capture-label">Captura real de la interfaz</span>
                <Image className="project-preview" src={`${basePath}${project.image}`} alt="Captura real de OXXO Torre de Control, con el portal de dashboards de Plaza Oaxaca y sus áreas de consulta" width={1905} height={919} />
                <span className="project-visit project-private-label"><LockKeyhole aria-hidden="true" /> Proyecto privado</span>
              </div>
            ) : (
              <div className={`project-visual ${project.tone}`}><span className="project-number">{project.number}</span><div className="project-mark">{project.mark}</div><ArrowUpRight className="project-arrow" /></div>
            )}
            <div className="project-copy"><div><h2>{project.title}</h2><span>{project.type}</span></div><p>{project.detail}</p></div>
            {project.private && <>
              <ul className="project-highlights" aria-label="Funciones del sistema">
                <li><strong>Información conectada</strong><span>Integración con Google Sheets para consultar indicadores actualizados.</span></li>
                <li><strong>Navegación por áreas</strong><span>Dashboards organizados por Recursos Humanos, Comercial y Administrativo.</span></li>
                <li><strong>Vista ejecutiva</strong><span>Un punto de entrada para consultar el estado operativo y priorizar el seguimiento.</span></li>
              </ul>
              <div className="project-confidentiality">Captura real compartida para presentar el trabajo de diseño y desarrollo. Proyecto de uso interno: este portafolio no ofrece acceso al sistema ni a sus fuentes de datos.</div>
            </>}
          </article>
        ))}</div>
      </section>
      <section id="sobre-mi" className="about shell">
        <div className="section-heading"><span>02 / Sobre mí</span><p>Diseño con intención. Construyo con detalle.</p></div>
        <div className="about-grid"><div className="portrait" aria-label="Espacio para fotografía de Ángel"><span>AF</span><small>Tu fotografía aquí</small></div><div className="about-copy"><h2>Hola, soy Ángel.</h2><p className="lead">Me interesa crear páginas que no solo se vean bien, sino que comuniquen con claridad y ayuden a cumplir un objetivo.</p><p>Trabajo cada proyecto desde la estructura y el concepto visual hasta su adaptación en computadora y celular. Mi enfoque es simple: entender la idea, quitar el ruido y cuidar lo que sí importa.</p><div className="skills"><span><Code2 /> Desarrollo web</span><span>UI/UX</span><span>Diseño responsive</span><span>Identidad visual</span></div></div></div>
      </section>
      <footer id="contacto"><div className="shell contact"><span className="footer-label">03 / Contacto</span><h2>¿Tienes una idea?<br /><em>Hagámosla realidad.</em></h2><a className="email" href="mailto:tu-correo@ejemplo.com">tu-correo@ejemplo.com <ArrowUpRight /></a><div className="footer-bottom"><span>© 2026 Ángel Franco</span><div><a href="#">@ Instagram</a><a href="#"><Mail /> Correo</a><span><MapPin /> Oaxaca, MX</span></div></div></div></footer>
    </main>
  );
}
