import Header from '../components/Header'
import Cadastro from '../components/Cadastro'
import Footer from '../components/Footer'
import Termos from '../components/Termos'
import Navbar from '../components/Navbar'
import Whatsapp from '../components/Whatsapp'
import CardRegional from '../components/CardRegional';

import Json from '../../public/Json/JsonEmpreendimentos.json'

import { useParams } from "react-router-dom";

const PaginaRegional = () => {

    const { id } = useParams();

    const arrayRegional = Json.filter((empreendimento) => {
        // return empreendimento
        return empreendimento.estado?.toLowerCase() == id
    })

    console.log(id)

    return (
        <>
            <Whatsapp />
            <Navbar />
            <Header />
            <CardRegional arrayItemEstado={arrayRegional} />
            <Cadastro />
            <Footer />
            <Termos />
        </>
    )
}

export default PaginaRegional;