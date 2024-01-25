import Header from '../components/Header'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import Contato from '../components/FormCadastro'
import Localizacao from '../components/Localizacao'
import Sobre from '../components/Sobre'
import PlantaBaixa from '../components/Planta'
import CarroselEmpreendimento from '../components/CarroselEmpreendimento'
import Navbar from '../components/Navbar'
import Json from '../../public/Json/jsonPrincipal.json'
import Whatsapp from '../components/Whatsapp'

import { useParams } from 'react-router-dom';

const Drogasil = () => {

    const { empreendimento } = useParams();

    const [namePage] = Json.filter((empreend) => {
        return empreend.name.toLowerCase().replace(/ /g, "-").includes(empreendimento);
    })
    return (
        <>  
            <Whatsapp/>
            <Navbar />
            <Header />
            <CarroselEmpreendimento images={namePage.images}/>
            <Sobre sobre={namePage.sobre} />
            <PlantaBaixa plantas={namePage.plantaBaixa} />
            <Localizacao localizacao={namePage.localizacao} />
            <Contato objectName={namePage} />
            <Footer />
            <Termos />
        </>
    )
}

export default Drogasil;