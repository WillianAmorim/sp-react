import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import Contato from '../components/Contato'
import Localizacao from '../components/Localizacao'
import Sobre from '../components/Sobre'

const Drogasil = () => {
    return (
        <>
            <Header />
            <Sobre />
            <Localizacao />
            <Contato />
            {/* <Footer />
            <Termos /> */}
        </>
    )
}

export default Drogasil;