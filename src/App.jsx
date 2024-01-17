import Home from './pages/Home';
import BTS from './pages/BTS'
import ShoppingCenters from './pages/ShoppingCenters'
import StripMalls from './pages/StripMalls'
import Drogasil from './pages/Drogasil'
import { Routes, Route } from 'react-router-dom';
import Oportunidades from './pages/Oportunidades';
import Incorporacoes from './pages/Incorporacoes';
import Contato from './pages/Contato'

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bts" element={<BTS />} />
        <Route path="/shopping-centers" element={<ShoppingCenters />} />
        <Route path="/strip-malls" element={<StripMalls />} />
        <Route path="/drogasil" element={<Drogasil />} />
        <Route path="/oportunidades" element={<Oportunidades />} />
        <Route path="/incorporacoes" element={<Incorporacoes />} />
        <Route path="/bts/drogasil" element={<Drogasil />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
};

export default App;