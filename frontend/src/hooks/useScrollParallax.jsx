import { useEffect } from 'react';

// Este hook expone la variable --scroll-progress (0..1) al <html>
// para que el CSS pueda animar elementos basados en el scroll.
export default function useScrollParallax() {
  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const max = window.innerHeight * 1.3;
      const ratio = Math.min(1, Math.max(0, scrollY / max));
      document.documentElement.style.setProperty('--scroll-progress', ratio.toString());
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
}
