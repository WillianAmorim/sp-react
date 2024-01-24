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

import { useParams } from 'react-router-dom';

const Drogasil = () => {

    const { empreendimento } = useParams();

    const [namePage] = Json.filter((empreend) => {
        return empreend.name.toLowerCase().replace(/ /g, "-").includes(empreendimento);
    })
    console.log(namePage.name)
    return (
        <>  
            <Navbar />
            <Header />
            <CarroselEmpreendimento name={namePage.name}/>
            <Sobre objectName={namePage} />
            <PlantaBaixa objectName={namePage} />
            <Localizacao objectName={namePage} />
            <Contato objectName={namePage} />
            <Footer />
            <Termos />
        </>
    )
}

export default Drogasil;