import React from 'react'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { SlideSetorContainer } from '../styles/SlideSetor';

const SlideSetor = ({ slide }) => {
    return (
        <SlideSetorContainer>
            <Swiper
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                effect={'fade'}
                slidesPerView={2}
                pagination={{ clickable: true }}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {
                    slide.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image} alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </ SlideSetorContainer>
    )
}

export default SlideSetor