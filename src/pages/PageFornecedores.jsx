import Header from '../components/Header'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import Navbar from '../components/Navbar'
import FormFornecedores from '../components/FormFornecedores'
import Whatsapp from '../components/Whatsapp'
import BannerSpFornecedores from '../components/BannerSpFornecedores'

const Home = () => {
    return (
        <>
            <Whatsapp/>
            <Navbar />
            <Header />
            <BannerSpFornecedores/>
            <FormFornecedores />
            <Footer />
            <Termos />
        </>
    )
}

export default Home;