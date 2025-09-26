import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is updated after route change
    const timer = setTimeout(() => {
      const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .fade-in"));
      if (!els.length) return;
      
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              // once visible, unobserve to avoid repeated work
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      
      els.forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Re-run when route changes

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
