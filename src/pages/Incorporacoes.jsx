import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import CardsIncorporacoes from '../components/CardsIncorporacao'
import Navbar from '../components/Navbar'

const Incorporacao = () => {
    return (
        <>
            <Navbar />
            <Header />
            <CardsIncorporacoes/>
            <Cadastro />
            <Footer />
            <Termos />
        </>
    )
}

export default Incorporacao;