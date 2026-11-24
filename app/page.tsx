import { ArrowDownRight, ArrowUpRight, Bot, CalendarCheck, CheckCircle2, Clapperboard, Code2, Layers3, LockKeyhole, Mail, MapPin, Megaphone, MessageCircle, Palette, Play, Send, Share2, Sparkles } from "lucide-react";
import { ProjectPreview } from "@/components/project-preview";
import { ScrollMotion } from "@/components/scroll-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const email = "angeldejesus.franco20@gmail.com";
const socialLinks = [
  { label: "TikTok", handle: "@pamsb_", href: "https://www.tiktok.com/@pamsb_", path: "M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.59-2.6 2.6 2.6 0 0 1 3.35-2.48V9.66a5.69 5.69 0 0 0-6.45 5.64A5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.68-5.68V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" },
  { label: "GitHub", handle: "pamsb117", href: "https://github.com/pamsb117", path: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" },
];
const whatsappQuote = `https://wa.me/529512800070?text=${encodeURIComponent("Hola Ángel, vi tu portafolio y quiero cotizar un proyecto digital.")}`;
const serviceGroups = [
  {
    label: "Contenido y publicidad",
    items: [
      { title: "Redes sociales", description: "Paquetes mensuales con carruseles, reels y calendario de publicaciones para Instagram, Facebook y TikTok.", icon: Share2 },
      { title: "Videos promocionales", description: "Videos animados y de producto para presentar tu negocio, una promoción o un lanzamiento.", icon: Clapperboard },
      { title: "Anuncios en Meta", description: "Campañas en Facebook e Instagram que mandan a tus clientes directo a tu WhatsApp.", icon: Megaphone },
    ],
  },
  {
    label: "Marca y presencia web",
    items: [
      { title: "Identidad de marca", description: "Logotipo, paleta, tipografías y lineamientos para que tu negocio se vea consistente en todos lados.", icon: Palette },
      { title: "Página web para negocio", description: "Presenta lo que ofreces y facilita que tus clientes te contacten o reserven.", icon: Sparkles },
      { title: "Catálogo con pedidos por WhatsApp", description: "Tus clientes eligen productos y envían su pedido listo por WhatsApp.", icon: Send },
    ],
  },
  {
    label: "Sistemas y herramientas",
    items: [
      { title: "Citas y punto de venta", description: "Sistema para agendar citas y cobrar, pensado para estéticas, consultorios y negocios de servicio.", icon: CalendarCheck },
      { title: "Dashboard o panel interno", description: "Consulta indicadores y reportes de tu equipo en un solo lugar.", icon: Layers3 },
      { title: "Asistente con IA", description: "Un chat que responde dudas de tus clientes o de tu equipo con la información de tu negocio.", icon: Bot },
    ],
  },
];
const marqueeItems = ["Redes sociales", "Videos", "Anuncios en Meta", "Identidad de marca", "Páginas web", "Catálogos", "Sistemas", "Asistentes con IA"];
const testimonials = [
  { quote: "Ángel entendió cómo hablarle a mis pacientes. Los carruseles explican los tratamientos sin asustar a nadie y mis redes por fin se ven como mi consultorio: profesionales y con mi estilo.", name: "Dra. Jael López", business: "Endodoncista · San Francisco Lachigoló", initials: "JL" },
  { quote: "Antes los pedidos por WhatsApp eran un ir y venir de mensajes. Con el catálogo mis clientes eligen, ven el total y me mandan el pedido completo.", name: "Don Aurelio", business: "Antojitos y abarrotes · Oaxaca", initials: "DA" },
  { quote: "Queríamos una página que se sintiera como el palenque. Ahora la gente ve los recorridos, la historia y cómo reservar en un solo lugar.", name: "3 Para el ES3", business: "Palenque · Santiago Matatlán", initials: "3" },
];
const workflow = [
  "Cuéntame qué necesitas.",
  "Diseño y preparo una primera versión.",
  "Ajustamos y publicamos.",
];
const projects = [
  {
    number: "01", title: "OXXO · Torre de Control", type: "Sistema empresarial · Plaza Oaxaca", private: true,
    image: "/projects/oxxo-torre-control-2026.webp", width: 1604, height: 906,
    imageAlt: "Captura del portal OXXO Torre de Control de Plaza Oaxaca, con navegación por áreas y tarjetas de dashboards diarios",
    detail: "Diseñé un portal que reúne indicadores de distintas áreas y los conecta con Google Sheets.",
    challenge: "Organizar la consulta de indicadores de distintas áreas en una interfaz común y fácil de recorrer.",
    role: "Diseñé y desarrollé la interfaz del portal, la organización de los dashboards y su integración con Google Sheets.",
    solution: "Un portal con navegación por áreas y una vista ejecutiva que reúne información para el seguimiento operativo.",
  },
  {
    number: "02", title: "Conoxxo · App de RH", type: "App móvil · Plaza Oaxaca", private: true,
    image: "/projects/conoxxo-app.webp", width: 1604, height: 906,
    imageAlt: "Pantallas de bienvenida e inicio de sesión de Conoxxo, la app de RH de OXXO Plaza Oaxaca, con su mascota el osito",
    detail: "Desarrollé una app para los empleados de la plaza: preguntan dudas del reglamento como se las dirían a un compañero y consultan avisos, vacaciones y el directorio desde su celular.",
    challenge: "Que cada colaborador resolviera dudas del reglamento y trámites de RH sin tener que preguntar en persona, y que solo el personal de la nómina pudiera entrar.",
    role: "Diseñé y desarrollé la app con React Native y Expo, el acceso con número de empleado y PIN, la base de datos y el panel para que RH publique avisos y administre accesos.",
    solution: "Una app instalable con chat del reglamento que cita cada artículo, avisos con imágenes, vacaciones, votaciones, actas con firma y directorio.",
  },
  {
    number: "03", tone: "02", title: "Don Aurelio", type: "Catálogo digital · Pedidos por WhatsApp", private: false,
    image: "/projects/don-aurelio-catalogo.webp", width: 1265, height: 712,
    imageAlt: "Catálogo Don Aurelio con productos, búsqueda y resumen del pedido", href: "https://pamsb117.github.io/CatalogoWats/",
    detail: "Diseñé un catálogo con buscador y carrito que prepara el pedido para enviarlo por WhatsApp.",
    challenge: "Facilitar la consulta de productos y reunir un pedido sin depender de un intercambio de mensajes por cada artículo.",
    role: "Diseñé y desarrollé el catálogo, los filtros, el buscador y el carrito con cálculo del total.",
    solution: "El cliente elige productos y cantidades; el carrito prepara un mensaje para continuar el pedido por WhatsApp.",
  },
  {
    number: "04", tone: "03", title: "3 Para el ES3", type: "Turismo · Mezcal artesanal", private: false,
    image: "/projects/mezcal-3es3.webp", width: 1265, height: 712,
    imageAlt: "Portada del sitio 3 Para el ES3, experiencias de mezcal en Santiago Matatlán, Oaxaca", href: "https://pamsb117.github.io/Mezcal3es3/",
    detail: "Creé un sitio para mostrar el palenque y facilitar la consulta de sus recorridos de mezcal.",
    challenge: "Presentar la identidad del palenque y explicar sus experiencias de forma clara para quien planea una visita.",
    role: "Diseñé y desarrollé el sitio, su estructura de contenido y su presentación en computadora y celular.",
    solution: "Una experiencia visual que reúne la historia, los recorridos y la información del proyecto en un mismo lugar.",
  },
  {
    number: "05", tone: "04", title: "Dra. Jael López", type: "Redes sociales · Consultorio dental", private: false,
    image: "/projects/dra-jael-lopez-redes.webp", width: 1265, height: 712,
    imageAlt: "Publicaciones de Instagram de la Dra. Jael López: carruseles sobre endodoncia, limpieza dental y salud bucal, y reels del consultorio",
    href: "https://www.instagram.com/drajaellopez/", linkLabel: "Ver Instagram",
    socials: [
      { label: "TikTok", href: "https://www.tiktok.com/@drajaellopez" },
      { label: "Facebook", href: "https://www.facebook.com/DentistaJael" },
    ],
    detail: "Llevo las redes de una especialista en endodoncia en Oaxaca: carruseles educativos y reels para Instagram, TikTok y Facebook.",
    challenge: "Explicar tratamientos que suelen dar miedo, como la endodoncia, de forma clara y generar confianza antes de la primera consulta.",
    role: "Planeo el contenido, diseño los carruseles con su identidad visual, edito los reels y organizo las publicaciones en las tres redes.",
    solution: "Un perfil consistente que resuelve dudas frecuentes de pacientes y muestra el consultorio, con destacadas por tratamiento y testimonios.",
  },
  {
    number: "06", tone: "05", title: "Gato Mamado", type: "Proyecto propio · Reels animados de fitness", private: false,
    image: "/projects/gato-mamado-fitness.webp", width: 1265, height: 712,
    imageAlt: "Reels animados de Gato Mamado: dos gatos personajes presentan tops de proteína, músculos y mitos del gym",
    href: "https://www.instagram.com/pamsbcat/", linkLabel: "Ver Instagram",
    socials: [{ label: "TikTok", href: "https://www.tiktok.com/@pamsb_" }],
    videos: [
      { src: "/projects/videos/gato-mamado-proteina.mp4", poster: "/projects/videos/gato-mamado-proteina.webp", label: "Reel: ¿cuánta proteína necesitas?" },
      { src: "/projects/videos/gato-mamado-errores.mp4", poster: "/projects/videos/gato-mamado-errores.webp", label: "Reel: 5 errores de principiante en el gym" },
    ],
    detail: "Mi propia cuenta de fitness: reels animados con dos personajes que explican gym y suplementos en formato top 5.",
    challenge: "Hacer que temas de gym y suplementos se entiendan rápido y den ganas de ver el video completo.",
    role: "Creé los personajes, escribo los guiones y animo y edito cada reel para Instagram y TikTok.",
    solution: "Una serie con formato fijo (top 5, mitos, qué sí sirve y qué no) que se puede producir seguido sin perder estilo.",
  },
];

const spiderWeb = (
  <svg className="spider-web" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
    <g fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
      <path d="M200 0 0 0M200 0 20 90M200 0 70 160M200 0 140 195M200 0 200 200" pathLength={1} />
      <path d="M170 0Q176 16 173 26Q184 28 200 30" pathLength={1} />
      <path d="M130 0Q140 30 133 46Q148 60 157 69Q170 64 200 64" pathLength={1} />
      <path d="M88 0Q100 42 92 64Q118 88 118 108Q150 112 200 106" pathLength={1} />
      <path d="M44 0Q60 56 50 82Q86 118 90 142Q124 150 200 146" pathLength={1} />
    </g>
  </svg>
);

export default function Home() {
  return (
    <>
      <div className="intro" aria-hidden="true">
        <div className="intro-brand"><span className="line"><span>Pamsb<i>.</i></span></span></div>
        <div className="intro-meta"><span>Redes · Video · Web · Sistemas</span><span className="intro-count" /></div>
        <div className="intro-bar"><span /></div>
      </div>
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
          <div className="eyebrow"><span>Pamsb · Marketing y desarrollo para negocios</span><span>Oaxaca, México</span></div>
          <h1 id="hero-title"><span className="line"><span>Tu negocio.</span></span><span className="line"><span>Su próxima <em>versión digital.</em></span></span></h1>
          <div className="hero-bottom">
            <p>Manejo tus redes, creo tus videos y desarrollo páginas web, catálogos y sistemas para que tu negocio se vea bien y tus clientes te encuentren.</p>
            <div className="hero-actions"><a className="button button-primary" href={whatsappQuote} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Cotiza por WhatsApp</a><a className="button button-glass" href="#proyectos">Ver proyectos <ArrowDownRight aria-hidden="true" /></a></div>
          </div>
        </section>
        <div className="marquee" aria-hidden="true">
          {[0].map((row) => (
            <div className={`marquee-row marquee-row--${row}`} key={row}>
              <div className="marquee-track">
                {[...marqueeItems, ...marqueeItems].map((item, index) => <span key={index}>{item}<i>✦</i></span>)}
              </div>
            </div>
          ))}
        </div>
        <section id="servicios" className="services shell" aria-labelledby="services-title">
          <div className="section-heading" data-reveal><span>01 / Servicios</span><h2 id="services-title"><span className="line"><span>Lo que puedes pedir.</span></span><span className="line"><span><em>Sin vueltas.</em></span></span></h2></div>
          <div className="service-grid">
            {serviceGroups.map((group) => (
              <article className="service-card service-group-card" key={group.label} data-reveal>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((service) => {
                    const Icon = service.icon;
                    return (
                      <li key={service.title}>
                        <span className="service-icon"><Icon aria-hidden="true" /></span>
                        <span><strong>{service.title}</strong><span>{service.description}</span></span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
          <div className="process-strip" aria-label="Proceso de trabajo" data-reveal>
            <span>Cómo empezamos</span>
            <ol>
              {workflow.map((step) => <li key={step}><CheckCircle2 aria-hidden="true" /> {step}</li>)}
            </ol>
          </div>
        </section>
        <section id="proyectos" className="projects shell" aria-labelledby="projects-title">
          <div className="section-heading" data-reveal><span>02 / Proyectos seleccionados</span><h2 id="projects-title"><span className="line"><span>Ideas distintas.</span></span><span className="line"><span><em>Soluciones a medida.</em></span></span></h2></div>
          <p className="swipe-hint" aria-hidden="true">Desliza para ver más →</p>
          <div className="project-grid">{projects.map((project) => (
            <article className={`project${project.private ? " project--featured" : ""}`} key={project.number} aria-labelledby={`project-${project.number}`} data-reveal>
              <div className="project-topline"><span>{project.number} / {project.type}</span>{project.private && <span className="private-badge"><LockKeyhole aria-hidden="true" /> Uso interno</span>}</div>
              <div className="project-heading">
                <h3 id={`project-${project.number}`}>{project.title}</h3>
              </div>
              {project.videos ? (
                <div className={`project-visual project-reels project-visual--${project.tone}`}>
                  <div className="reels-stage">
                    {project.videos.map((video) => (
                      <figure className="reel" key={video.src}>
                        <video src={`${basePath}${video.src}`} poster={`${basePath}${video.poster}`} muted loop playsInline preload="none" data-autoplay aria-label={video.label} />
                      </figure>
                    ))}
                  </div>
                  <span className="preview-hint reels-hint"><Play aria-hidden="true" /> Reels reales</span>
                </div>
              ) : <ProjectPreview title={project.title} src={`${basePath}${project.image}`} alt={project.imageAlt} width={project.width} height={project.height} confidential={project.private} tone={project.private ? "project-visual--private" : `project-visual--${project.tone ?? project.number}`} />}
              <p className="project-intro">{project.detail}</p>
                {project.href && <div className="project-links"><a className="project-site-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.linkLabel ?? "Explorar sitio"} de ${project.title} (abre en otra pestaña)`}>{project.linkLabel ?? "Explorar sitio"} <ArrowUpRight aria-hidden="true" /></a>
                {project.socials?.map((social) => <a key={social.label} className="project-site-link" href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`${social.label} de ${project.title} (abre en otra pestaña)`}>{social.label} <ArrowUpRight aria-hidden="true" /></a>)}</div>}
              <details className="project-details">
                <summary>Cómo se hizo <ArrowDownRight aria-hidden="true" /></summary>
                <dl className="project-story"><div><dt>El reto</dt><dd>{project.challenge}</dd></div><div><dt>Mi trabajo</dt><dd>{project.role}</dd></div><div><dt>La solución</dt><dd>{project.solution}</dd></div></dl>
              </details>
              {project.private && <p className="project-confidentiality"><LockKeyhole aria-hidden="true" /><span>Uso interno: solo muestro capturas, sin acceso al sistema ni a sus datos. OXXO no avala este portafolio.</span></p>}
            </article>
          ))}</div>
        </section>
        <section id="clientes" className="testimonials shell" aria-labelledby="testimonials-title">
          <div className="section-heading" data-reveal><span>03 / Clientes</span><h2 id="testimonials-title"><span className="line"><span>Lo que dicen</span></span><span className="line"><span><em>quienes ya trabajaron conmigo.</em></span></span></h2></div>
          <p className="swipe-hint" aria-hidden="true">Desliza para ver más →</p>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <figure className="testimonial" key={item.name} data-reveal>
                <span className="testimonial-mark" aria-hidden="true">“</span>
                <blockquote>{item.quote}</blockquote>
                <figcaption><span className="testimonial-avatar" aria-hidden="true">{item.initials}</span><span><strong>{item.name}</strong><span>{item.business}</span></span></figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section id="sobre-mi" className="about shell" aria-labelledby="about-title">
          <div className="section-heading" data-reveal><span>04 / Sobre mí</span><h2 id="about-title"><span className="line"><span>Diseño con intención.</span></span><span className="line"><span><em>Desarrollo con propósito.</em></span></span></h2></div>
          <div className="about-grid">
            <div className="about-copy" data-reveal><h3>Hola, soy Ángel Franco.</h3><p className="lead">Desde Oaxaca llevo las redes, el contenido y el desarrollo web de negocios y proyectos independientes: desde las publicaciones y los videos hasta el sitio, el catálogo o el sistema que lo sostiene. Me enfoco en que cada persona encuentre lo que necesita y pueda dar el siguiente paso con facilidad.</p><ul className="skills" aria-label="Áreas de trabajo"><li><Code2 aria-hidden="true" /> Desarrollo web</li><li>Contenido y redes</li><li>Video</li><li>Anuncios en Meta</li><li>Diseño de interfaces</li><li>Dashboards</li></ul></div>
          </div>
        </section>
      </main>
      <footer id="contacto">
        <div className="shell contact">
          <span className="footer-label">05 / Contacto</span>
          <div className="contact-grid" data-reveal>
            <h2><span className="line"><span>Tu idea puede</span></span><span className="line"><span><em>empezar aquí.</em></span></span></h2>
            <div className="contact-copy">
              <p>¿Quieres que te lleve las redes, una página, un catálogo o una herramienta para tu equipo? Mándame un mensaje con tu idea y te digo qué camino conviene.</p>
              <a className="button button-primary" href={whatsappQuote} target="_blank" rel="noopener noreferrer" aria-label="Cotiza tu proyecto por WhatsApp al +52 951 280 0070 (abre en otra pestaña)"><MessageCircle aria-hidden="true" /> Cotizar por WhatsApp <ArrowUpRight aria-hidden="true" /></a>
              <p className="contact-phone">+52 951 280 0070</p>
              <a className="contact-email" href={`mailto:${email}`}><Mail aria-hidden="true" /><span>{email.split("@")[0]}<wbr />@{email.split("@")[1]}</span><ArrowUpRight aria-hidden="true" /></a>
              <div className="contact-social">
                {socialLinks.map((social) => (
                  <a key={social.label} className="contact-email" href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`${social.label} ${social.handle} (abre en otra pestaña)`}>
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={social.path} /></svg>
                    <span>{social.handle}</span>
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom"><span>© 2026 Pamsb · Ángel Franco</span><span><MapPin aria-hidden="true" /> Oaxaca, México</span><a href="#inicio">Volver al inicio ↑</a></div>
        </div>
      </footer>
      <a className="whatsapp-fab" href={whatsappQuote} target="_blank" rel="noopener noreferrer" aria-label="Cotizar por WhatsApp (abre en otra pestaña)"><MessageCircle aria-hidden="true" /><span>Cotizar</span></a>
    </>
  );
}
