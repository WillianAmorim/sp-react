import Header from '../components/Header'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import Contato from '../components/FormCadastro'
import Localizacao from '../components/Localizacao'
import Sobre from '../components/Sobre'
import PlantaBaixa from '../components/Planta'
import CarroselEmpreendimento from '../components/CarroselEmpreendimento'
import Navbar from '../components/Navbar'

const Drogasil = () => {
    return (
        <>  
            <Navbar />
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