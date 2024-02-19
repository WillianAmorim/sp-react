import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
import Whatsapp from '../components/Whatsapp'
import SlideSetor from '../components/SlideSetor'
import { useParams } from 'react-router-dom';
import dataEmpreendimentos from '../../public/Json/JsonEmpreendimentos.json'
import dataSlide from '../../public/Json/SlideSetores.json'

const Empreendimento = () => {

    const { id } = useParams();

    const filterCards = dataEmpreendimentos.filter((empreendimento) => empreendimento.category === id)

    const [filterSlide] = dataSlide.filter((objSlide) => objSlide.setorName === id)

    return (
        <>
            <Whatsapp />
            <Navbar />
            <Header />
            <SlideSetor slide={filterSlide.arrayImg} />
            <Cards arrayCards={filterCards} />
            <Cadastro />
            <Footer />
            <Termos />
        </>
    )
}

export default Empreendimento;