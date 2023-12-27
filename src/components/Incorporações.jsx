import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import { OportunidadesContainer } from '../styles/Oportunidades';

import incorporacoes from '../Json/incorporacoes.json'

const Incorporacoes = () => {
    return (
        <OportunidadesContainer>
            <div className='div-container'>
                <div className='div-title'>
                    <h1>Incorporacoes</h1>
                    <p>Veja os melhores imóveis e negócios</p>
                </div>
                <a href="">Conheça todos</a>
            </div>

            <div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={5}
                    centeredSlides={true}
                    spaceBetween={20}
                    grabCursor={true}
                    autoplay={{
                        delay: 0,
                    }}
                    loop={true}
                    speed={2000}
                    className="mySwiper"
                >
                    {incorporacoes.map((incorporacao) => (
                        <SwiperSlide key={incorporacao.id}>
                            <img src={incorporacao.src} alt="" />
                            <p>{incorporacao.name}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </OportunidadesContainer>
    );
}

export default Incorporacoes;