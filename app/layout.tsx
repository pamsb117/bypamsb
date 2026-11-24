import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = "https://pamsb117.github.io/bypamsb/";
const title = "Pamsb · Redes, video, páginas web y sistemas para negocios";
const services = ["Redes sociales", "Videos promocionales", "Anuncios en Meta", "Identidad de marca", "Página web para negocio", "Catálogo con pedidos por WhatsApp", "Citas y punto de venta", "Dashboard o panel interno", "Asistente con IA"];
const description = "Contenido para redes, videos, anuncios en Meta, páginas web, catálogos con pedidos por WhatsApp, sistemas de citas y dashboards para negocios en Oaxaca, México.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}#negocio`,
  name: "Pamsb",
  alternateName: "bypamsb",
  description,
  url: siteUrl,
  image: `${siteUrl}og-pamsb.png`,
  logo: `${siteUrl}favicon.svg`,
  telephone: "+52 951 280 0070",
  email: "angeldejesus.franco20@gmail.com",
  priceRange: "$$",
  address: { "@type": "PostalAddress", addressLocality: "Oaxaca", addressRegion: "Oaxaca", addressCountry: "MX" },
  areaServed: [{ "@type": "State", name: "Oaxaca" }, { "@type": "Country", name: "México" }],
  founder: { "@type": "Person", name: "Ángel Franco", jobTitle: "Marketing digital y desarrollo web" },
  sameAs: ["https://www.tiktok.com/@pamsb_", "https://github.com/pamsb117"],
  contactPoint: { "@type": "ContactPoint", contactType: "ventas", telephone: "+52 951 280 0070", url: "https://wa.me/529512800070", availableLanguage: "es" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios",
    itemListElement: services.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name, areaServed: "Oaxaca, México" } })),
  },
};

export const viewport: Viewport = { themeColor: "#1B1E27", colorScheme: "dark" };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  openGraph: {
    title, description, url: siteUrl, siteName: "Pamsb", locale: "es_MX", type: "website",
    images: [{ url: `${siteUrl}og-pamsb.png`, width: 1200, height: 630, alt: "Pamsb. Redes, video, páginas web y sistemas para negocios." }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}og-pamsb.png`] },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "try{var k='pamsb-intro';if(sessionStorage.getItem(k))document.documentElement.classList.add('intro-seen');else sessionStorage.setItem(k,'1')}catch(e){document.documentElement.classList.add('intro-seen')}" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="antialiased">
        <div className="ambient" aria-hidden="true"><span /><span /><span /></div>
        {children}
      </body>
    </html>
  );
}
