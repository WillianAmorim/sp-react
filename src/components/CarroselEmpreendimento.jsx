import React, { useState } from 'react';
import { DivAbsolute, ImgPrincipal, ImgCarrosel } from "../styles/PaginaEmpreendimento";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import { MdEmail } from "react-icons/md";

import { EmailShareButton, EmailIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';

const CarroselEmpreendimento = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isVisibleLinks, setIsVisibleLinks] = useState(false);
    const [isVisibleButton, setIsVisibleButton] = useState(true);

    const shareUrl = window.location.href;
    const title = document.title;

    const toggleVisibility = () => {
        setIsVisibleLinks(!isVisibleLinks); // Inverte o estado de visibilidade
        setIsVisibleButton(!isVisibleButton)
    };

    return (
        <div style={{ marginBottom: '10px' }}>
            <DivAbsolute>
                <div className='button-compartilhar' onClick={toggleVisibility} id={isVisibleButton ? 'visible' : 'invisible'}>Compartilhar</div>
                <div id={isVisibleLinks ? 'visible' : 'invisible'} className='links-share'>
                    <WhatsappShareButton url={shareUrl} title={title}>
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <EmailShareButton url={shareUrl} subject={title}>
                        <MdEmail className='icon-email' size={32} round style={{ color: 'rgb(255, 255, 255)' }} />
                    </EmailShareButton>
                    <LinkedinShareButton url={shareUrl} title={title}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </div>
            </DivAbsolute>

            <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Thumbs, Navigation]}
                className="mySwiper"
                loop={true}
                speed={500}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <ImgPrincipal src={image} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={5}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper2"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <ImgCarrosel
                            src={image}
                            alt="ola"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CarroselEmpreendimento;
