import { H1Container, DivPlanta } from "../styles/PaginaEmpreendimento";

import Img1 from '../../public/IMAGENS_SITE_SAO_PAULO/planta1.jpeg'
import Img2 from '../../public/IMAGENS_SITE_SAO_PAULO/planta2.jpeg'

const PlantaBaixa = () => {
    return (
        <>
            <H1Container>Planta</H1Container>
            <DivPlanta id="div-planta">
                <img src={Img1} alt="" />
                <img src={Img2} alt="" />
            </DivPlanta>
        </>
    );
}

export default PlantaBaixa;