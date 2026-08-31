import { ArrowDownRight, ArrowUpRight, Code2, Mail, MapPin } from "lucide-react";

const projects = [
  { number: "01", title: "Sitio para restaurante", type: "Diseño web · Desarrollo", tone: "bg-[#f1ebdf]", mark: "MENÚ", detail: "Una experiencia cálida y directa para descubrir el menú, la historia y reservar una mesa." },
  { number: "02", title: "Tienda de sneakers", type: "E-commerce · UI/UX", tone: "bg-[#dfe8ed]", mark: "DROP 01", detail: "Catálogo editorial, navegación simple y una experiencia de compra pensada para móvil." },
  { number: "03", title: "Panel administrativo", type: "Producto digital · Front-end", tone: "bg-[#e9e5f2]", mark: "08:42", detail: "Información compleja convertida en una interfaz clara, rápida y fácil de consultar." },
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
        <div className="project-grid">{projects.map((project) => <article className="project" key={project.number}><div className={`project-visual ${project.tone}`}><span className="project-number">{project.number}</span><div className="project-mark">{project.mark}</div><ArrowUpRight className="project-arrow" /></div><div className="project-copy"><div><h2>{project.title}</h2><span>{project.type}</span></div><p>{project.detail}</p></div></article>)}</div>
      </section>
      <section id="sobre-mi" className="about shell">
        <div className="section-heading"><span>02 / Sobre mí</span><p>Diseño con intención. Construyo con detalle.</p></div>
        <div className="about-grid"><div className="portrait" aria-label="Espacio para fotografía de Ángel"><span>AF</span><small>Tu fotografía aquí</small></div><div className="about-copy"><h2>Hola, soy Ángel.</h2><p className="lead">Me interesa crear páginas que no solo se vean bien, sino que comuniquen con claridad y ayuden a cumplir un objetivo.</p><p>Trabajo cada proyecto desde la estructura y el concepto visual hasta su adaptación en computadora y celular. Mi enfoque es simple: entender la idea, quitar el ruido y cuidar lo que sí importa.</p><div className="skills"><span><Code2 /> Desarrollo web</span><span>UI/UX</span><span>Diseño responsive</span><span>Identidad visual</span></div></div></div>
      </section>
      <footer id="contacto"><div className="shell contact"><span className="footer-label">03 / Contacto</span><h2>¿Tienes una idea?<br /><em>Hagámosla realidad.</em></h2><a className="email" href="mailto:tu-correo@ejemplo.com">tu-correo@ejemplo.com <ArrowUpRight /></a><div className="footer-bottom"><span>© 2026 Ángel Franco</span><div><a href="#">@ Instagram</a><a href="#"><Mail /> Correo</a><span><MapPin /> Oaxaca, MX</span></div></div></div></footer>
    </main>
  );
}
