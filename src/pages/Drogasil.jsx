import Header from '../components/Header'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import Contato from '../components/Contato'
import Localizacao from '../components/Localizacao'
import Sobre from '../components/Sobre'
import PlantaBaixa from '../components/Planta'
import CarroselEmpreendimento from '../components/CarroselEmpreendimento'

const Drogasil = () => {
    return (
        <>  
            <Header />
            <CarroselEmpreendimento/>
            <Sobre />
            <PlantaBaixa />
            <Localizacao />
            <Contato />
            <Footer />
            <Termos />
        </>
    )
}

export default Drogasil;