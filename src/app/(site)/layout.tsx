import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeProvider";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
