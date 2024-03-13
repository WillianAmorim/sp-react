import React from 'react'
import data from '../../public/Json/JsonEmpreendimentos.json'
import Locacoes from '../../public/FOTOS-NOVO-GUI/LOCACAO DE IMOVEIS/COMERCIAL/Costa Atacadao/AtacadaoPrincipal.webp'
import { Link } from "react-router-dom";
import { AreasAtuacaoMobileContainer } from '../styles/AreasAtuacaoMobile';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const AreasAtuacaoMobile = () => {

    let categoriasParaExcluir = ['comercial', 'corporativo', 'residencial', 'galpao-logistico',];

    let firstObjects = data.reduce((acc, obj) => {
        // Verificar se a categoria do objeto não está na lista de categorias para excluir
        if (!categoriasParaExcluir.includes(obj.category)) {
            // Verificar se a categoria do objeto já está presente em firstObjects
            if (!acc[obj.category]) {
                acc[obj.category] = obj;
            }
        }
        return acc;
    }, {});

    let result = Object.values(firstObjects);

    return (
        <AreasAtuacaoMobileContainer>
            <h1>Áreas de atuação</h1>
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
                    }}>


                    {result.map((empreendimento) => (
                        <SwiperSlide key={empreendimento.id}>
                            <Link className="hrv-rectangle-out" to={`/empreendimento/${empreendimento.category}`}>{empreendimento.sobre.setor}</Link>
                            <img src={empreendimento.imgPrincipal} alt="" />
                        </SwiperSlide>
                    ))}
                    <SwiperSlide>
                        <Link className="hrv-rectangle-out" to={'/locacoes'}>Locações</Link>
                        <img src={Locacoes} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </ AreasAtuacaoMobileContainer>
    )
}

export default AreasAtuacaoMobile