import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import Navbar from '../components/Navbar'
import FormContato from '../components/FormContato'
import Whatsapp from '../components/Whatsapp'

const Home = () => {
    return (
        <>
            <Whatsapp/>
            <Navbar />
            <Header />
            <FormContato />
            <Cadastro />
            <Footer />
            <Termos />
        </>
    )
}

export default Home;