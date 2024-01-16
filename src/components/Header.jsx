import { HeaderContainer } from '../styles/Header-style'
import LogoHeader from '../../public/IMAGENS_SITE_SAO_PAULO/sao paulo.png';

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <HeaderContainer>
            <header className='header-desktop'>
                <img className='img-header' src={LogoHeader} alt="" />
                <ul className='ul-header'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <p>|</p>

                    <li id='li-areas-atuacao'>Áreas de atuação
                        <ul className='ul-areas-atuacao'>
                            <li className='item-area-atuacao'><a href="">Shopping Centers</a></li>
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
                        </ul>
                    </li>
                    <p>|</p>
                    <li><Link to='/bts'>Oportunidades</Link></li>
                    <p>|</p>
                    <li><Link to='/drogasil'>Contato</Link></li>
                </ul>
            </header>
        </HeaderContainer>
    );
}

export default Header;