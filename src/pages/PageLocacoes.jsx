import React from 'react'
import Locacoes from '../components/Locacoes'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SlideSetor from '../components/SlideSetor'
import dataSlide from '../../public/Json/SlideSetores.json'


const PageLocacoes = () => {

    const [filterSlide] = dataSlide.filter((objSlide) => objSlide.setorName === 'locacoes')

  return (
    <div>
        <Header />
        <SlideSetor slide={filterSlide.arrayImg} />
        <Locacoes />
        <Footer />
    </div>
  )
}

export default PageLocacoes