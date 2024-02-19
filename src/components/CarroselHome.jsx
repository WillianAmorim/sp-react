import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'

import EasyResidence from '../assets/Easy.jpg'
import GranImperial from '../assets/Gran.jpg'
import IOA from '../assets/IOA.jpeg'

import { CarroselContainer } from '../styles/Carrosel-Primeiro';
import { BsBuilding } from "react-icons/bs";
import { IoCarSharp } from "react-icons/io5";
import { GiShower } from "react-icons/gi";


const CarroselPrimeiro = () => {
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
            <a href="">Conheça o imóvel</a>
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
            <a href="">Conheça o imóvel</a>
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
            <a href="">Conheça o imóvel</a>
          </div>
          <img className='slide-item' src={IOA} alt="" />

        </SwiperSlide>
      </Swiper>
    </CarroselContainer >

  );
}

export default CarroselPrimeiro;

// return (
//   <>
//       <Swiper
//           modules={[EffectFade, Navigation, Pagination, Autoplay]}
//           effect={'fade'}
//           slidesPerView={1}  // Ajuste o número de slides por view conforme necessário
//           pagination={{ clickable: true }}
//           loop={true}
//           speed={2000}
//           autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//           }}
//       >
//           {images.map((image, index) => (
//               <SwiperSlide key={index}>
//                   <DivAbsolute>
//                       {/* ... (seu código para ícones de compartilhamento) */}
//                   </DivAbsolute>
//                   <ImgDrogasil src={image} alt="" width="100%" />
//               </SwiperSlide>
//           ))}
//       </Swiper>
//   </>
// );


{/* <DivAbsolute >
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
</DivAbsolute> */}