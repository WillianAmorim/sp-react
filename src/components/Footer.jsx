import { FooterContainer } from '../styles/FooterContainer';

import LogoFooter from '../assets/images/logo-footer.png'

const Footer = () => {
    return (
        <FooterContainer>
            <img src={LogoFooter} alt="" />
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