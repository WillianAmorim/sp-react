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
                    <li className='hover-black'>Ver todos os imóveis</li>
                    <li className='hover-black'>Maranhão</li>
                    <li className='hover-black'>Pará</li>
                    <li className='hover-black'>Brasilia</li>
                    <li className='hover-black'>Fale Conosco</li>
                    <li className='hover-black'>Parcerias</li>
                </ul>
                <ul>
                    <li className='hover-black'>Fale com um corretor</li>
                    <li className='hover-black'>Fornecedores</li>
                    <li className='hover-black'>Grupo São Paulo</li>
                    <li className='hover-black'>Sobre</li>
                </ul>
            </div>
        </FooterContainer>
    );
}

export default Footer;