import Home from './pages/PageHome';
import { Routes, Route } from 'react-router-dom';
import Contato from './pages/PageContato'
import Empreendimento from './pages/PageCategorias'
import PaginaEmpreendimento from './pages/PageEmpreendimento'
import PaginaLocacoes from './pages/PageLocacoes'
import PaginaFornecedores from './pages/PageFornecedores'
import EmBreve from './components/EmBreve';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PaginaRegional from './pages/PageRegional';

const App = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<EmBreve />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/empreendimento/:id" element={<Empreendimento />} />
        <Route path="/empreendimento/:id/:pagEmpreendimento/" element={<PaginaEmpreendimento />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/regiao/:id" element={<PaginaRegional />} />
        <Route path="/empreendimento/:id" element={<PaginaRegional />} />
        <Route path="/locacoes" element={<PaginaLocacoes />} />
        <Route path="/fornecedores" element={<PaginaFornecedores />} />
      </Routes>
    </>
  );
};

export default App;
