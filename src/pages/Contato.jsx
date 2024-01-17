import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import Navbar from '../components/Navbar'
import Localizacao from '../components/Localizacao'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Localizacao/>
            <Cadastro />
            <Footer />
            <Termos />
            

        </>
    )
}

export default Home;