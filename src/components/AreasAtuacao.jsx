import { AreasAtuacaoContainer } from "../styles/AreasAtuacao";
import ShoppingCenter from '../../public/IMAGENS_SITE_SAO_PAULO/AREAS DE ATUAÇÃO/SHOPPINGS CENTERS/Rio Anil Shopping.jpg'
import StripMalls from '../../public/IMAGENS_SITE_SAO_PAULO/AREAS DE ATUAÇÃO/STRIPMALLS/CEUMA-COHAMA.jpg'
import BTS from '../../public/IMAGENS_SITE_SAO_PAULO/AREAS DE ATUAÇÃO/BTS (BUILT TO SUIT)/Drogasil - Cohatrac I.jpg'
import Incorporacoes from '../../public/IMAGENS_SITE_SAO_PAULO/AREAS DE ATUAÇÃO/INCORPORAÇÕES E CONSTRUÇÃO/Easy Renascença.jpg'
import Locacoes from '../../public/IMAGENS_SITE_SAO_PAULO/AREAS DE ATUAÇÃO/LOCAÇÃO DE IMOVEIS/COMERCIAL/Costa Atacadão - Águas Claras, DF.jpg'
import { Link } from "react-router-dom";
const AreasAtuacao = () => {
    return (
        <AreasAtuacaoContainer>
            <h1>Áreas de atuação</h1>
            <ul>
                <li>
                    <Link to={'/shopping-centers'}>Shopping Centers</Link>
                    <img src={ShoppingCenter} alt="" />
                </li>
                <li>
                    <Link to={'/strip-malls'}>Strip Malls</Link>
                    <img src={StripMalls} alt="" /></li>
                <li>
                    <Link to={'/bts'}>BTS - Built to Suit</Link>
                    <img src={BTS} alt="" />
                </li>
                <li>
                    <Link to={'/incorporacoes'}>Incorporações</Link>
                    <img src={Incorporacoes} alt="" />
                </li>
                <li>
                    <Link to={''}>Locações</Link>
                    <img src={Locacoes} alt="" />
                </li>
            </ul>
        </AreasAtuacaoContainer>
    );
}

export default AreasAtuacao;