import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import CardsBTS from '../components/CardsBTS'

const Home = () => {
    return (
        <>
            <Header />
            <CardsBTS />
            <Cadastro />
            <Footer />
            <Termos />
        </>
    )
}

export default Home;