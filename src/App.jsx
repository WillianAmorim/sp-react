import Home from './pages/Home';
import BTS from './pages/BTS'
import ShoppingCenters from './pages/ShoppingCenters'
import StripMalls from './pages/StripMalls'
import Drogasil from './pages/Drogasil'
import { Routes, Route } from 'react-router-dom';
import Oportunidades from './components/Oportunidades';
import Incorporacoes from './components/Incorporações';

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
      </Routes>
    </>
  );
};

export default App;