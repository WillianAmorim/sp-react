import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import Navbar from '../components/Navbar'
import FormContato from '../components/FormContato'
import Whatsapp from '../components/Whatsapp'
import BannerSp from '../components/BannerSp'

const Home = () => {
    return (
        <>
            <Whatsapp/>
            <Navbar />
            <Header />
            <BannerSp/>
            <FormContato />
            {/* <Cadastro /> */}
            <Footer />
            <Termos />
        </>
    )
}

export default Home;