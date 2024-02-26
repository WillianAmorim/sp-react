import Header from '../components/Header'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import FormEmpreendimento from '../components/FormEmpreendimento'
import Localizacao from '../components/Localizacao'
import Sobre from '../components/Sobre'
import PlantaBaixa from '../components/Planta'
import CarroselEmpreendimento from '../components/CarroselEmpreendimento'
import Navbar from '../components/Navbar'
import data from '../../public/Json/JsonEmpreendimentos.json'
import Whatsapp from '../components/Whatsapp'
import Cadastro from '../components/Cadastro'

import { useParams } from 'react-router-dom';

const PageEmpreendimento = () => {

    const { pagEmpreendimento } = useParams();

    const [filterCard] = data.filter((empreendimento) => empreendimento.name.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "") === pagEmpreendimento)
    console.log(filterCard)
    

    return (
        <>  
            <Whatsapp/>
            <Navbar />
            <Header />
            <CarroselEmpreendimento images={filterCard.images}/>
            <Sobre sobre={filterCard.sobre} />
            {filterCard.plantaBaixa ? <PlantaBaixa plantas={filterCard.plantaBaixa} /> : ''}
            <Localizacao localizacao={filterCard.localizacao} />
            {/* <Cadastro /> */}
            <FormEmpreendimento objectName={filterCard} />
            <Footer />
            <Termos />
        </>
    )
}

export default PageEmpreendimento;