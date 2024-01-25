import Home from './pages/Home';
import BTS from './pages/BTS'
import ShoppingCenters from './pages/ShoppingCenters'
import StripMalls from './pages/StripMalls'
import Drogasil from './pages/Drogasil'
import { Routes, Route } from 'react-router-dom';
import Oportunidades from './pages/Oportunidades';
import Incorporacoes from './pages/Incorporacoes';
import Contato from './pages/Contato'

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
        <Route path="/bts" element={<BTS />} />
        <Route path="/shopping-centers" element={<ShoppingCenters />} />
        <Route path="/strip-malls" element={<StripMalls />} />
        <Route path="/drogasil" element={<Drogasil />} />
        <Route path="/oportunidades" element={<Oportunidades />} />
        <Route path="/incorporacoes" element={<Incorporacoes />} />
        <Route path="/contato" element={<Contato />} />

        <Route path="/bts/:empreendimento" element={<Drogasil />} />
        <Route path="/incorporacoes/:empreendimento" element={<Drogasil />} />
        <Route path="/oportunidades/:empreendimento" element={<Drogasil />} />
        <Route path="/shopping-centers/:empreendimento" element={<Drogasil />} />
        <Route path="/strip-malls/:empreendimento" element={<Drogasil />} />

      </Routes>
    </>
  );
};

export default App;