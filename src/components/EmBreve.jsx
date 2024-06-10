import React from 'react'
import LogoMobile from '../../public/FOTOS-NOVO-GUI/Logo-sp.jpg';
import LogoDesk from '../../public/FOTOS-NOVO-GUI/banner-sp.webp';
import { EmBreveContainer } from '../styles/EmBreve';

const EmBreve = () => {
  return (
    <EmBreveContainer>
        <img className='logo-mobile' src={LogoMobile} alt="" />
        <img className='logo-desk' src={LogoDesk} alt="" />
        <h1>Em manutenção !</h1>
    </EmBreveContainer>
  )
}

export default EmBreve
