import Mapa from '../assets/images/mapa.png'

import { QuemSomosContainer } from '../styles/QuemSomos-style';

const QuemSomos = () => {
    return (
        <QuemSomosContainer>
            <div>
                <h1>Quem somos</h1>
                <p>Com três décadas de história, o Grupo São Paulo oferece soluções imobiliárias em quatro cidades brasileiras: São Luís (MA), Imperatriz (MA), Belém (PA) e Distrito Federal. Alinhando-se às expectativas dos clientes, atuamos em diversos ramos imobiliários como Shopping Centers, Strip Malls, BTS e Incorporações. Focando em inovação e desenvolvimento de negócios, somos uma marca reconhecida nacionalmente por qualidade e comprometimento com o cliente.</p>
            </div>

            <img src={Mapa} alt="" />
        </QuemSomosContainer>
    );
}

export default QuemSomos;