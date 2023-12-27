import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import { OportunidadesContainer } from '../styles/Oportunidades';

import oportunidades from '../Json/oportunidades.json'

const Oportunidades = () => {
    return (
        <OportunidadesContainer>
            <div className='div-container'>
                <div className='div-title'>
                    <h1>Oportunidades</h1>
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
                    // pagination={{
                    //     clickable: true,
                    // }}
                    autoplay={{
                        delay: 0,
                    }}
                    loop={true}
                    speed={2000}
                    className="mySwiper"
                >
                    {oportunidades.map((oportunidade) => (
                        <SwiperSlide key={oportunidade.id}>
                            <img src={oportunidade.src} alt="" />
                            <p>{oportunidade.name}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </OportunidadesContainer>
    );
}

export default Oportunidades;