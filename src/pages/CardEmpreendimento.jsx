import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
import Whatsapp from '../components/Whatsapp'
import { useParams } from 'react-router-dom';
import data from '../../public/Json/JsonEmpreendimentos.json'

const Empreendimento = () => {

    const { id } = useParams();

    const filterCards = data.filter((empreendimento) => empreendimento.category === id)

    return (
        <>
            <Whatsapp />
            <Navbar />
            <Header />
            <Cards arrayCards={filterCards} />
            <Cadastro />
            <Footer />
            <Termos />
        </>
    )
}

export default Empreendimento;