import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import StripMallsComponent from '../components/CardsStripMalls';
import Navbar from '../components/Navbar'

const StripMalls = () => {
    return (
        <>
            <Navbar />
            <Header />
            <StripMallsComponent />
            <Cadastro />
            <Footer />
            <Termos />

        </>
    )
}

export default StripMalls;