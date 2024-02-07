import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Contato from './pages/Contato'
import Empreendimento from './pages/CardEmpreendimento'
import PaginaEmpreendimento from './pages/PaginaEmpreendimento'

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empreendimento/:id" element={<Empreendimento />} />
        <Route path="/empreendimento/:id/:pagEmpreendimento/" element={<PaginaEmpreendimento />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/regiao/id" element={<Contato />} />
      </Routes>
    </>
  );
};

export default App;
