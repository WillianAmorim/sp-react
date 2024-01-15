import ImgDrog from '../../public/IMAGENS_SITE_SAO_PAULO/drogasilNova.jpg'

import { ImgDrogasil, DivAbsolute } from "../styles/PaginaEmpreendimento";

const CarroselEmpreendimento = () => {
    return (
        <> 
            <DivAbsolute>
                <p>Olá tudo bem</p>
                <p>Olá tudo bem</p>
                <p>Olá tudo bem</p>
            </DivAbsolute>
            <ImgDrogasil src={ImgDrog} alt="" width="100%" height="700px"/>
        </>
    )
}

export default CarroselEmpreendimento;