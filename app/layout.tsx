import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = "https://pamsb117.github.io/bypamsb/";
const title = "Ángel Franco · Diseño y desarrollo web";
const description = "Sitios web, catálogos digitales y dashboards para negocios. Conoce los proyectos de Ángel Franco, diseñador y desarrollador web en Oaxaca, México.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  openGraph: {
    title, description, url: siteUrl, siteName: "Ángel Franco", locale: "es_MX", type: "website",
    images: [{ url: `${siteUrl}og.png`, alt: "Ángel Franco. Diseño y desarrollo web. Sitios, catálogos y dashboards." }],
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
