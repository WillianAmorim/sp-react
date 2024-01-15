import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'

import EasyResidence from '../assets/images/courses-05.jpg'
import GranImperial from '../assets/images/courses-04.jpg'
import IOA from '../assets/images/IOA-nova.jpeg'

import { CarroselContainer } from '../styles/Carrosel-Primeiro';
// import LogoHeader from '../assets/images/IMAGENS_SITE_SAO_PAULO/sao paulo.png'


const CarroselPrimeiro = () => {
  return (
    <CarroselContainer style={{ width: '100%' }}>
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect={'fade'}
        slidesPerView={2}  // Correção aqui
        // spaceBetween={10}
        pagination={{ clickable: true }}
        // navigation={true}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className='div-absolute'>
            <h1>Easy Renascença</h1>
            <p>Uma nova ideia de espaço, conforto, lazer e sustentabilidade</p>
          </div>
          <img className='slide-item' src={EasyResidence} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <div className='div-absolute'>
            <h1>Gran Imperial</h1>
            <p>Uma nova ideia de espaço, conforto, lazer e sustentabilidade</p>
          </div>
          <img className='slide-item' src={GranImperial} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <div className='div-absolute'>
            <h1>IOA</h1>
            <p>Uma nova ideia de espaço, conforto, lazer e sustentabilidade</p>
          </div>
          <img className='slide-item' src={IOA} alt="" />

        </SwiperSlide>
      </Swiper>
    </CarroselContainer >

  );
}

export default CarroselPrimeiro;
