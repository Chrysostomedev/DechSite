import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "COCDECH — Coco D'Or Bio | Valorisation des déchets de coco",
  description:
    "COCDECH transforme les déchets de noix de coco en charbon écologique de qualité. Marque Coco D'Or Bio — Abidjan, Côte d'Ivoire.",
  keywords: ["charbon coco", "écologie", "Côte d'Ivoire", "Abidjan", "bio", "recyclage", "coco d'or"],
  openGraph: {
    title: "COCDECH — Coco D'Or Bio",
    description: "Le charbon écologique ivoirien né des déchets de coco.",
    locale: "fr_CI",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
