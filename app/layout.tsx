import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = "https://pamsb117.github.io/bypamsb/";
const title = "Pamsb · Páginas web, catálogos y dashboards";
const description = "Diseño y desarrollo páginas web, catálogos con pedidos por WhatsApp y dashboards para negocios locales y proyectos en Oaxaca, México.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  openGraph: {
    title, description, url: siteUrl, siteName: "Pamsb", locale: "es_MX", type: "website",
    images: [{ url: `${siteUrl}og.png`, alt: "Pamsb. Páginas web, catálogos digitales y dashboards para negocios." }],
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
