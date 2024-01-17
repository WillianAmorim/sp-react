import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import { OportunidadesContainer } from '../styles/Oportunidades';

import data from '../../public/Json/jsonPrincipal.json'

import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';

const Oportunidades = () => {
    // const swiperRef = useRef(null);

   // Executa isso apenas quando o componente é montado

    // const navigate = useNavigate();

    // const handleClick = (rota) => {
    //     window.scrollTo({ top: 0 })
    //     navigate(rota);
    // };

    return (
        <OportunidadesContainer>
            <div className='div-container'>
                <div className='div-title'>
                    <h1>Oportunidades</h1>
                    <p>Veja os melhores imóveis e negócios</p>
                </div>
                <div id='div-conheca-todos'><Link to={'/oportunidades'}>Conheça todos</Link></div>
            </div>

            <div>
                <Swiper
                    // ref={swiperRef}
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
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {
                        data.filter(item => item.category === 'oportunidades')
                            .map(item => (
                                <SwiperSlide key={item.id}>
                                    <img src={item.src} alt="" />
                                    <p>{item.name}</p>
                                </SwiperSlide>
                            ))
                    }
                </Swiper>
            </div>

        </OportunidadesContainer>
    );
}

export default Oportunidades;