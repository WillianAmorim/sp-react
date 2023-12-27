import { AreasAtuacaoContainer } from "../styles/AreasAtuacao";
import ShoppingCenter from '../assets/IMAGENS_SITE_SAO_PAULO/AREAS DE ATUAÇÃO/SHOPPINGS CENTERS/Rio Anil Shopping.jpg'
import StripMalls from '../assets/images/strip-malls/Uniceuma-Anil.jpg'
import BTS from '../assets/IMAGENS_SITE_SAO_PAULO/AREAS DE ATUAÇÃO/BTS (BUILT TO SUIT)/Drogasil - Cohatrac I.jpg'
import Incorporacoes from '../assets/IMAGENS_SITE_SAO_PAULO/AREAS DE ATUAÇÃO/INCORPORAÇÕES E CONSTRUÇÃO/Easy Renascença.jpg'
import Locacoes from '../assets/IMAGENS_SITE_SAO_PAULO/AREAS DE ATUAÇÃO/LOCAÇÃO DE IMOVEIS/COMERCIAL/Costa Atacadão - Águas Claras, DF.jpg'

const AreasAtuacao = () => {
    return (
        <AreasAtuacaoContainer>
            <h1>Áreas de atuação</h1>
            <ul>
                <li>
                    <a href="">Shopping Centers</a>
                    <img src={ShoppingCenter} alt="" />
                </li>
                <li>
                    <a href="">Strip Malls</a>
                    <img src={StripMalls} alt="" /></li>
                <li>
                    <a href="">BTS - Built to Suit</a>
                    <img src={BTS} alt="" />
                </li>
                <li>
                    <a href="">Incorporações</a>
                    <img src={Incorporacoes} alt="" />
                </li>
                <li>
                    <a href="">Locações</a>
                    <img src={Locacoes} alt="" />
                </li>
            </ul>
        </AreasAtuacaoContainer>
    );
}

export default AreasAtuacao;