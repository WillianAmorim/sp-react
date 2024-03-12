// import Mapa from '../assets/images/mapa.png'
import Mapa from '/FOTOS-NOVO-GUI/Mapa.jpg'

import { QuemSomosContainer } from '../styles/QuemSomos-style';

const QuemSomos = () => {
    return (
        <QuemSomosContainer>
            <div data-aos="fade-up-right" data-aos-duration="1500">
                <h1>Quem somos</h1>
                <p>Com três décadas de história, o Grupo São Paulo oferece soluções imobiliárias em cinco cidades brasileiras: São Luís (MA), Imperatriz (MA), Belém (PA), Distrito Federal e Ceará. Alinhando-se às expectativas dos clientes, atuamos em diversos ramos imobiliários como Shopping Centers, Strip Malls, BTS e Incorporações. Focando em inovação e desenvolvimento de negócios, somos uma marca reconhecida nacionalmente por qualidade e comprometimento com o cliente.</p>
            </div>

            <img data-aos="fade-up-left" data-aos-duration="1500" src={Mapa} alt="" />
        </QuemSomosContainer>
    );
}

export default QuemSomos;