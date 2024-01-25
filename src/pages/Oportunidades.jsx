import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import CardsOportunidades from '../components/CardsOportunidades'
import Navbar from '../components/Navbar'
import Whatsapp from '../components/Whatsapp'

const Oportunidades = () => {
    return (
        <>
            <Whatsapp/>
            <Navbar />
            <Header />
            <CardsOportunidades/>
            <Cadastro />
            <Footer />
            <Termos />
        </>
    )
}

export default Oportunidades;