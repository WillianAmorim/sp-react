import { HeaderContainer } from '../styles/Header-style'
import LogoHeader from '../assets/IMAGENS_SITE_SAO_PAULO/sao paulo.png';

const Header = () => {
    return (
        <HeaderContainer>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Áreas de atuação</li>
                    <li>Oportunidades</li>
                    <li>Contato</li>
                </ul>
            </nav>
            <img className='img-header' src={LogoHeader} alt="" />
            <svg id="img-open" xmlns="http://www.w3.org/2000/svg" width="35" height="25" fill="currentColor"
                className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
            <ul className='ul-header'>
                <li>
                    <a href="">Home</a>
                </li>

                <p>|</p>

                <li id='li-areas-atuacao'>Áreas de atuação
                    {/* <ul className='ul-areas-atuacao'>
                        <li className='item-area-atuacao'><a  href="">Shopping Centers</a></li>
                        <li className='item-area-atuacao'><a href="">Strip Malls</a></li>
                        <li className='item-area-atuacao'><a href="">BTS (Built to Suit)</a></li>
                        <li className='item-area-atuacao'><a href="">Incorporações</a></li>
                        <li id='locacoes' className='item-area-atuacao' >
                            Locações
                            <ul className='ul-locacoes'>
                                <li className='item-locacoes'>Comercial</li>
                                <li className='item-locacoes'>Galpão Logístico</li>
                                <li className='item-locacoes'>Residencial</li>
                            </ul>
                        </li>
                    </ul> */}
                </li>
                <p>|</p>
                <li><a href="">Oportunidades</a></li>
                <p>|</p>
                <li><a href="">Contato</a></li>
                <p>|</p>
            </ul>
        </HeaderContainer>
    );
}

export default Header;