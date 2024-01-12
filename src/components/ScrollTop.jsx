// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Antes de alterar a rota, ajusta o comportamento da rolagem
    const onBeforeUnload = () => {
      window.history.scrollRestoration = 'manual';
    };

    // Após a alteração da rota, restaura o comportamento padrão da rolagem
    const onNavigation = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.scrollRestoration = 'auto';
    };

    window.addEventListener('beforeunload', onBeforeUnload);
    window.addEventListener('popstate', onNavigation);

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
      window.removeEventListener('popstate', onNavigation);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
