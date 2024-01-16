import Header from '../components/Header'
import PrimeiroCarrosel from '../components/Carrosel-Primeiro'
import QuemSomos from '../components/Quem-Somos'
import Oportunidades from '../components/Oportunidades'
import AreasAtuacao from '../components/AreasAtuacao'
import Incorporacao from '../components/Incorporações'
import EmpresasParceiras from '../components/EmpresasParceiras'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <PrimeiroCarrosel />
            <QuemSomos />
            <Oportunidades />
            <AreasAtuacao />
            <Incorporacao />
            <EmpresasParceiras />
            <Cadastro />
            <Footer />
            <Termos />

        </>
    )
}

export default Home;