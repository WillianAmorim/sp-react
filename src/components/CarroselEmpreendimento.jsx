import React, { useState } from 'react';
import { DivAbsolute, StyledGoShare, ImgPrincipal, ImgCarrosel } from "../styles/PaginaEmpreendimento";
import { CSSTransition } from 'react-transition-group';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import { EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';
import { GoShare } from "react-icons/go";

const CarroselEmpreendimento = ({ images }) => {
    const [clicked, setClicked] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const handleIconClick = () => {
        setClicked(!clicked);
    };

    const shareUrl = window.location.href;
    const title = document.title;

    return (
        <>
            <DivAbsolute>
                <StyledGoShare onClick={handleIconClick} style={{ display: clicked ? 'none' : 'block' }}>
                    <GoShare />
                </StyledGoShare>

                <CSSTransition
                    in={clicked}
                    timeout={9000}
                    classNames="fade"
                    unmountOnExit
                >
                    <div className='links-share' style={{ display: clicked ? 'flex' : 'none' }}>
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
                </CSSTransition>
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
                spaceBetween={40}
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
                            alt=""
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default CarroselEmpreendimento;
