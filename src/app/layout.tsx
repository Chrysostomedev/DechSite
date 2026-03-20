import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COCO D'OR BIO — Recyclage & Revalorisation des Déchets | Côte d'Ivoire",
  description:
    "COCO D'OR BIO, entreprise ivoirienne spécialisée dans la collecte, l'assainissement et la revalorisation des déchets.",
  keywords: ["recyclage", "déchets", "Côte d'Ivoire", "assainissement", "revalorisation", "coco d'or bio"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
