import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      
      // Wait longer to allow images to load so the layout doesn't shift after scrolling
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Account for fixed header height (approx 100px)
          const yOffset = -100; 
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 500);

      return () => clearTimeout(timeoutId);
    }

    // Force scroll to top immediately if no hash is present
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, hash]);

  return null;
};