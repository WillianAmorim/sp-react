import React, { useState } from 'react'
import { IconNavbarOpen, NavbarContainer, Sidebar, IconNavbarClose } from '../styles/Navbar'
import LogoNavbar from '../../public/IMAGENS_SITE_SAO_PAULO/sao paulo.png'
import LogoNavbarBlack from '../../public/IMAGENS_SITE_SAO_PAULO/logo-nome-sp.png'
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

const Navbar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [areaAtuacaoVisible, setAreaAtuacaoVisible] = useState(false);
  const [locacaoVisible, setLocacaoVisible] = useState(false);

  const handleIconClick = () => {
    setSidebarVisible(!isSidebarVisible);
    setAreaAtuacaoVisible(false)
    setLocacaoVisible(false)
  };

  return (
    <>
      <NavbarContainer>
        <img src={LogoNavbar} alt="" />
        <IconNavbarOpen onClick={handleIconClick} />
      </NavbarContainer>

      <Sidebar visible={isSidebarVisible}>
        <div className='div-header-sidebar'>
          <img src={LogoNavbarBlack} alt="" />
          <IconNavbarClose onClick={handleIconClick} />
        </div>
        <section className='list-menu-sidebar'>
          <div className='item-menu-navbar'><Link to={Home} onClick={handleIconClick}>Home</Link></div>

          <div className='list-menu-at item-menu-navbar' onClick={() => setAreaAtuacaoVisible(!areaAtuacaoVisible)}>Áreas de atuação <RiArrowDownSLine /></div>
          
          <ul className='areas-atuacao' visible={areaAtuacaoVisible} style={{ display: areaAtuacaoVisible ? 'flex' : 'none' }}>
            <li className='item-menu-areasAtuacao'>Shopping Centers</li>
            <li className='item-menu-areasAtuacao'>Strip Malls</li>
            <li className='item-menu-areasAtuacao'>BTS (Built to Suit)</li>
            <li className='item-menu-areasAtuacao'>Incorporações</li>
            <li className='item-menu-areasAtuacao' id='li-locacao' onClick={() => setLocacaoVisible(!locacaoVisible)}>Locações <RiArrowDownSLine /></li>
              <ul visible={locacaoVisible} className='locacoes' style={{ display: locacaoVisible ? 'flex' : 'none' }}>
                <li className='item-menu-locacao'>Comercial</li>
                <li className='item-menu-locacao'>Galpão Logístico</li>
                <li className='item-menu-locacao'>Residencial</li>
              </ul>
          </ul>

          <div className='item-menu-navbar'>Oportunidades</div>
          <div className='item-menu-navbar'>Contato</div>
        </section>

      </Sidebar>
    </>

  )
}

export default Navbar