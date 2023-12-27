import Home from './pages/Home';
import BTS from './pages/BTS'
import ShoppingCenters from './pages/ShoppingCenters'
import StripMalls from './pages/StripMalls'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bts" element={<BTS />} />
        <Route path="/shopping-centers" element={<ShoppingCenters />} />
        <Route path="/strip-malls" element={<StripMalls />} />
      </Routes>
      {/* <Header />
      <CardBTS />
      <Cadastro />
      <Footer />
      <Termos /> */}

      {/* <CarroselPrimeiro />
      <QuemSomos />
      <Oportunidades />
      <AreasAtuacao />
      <Incorporacoes />
      <Cadastro />
      <Footer />
      <Termos /> */}
    </>
  );
};

export default App;