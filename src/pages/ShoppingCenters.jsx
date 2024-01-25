import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import CardsShoppingCenters from '../components/CardsShoppingCenters'
import Navbar from '../components/Navbar'
import Whatsapp from '../components/Whatsapp'

const ShoppingCenters = () => {
    return (
        <>
            <Whatsapp/>
            <Navbar />
            <Header />
            <CardsShoppingCenters />
            <Cadastro />
            <Footer />
            <Termos />
        </>
    )
}

export default ShoppingCenters;