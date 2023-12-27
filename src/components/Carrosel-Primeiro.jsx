import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'

import EasyResidence from '../assets/images/courses-05.jpg'
import GranImperial from '../assets/images/courses-04.jpg'
import IOA from '../assets/images/IOA-nova.jpeg'

import { CarroselContainer } from '../styles/Carrosel-Primeiro';
import LogoHeader from '../assets/IMAGENS_SITE_SAO_PAULO/sao paulo.png'


const CarroselPrimeiro = () => {
  return (  
    <CarroselContainer style={{ width: '100%' }}>
      {/* <header>
        <img src={LogoHeader} alt="" />
        <svg id="img-open" xmlns="http://www.w3.org/2000/svg" width="35" height="25" fill="currentColor"
          className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
        <ul className='ul-header'>
          <li>Home</li>
          <p>|</p>
          <li>Áreas de atuação</li>
          <p>|</p>
          <li>Oportunidades</li>
          <p>|</p>
          <li>Contato</li>
          <p>|</p>
        </ul>
        <input id='input-header' placeholder='Pesquisa avançada' type="text" />
      </header> */}
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect={'fade'}
        slidesPerView={2}  // Correção aqui
        // spaceBetween={10}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide><img className='slide-item' src={EasyResidence} alt="" /></SwiperSlide>
        <SwiperSlide><img className='slide-item' src={GranImperial} alt="" /></SwiperSlide>
        <SwiperSlide><img className='slide-item' src={IOA} alt="" /></SwiperSlide>
      </Swiper>
    </CarroselContainer >

  );
}

export default CarroselPrimeiro;
