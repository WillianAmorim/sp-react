import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import empresasParceiras from '../../public/Json/empresasParceiras.json';

import { EmpresasParceirasContainer } from '../styles/EmpresasParceiras';


const EmpresasParceiras = () => {
    return (
        <EmpresasParceirasContainer>
            <div className='div-container'>
                <div className='div-title'>
                    <h1>Empresas Parceiras</h1>
                    <p>Veja os melhores imóveis e negócios</p>
                </div>
                <a href="">Conheça todos</a>
            </div>

            <div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={3}
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
                    {empresasParceiras.map((empresa) => (
                        <SwiperSlide key={empresa.id}>
                            <img src={empresa.src} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </EmpresasParceirasContainer>
    );
}

export default EmpresasParceiras;