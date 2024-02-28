import Header from '../components/Header'
import PrimeiroCarrosel from '../components/CarroselHome'
import QuemSomos from '../components/Quem-Somos'
import Oportunidades from '../components/Oportunidades'
import AreasAtuacao from '../components/AreasAtuacao'
import Incorporacao from '../components/Incorporações'
import EmpresasParceiras from '../components/EmpresasParceiras'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import Navbar from '../components/Navbar'
import Whatsapp from '../components/Whatsapp'
import AreasAtuacaoMobile from '../components/AreasAtuacaoMobile'

const Home = () => {
    return (
        <>
            <Whatsapp/>
            <Navbar />
            <Header />
            <PrimeiroCarrosel />
            <QuemSomos />
            <Oportunidades />
            <AreasAtuacao />
            <AreasAtuacaoMobile />
            <Incorporacao />
            <EmpresasParceiras />
            <Cadastro />
            <Footer />
            <Termos />
        </>
    )
}

export default Home;