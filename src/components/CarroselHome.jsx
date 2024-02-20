import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'


import EasyResidence from '../assets/Easy.jpg'
import GranImperial from '../assets/Gran.jpg'
import IOA from '../assets/IOA.jpeg'

import { CarroselContainer } from '../styles/Carrosel-Primeiro';
import { BsBuilding } from "react-icons/bs";
import { IoCarSharp } from "react-icons/io5";
import { GiShower } from "react-icons/gi";


const CarroselHome = () => {
  return (
    <CarroselContainer style={{ width: '100%' }}>
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect={'fade'}
        slidesPerView={2}
        pagination={{ clickable: true }}
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
              <li className="li-swiper-container1"><BsBuilding />15 andares</li>
              <li className="li-swiper-container1"><IoCarSharp />1 ou 2 vagas</li>
              <li className="li-swiper-container1"><GiShower />1 ou duas suítes</li>
            </ul>
            <Link to={'/empreendimento/oportunidades/easy-renascença'}>Conheça o imóvel</Link>
          </div>
          <img className='slide-item' src={EasyResidence} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <div className='div-absolute'>
            <h1>Gran Imperial</h1>
            <p>Uma nova ideia de espaço, conforto, lazer e sustentabilidade</p>
            <ul>
              <li className="li-swiper-container1"><BsBuilding />15 andares</li>
              <li className="li-swiper-container1"><IoCarSharp />1 ou 2 vagas</li>
              <li className="li-swiper-container1"><GiShower />1 ou duas suítes</li>
            </ul>
            <Link to={'/empreendimento/oportunidades/gran-imperial-residence'}>Conheça o imóvel</Link>
          </div>
          <img className='slide-item' src={GranImperial} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <div className='div-absolute'>
            <h1>IOA</h1>
            <p>Uma nova ideia de espaço, conforto, lazer e sustentabilidade</p>
            <ul>
              <li className="li-swiper-container1"><BsBuilding />15 andares</li>
              <li className="li-swiper-container1"><IoCarSharp />1 ou 2 vagas</li>
              <li className="li-swiper-container1"><GiShower />1 ou duas suítes</li>
            </ul>
            <Link to={'/empreendimento/bts/ioa'}>Conheça o imóvel</Link>
          </div>
          <img className='slide-item' src={IOA} alt="" />

        </SwiperSlide>
      </Swiper>
    </CarroselContainer >

  );
}

export default CarroselHome;