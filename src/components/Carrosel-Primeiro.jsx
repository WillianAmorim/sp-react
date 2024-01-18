import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'

import EasyResidence from '../assets/images/courses-05.jpg'
import GranImperial from '../assets/images/courses-04.jpg'
import IOA from '../assets/images/IOA-nova.jpeg'

import { CarroselContainer } from '../styles/Carrosel-Primeiro';
import { BsBuilding } from "react-icons/bs";
import { IoCarSharp } from "react-icons/io5";
import { GiShower } from "react-icons/gi";
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
            <ul>
              <li class="li-swiper-container1"><BsBuilding />15 andares</li>
              <li class="li-swiper-container1"><IoCarSharp />1 ou 2 vagas</li>
              <li class="li-swiper-container1"><GiShower />1 ou duas suítes</li>
            </ul>
            <a href="">Conheça o imóvel</a>
          </div>
          <img className='slide-item' src={EasyResidence} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <div className='div-absolute'>
            <h1>Gran Imperial</h1>
            <p>Uma nova ideia de espaço, conforto, lazer e sustentabilidade</p>
            <ul>
              <li class="li-swiper-container1"><BsBuilding />15 andares</li>
              <li class="li-swiper-container1"><IoCarSharp />1 ou 2 vagas</li>
              <li class="li-swiper-container1"><GiShower />1 ou duas suítes</li>
            </ul>
            <a href="">Conheça o imóvel</a>
          </div>
          <img className='slide-item' src={GranImperial} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <div className='div-absolute'>
            <h1>IOA</h1>
            <p>Uma nova ideia de espaço, conforto, lazer e sustentabilidade</p>
            <ul>
              <li class="li-swiper-container1"><BsBuilding />15 andares</li>
              <li class="li-swiper-container1"><IoCarSharp />1 ou 2 vagas</li>
              <li class="li-swiper-container1"><GiShower />1 ou duas suítes</li>
            </ul>
            <a href="">Conheça o imóvel</a>
          </div>
          <img className='slide-item' src={IOA} alt="" />

        </SwiperSlide>
      </Swiper>
    </CarroselContainer >

  );
}

export default CarroselPrimeiro;
