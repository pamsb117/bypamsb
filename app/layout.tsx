import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = "https://pamsb117.github.io/bypamsb/";
const title = "Pamsb · Redes, video, páginas web y sistemas para negocios";
const description = "Contenido para redes, videos, anuncios en Meta, páginas web, catálogos con pedidos por WhatsApp, sistemas de citas y dashboards para negocios en Oaxaca, México.";

export const viewport: Viewport = { themeColor: "#1B1E27", colorScheme: "dark" };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  openGraph: {
    title, description, url: siteUrl, siteName: "Pamsb", locale: "es_MX", type: "website",
    images: [{ url: `${siteUrl}og.png`, alt: "Pamsb. Redes, video, páginas web y sistemas para negocios." }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}og.png`] },
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
    <html lang="es">
      <body className="antialiased">
        <div className="ambient" aria-hidden="true"><span /><span /><span /></div>
        {children}
      </body>
    </html>
  );
}
