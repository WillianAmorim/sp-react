import Home from './pages/Home';
import BTS from './pages/BTS'
import ShoppingCenters from './pages/ShoppingCenters'
import StripMalls from './pages/StripMalls'
import Drogasil from './pages/Drogasil'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bts" element={<BTS />} />
        <Route path="/shopping-centers" element={<ShoppingCenters />} />
        <Route path="/strip-malls" element={<StripMalls />} />
        <Route path="/drogasil" element={<Drogasil />} />
        <Route path="/oportunidade" element={<Drogasil />} />
      </Routes>
    </>
  );
};

export default App;