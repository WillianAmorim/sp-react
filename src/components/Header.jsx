import React, { useState } from 'react';
import { HeaderContainer } from '../styles/Header-style'
import LogoHeader from '../../public/IMAGENS_SITE_SAO_PAULO/sao paulo.png';

import { Link } from 'react-router-dom'
import { RiArrowDownSLine } from "react-icons/ri";

const Header = () => {
    const [isHoveredAt, setIsHoveredAt] = useState(false)
    const [isHoveredLoc, setIsHoveredLoc] = useState(false)

    return (
        <HeaderContainer>
            <header className='header-desktop'>
                <Link className='img-header' to={'/'}><img src={LogoHeader} alt="" /></Link>
                <ul className='ul-header'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <p>|</p>

                    <li id='li-areas-atuacao' onMouseEnter={() => setIsHoveredAt(true)} onMouseLeave={() => setIsHoveredAt(false)}>Áreas de atuação <RiArrowDownSLine />
                        <ul className='ul-areas-atuacao' visible={isHoveredAt} style={{ display: isHoveredAt ? 'flex' : 'none' }}>
                            <li className='item-area-atuacao'><Link to={'/shopping-centers'}>Shopping Centers</Link></li>
                            <li className='item-area-atuacao'><Link to={'/strip-malls'}>Strip Malls</Link></li>
                            <li className='item-area-atuacao'><Link to={'/bts'}>BTS (Built to Suit)</Link></li>
                            <li className='item-area-atuacao'><Link to={'/incorporacoes'}>Incorporações</Link></li>
                            <li id='locacoes' className='item-area-atuacao' onMouseEnter={() => setIsHoveredLoc(true)} onMouseLeave={() => setIsHoveredLoc(false)}>
                                Locações
                                <ul className='ul-locacoes' visible={isHoveredLoc} style={{ display: isHoveredLoc ? 'flex' : 'none' }}>
                                    <li className='item-locacoes'><Link to={'/'}>Comercial</Link></li>
                                    <li className='item-locacoes'>Galpão Logístico</li>
                                    <li className='item-locacoes'>Residencial</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <p>|</p>
                    <li><Link to={'/oportunidades'}>Oportunidades</Link></li>
                    <p>|</p>
                    <li><Link to={'/contato'}>Contato</Link></li>
                </ul>
            </header>
        </HeaderContainer>
    );
}

export default Header;