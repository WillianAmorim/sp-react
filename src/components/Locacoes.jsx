import React from 'react'
import { LocacaoContainer } from '../styles/Locacoes'

import ImgComercial from '/FOTOS-NOVO/LOCAÇÃO DE IMÓVEIS/COMERCIAL/Costa Atacadão - Águas Claras, DF/AtacadaoPrincipal.jpg'
import ImgCorporativo from '/FOTOS-NOVO/LOCAÇÃO DE IMÓVEIS/CORPORATIVO/Defensoria Pública da União (DPU)/Principal.jpg'
import ImgGalpao from '/FOTOS-NOVO/LOCAÇÃO DE IMÓVEIS/GALPÃO-LOGISTICO/JB Transportes/JBTransportesPrincipal.jpg'
import ImgResidencial from '/FOTOS-NOVO/LOCAÇÃO DE IMÓVEIS/RESIDENCIAL/Edifício Ponta Negra/Principal.jpg'


import { Link } from 'react-router-dom'

const Locacoes = () => {
    return (
        <LocacaoContainer>
            <section className='section-cards'>
                <div data-aos="fade-right" data-aos-duration="1500">
                    <Link to={'/empreendimento/comercial'}>Comercial</Link>
                    <img src={ImgComercial} alt="" />
                </div>
                <div data-aos="fade-right" data-aos-duration="1500">
                    <Link to={'/empreendimento/corporativo'}>Corporativo</Link>
                    <img src={ImgCorporativo} alt="" />
                </div>
                <div data-aos="fade-left" data-aos-duration="1500">
                    <Link to={'/empreendimento/galpao-logistico'}>Galpão Logístico</Link>
                    <img src={ImgGalpao} alt="" />
                </div>
                <div data-aos="fade-left" data-aos-duration="1500">
                    <Link to={'/empreendimento/residencial'}>Residencial</Link>
                    <img src={ImgResidencial} alt="" />
                </div>
            </section>
        </LocacaoContainer>
    )
}

export default Locacoes