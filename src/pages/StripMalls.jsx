import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import StripMallsComponent from '../components/StripMalls';

const StripMalls = () => {
    return (
        <>
            <Header />
            <StripMallsComponent />
            <Cadastro />
            <Footer />
            <Termos />

        </>
    )
}

export default StripMalls;