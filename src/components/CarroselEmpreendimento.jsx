import React, { useState } from 'react';
import { DivAbsolute, ImgPrincipal, ImgCarrosel } from "../styles/PaginaEmpreendimento";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import { EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';

const CarroselEmpreendimento = ({ images }) => {
    const [clicked, setClicked] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    console.log(images[0])

    const shareUrl = window.location.href;
    const title = document.title;

    return (
        <div style={{ marginBottom: '10px' }}>
            <DivAbsolute>

                <div className='links-share'>
                    <WhatsappShareButton url={shareUrl} title={title}>
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <EmailShareButton url={shareUrl} subject={title}>
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                    <LinkedinShareButton url={shareUrl} title={title}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <FacebookShareButton url={shareUrl} quote={title}>
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                </div>
            </DivAbsolute>

            <Swiper
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Thumbs, Navigation]}
                className="mySwiper"
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
                watchSlidesVisibility={true}
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
