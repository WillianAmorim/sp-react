import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import CardsBTS from '../components/CardsBTS'
import Navbar from '../components/Navbar'

const Bts = () => {
    return (
        <>
            <Navbar />
            <Header />
            <CardsBTS />
            <Cadastro />
            <Footer />
            <Termos />
        </>
    )
}

export default Bts;