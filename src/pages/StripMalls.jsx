import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import StripMallsComponent from '../components/CardsStripMalls';
import Navbar from '../components/Navbar'
import Whatsapp from '../components/Whatsapp'

const StripMalls = () => {
    return (
        <>
            <Whatsapp/>
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