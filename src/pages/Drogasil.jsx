import Header from '../components/Header'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import Contato from '../components/Contato'
import Localizacao from '../components/Localizacao'
import Sobre from '../components/Sobre'
import PlantaBaixa from '../components/Planta'
import Img from '../../public/IMAGENS_SITE_SAO_PAULO/drogasilNova.jpg'

import { ImgDrogasil } from "../styles/PaginaEmpreendimento";

const Drogasil = () => {
    return (
        <>  
            <Header />
            <ImgDrogasil src={Img} alt="" width="100%" height="700px"/>
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