import React, { useState } from 'react'
import { IconNavbarOpen, NavbarContainer, Sidebar, IconNavbarClose, ContainerNav } from '../styles/Navbar'
import LogoNavbar from '../../public/IMAGENS_SITE_SAO_PAULO/sao paulo.png'
import LogoNavbarBlack from '../../public/IMAGENS_SITE_SAO_PAULO/logo-nome-sp.png'
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

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
    <ContainerNav>
      <NavbarContainer>
        <Link to={'/'}><img src={LogoNavbar} alt="" /></Link>
        <IconNavbarOpen onClick={handleIconClick} />
      </NavbarContainer>

      <Sidebar $visible={isSidebarVisible}>
        <div className='div-header-sidebar'>
          <img src={LogoNavbarBlack} alt="" />
          <IconNavbarClose onClick={handleIconClick} />
        </div>
        <section className='list-menu-sidebar'>
          <div className='item-menu-navbar'><Link to={"/"} onClick={handleIconClick}>Home</Link></div>

          <div className='list-menu-at item-menu-navbar' onClick={() => setAreaAtuacaoVisible(!areaAtuacaoVisible)}>Áreas de atuação <RiArrowDownSLine /></div>

          <ul className='areas-atuacao' visible={areaAtuacaoVisible} style={{ display: areaAtuacaoVisible ? 'flex' : 'none' }}>
            <li className='item-menu-areasAtuacao'><Link to={"/strip-malls"}>Strip Malls</Link></li>
            <li className='item-menu-areasAtuacao'><Link to={"/bts"}>BTS (Built to Suit)</Link></li>
            <li className='item-menu-areasAtuacao'><Link to={"/incorporacoes"}>Incorporações</Link></li>
            <li className='item-menu-areasAtuacao' id='li-locacao' onClick={() => setLocacaoVisible(!locacaoVisible)}>Locações <RiArrowDownSLine /></li>
            <ul visible={locacaoVisible} className='locacoes item-menu-areasAtuacao' style={{ display: locacaoVisible ? 'flex' : 'none' }}>
              <li className='item-menu-locacao'><Link to={''}>Comercial</Link></li>
              <li className='item-menu-locacao'><Link to={''}>Galpão Logístico</Link></li>
              <li className='item-menu-locacao'><Link to={''}>Residencial</Link></li>
            </ul>
          </ul>

          <div className='item-menu-navbar'><Link to={'/oportunidades'}>Oportunidades</Link></div>
          <div className='item-menu-navbar'><Link to={'contato'}>Contato</Link></div>
        </section>

      </Sidebar>
    </ ContainerNav>

  )
}

export default Navbar