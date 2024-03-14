import React from 'react'
import ImgBannerSp from '../../public/FOTOS-NOVO-GUI/BannerFaleConosco.webp'
import { BannerSpContainer } from '../styles/BannerSp'

const BannerSp = () => {
  return (
    <BannerSpContainer>
        <img src={ImgBannerSp} alt="" />
    </BannerSpContainer>
  )
}

export default BannerSp