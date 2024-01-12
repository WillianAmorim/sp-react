import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import Contato from '../components/Contato'
import Localizacao from '../components/Localizacao'
import Sobre from '../components/Sobre'
import Img from '../../public/IMAGENS_SITE_SAO_PAULO/AREAS DE ATUAÇÃO/BTS (BUILT TO SUIT)/Drogasil - Cohatrac I.jpg'

const Drogasil = () => {
    return (
        <>  
            <Header />
            <img src={Img} alt="" width="100%" height="700px"/>
            <Sobre />
            <Localizacao />
            <Contato />
            <Footer />
            <Termos />
        </>
    )
}

export default Drogasil;