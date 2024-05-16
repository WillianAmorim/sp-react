import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import { OportunidadesContainer } from '../styles/Oportunidades';

import data from '../../public/Json/JsonEmpreendimentos.json'

import { Link } from 'react-router-dom'

const filteredOportunidade = data.filter((card) => card.category === "oportunidades")

const Oportunidades = () => {
    return (
        <OportunidadesContainer>

            <div className='div-container'>
                <div className='div-title'>
                    <h1>Oportunidades</h1>
                    <p>Veja os melhores imóveis e negócios</p>
                </div>
                <div id='div-conheca-todos'><Link to={'/empreendimento/oportunidades'}>Conheça todos</Link></div>
            </div>

            <div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={2}
                    centeredSlides={false}
                    spaceBetween={30}
                    grabCursor={true}
                    autoplay={{
                        delay: 0,
                    }}
                    loop={true}
                    speed={1800}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {
                        filteredOportunidade.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img src={item.imgPrincipal} alt="" />
                                <Link to={`/empreendimento/${item.category}/${item.name.toLowerCase().replace(/ /g, "-").replace(/ç/g, 'c').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}>{item.name}</Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </OportunidadesContainer>
    );
}

export default Oportunidades;