import { FooterContainer } from '../styles/FooterContainer';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import LogoFooter from '/FOTOS-NOVO/Logo-sp.png'

import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <FooterContainer>
            <div className='div-logo'>
                <img src={LogoFooter} alt="" />
                <div className='div-icons'>
                    <a href="https://www.linkedin.com/company/grupo-s%C3%A3o-paulo/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={25}/></a>
                    <a href="https://www.instagram.com/saopauloparticipacoes/" target="_blank" rel="noopener noreferrer"><FaInstagram size={25}/></a>
                </div>
            </div>
            <div className='div-ul'>
                <ul>
                    {/* <li className='hover-black'>Ver todos os imóveis</li> */}
                    <li className='hover-black'><Link to={'/regiao/maranhao'}>Maranhão</Link></li>
                    <li className='hover-black'><Link to={'/regiao/para'}>Pará</Link></li>
                    <li className='hover-black'><Link to={'/regiao/brasilia'}>Brasília</Link></li>
                    <li className='hover-black'>Fale Conosco</li>
                    {/* <li className='hover-black'>Parcerias</li> */}
                </ul>
                <ul>
                    {/* <li className='hover-black'>Fale com um corretor</li> */}
                    <li className='hover-black'>Fornecedores</li>
                    <li className='hover-black'>Grupo São Paulo</li>
                    {/* <li className='hover-black'>Sobre</li> */}
                </ul>
            </div>
        </FooterContainer>
    );
}

export default Footer;