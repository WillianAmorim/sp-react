import { FooterContainer } from '../styles/FooterContainer';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import LogoFooter from '../assets/images/logo-footer.png'

const Footer = () => {
    return ( 
        <FooterContainer>
            <div className='div-logo'>
                <img src={LogoFooter} alt="" />
                <div className='div-icons'>
                    <FaInstagram size={25}/>
                    <FaLinkedinIn size={25}/>
                </div>
            </div>
            <div className='div-ul'>
                <ul>
                    <li>Ver todos os imóveis</li>
                    <li>Maranhão</li>
                    <li>Pará</li>
                    <li>Brasilia</li>
                    <li>Fale Conosco</li>
                    <li>Parcerias</li>
                </ul>
                <ul>
                    <li>Fale com um corretor</li>
                    <li>Fornecedores</li>
                    <li>Grupo São Paulo</li>
                    <li>Sobre</li>
                </ul>
            </div>
        </FooterContainer>
    );
}

export default Footer;