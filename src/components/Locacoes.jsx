import React from 'react'
import { LocacaoContainer } from '../styles/Locacoes'

import ImgComercial from '/FOTOS-NOVO-GUI/LOCACAO DE IMOVEIS/COMERCIAL/Costa Atacadao/AtacadaoPrincipal.webp'
import ImgCorporativo from '/FOTOS-NOVO-GUI/LOCACAO DE IMOVEIS/CORPORATIVO/Defensoria Publica da Uniao (DPU)/Principal.webp'
import ImgGalpao from '/FOTOS-NOVO-GUI/LOCACAO DE IMOVEIS/GALPAO-LOGISTICO/JB Transportes/JBTransportesPrincipal.webp'
import ImgResidencial from '/FOTOS-NOVO-GUI/LOCACAO DE IMOVEIS/RESIDENCIAL/Edificio Cidade do Porto/Principal.webp'


import { Link } from 'react-router-dom'

const Locacoes = () => {
    return (
        <LocacaoContainer>
            <section className='section-cards'>
                <div>
                    <Link to={'/empreendimento/comercial'}>Comercial</Link>
                    <img src={ImgComercial} alt="" />
                </div>
                <div>
                    <Link to={'/empreendimento/corporativo'}>Corporativo</Link>
                    <img src={ImgCorporativo} alt="" />
                </div>
                <div>
                    <Link to={'/empreendimento/galpao-logistico'}>Galpão Logístico</Link>
                    <img src={ImgGalpao} alt="" />
                </div>
                <div>
                    <Link to={'/empreendimento/residencial'}>Residencial</Link>
                    <img src={ImgResidencial} alt="" />
                </div>
            </section>
        </LocacaoContainer>
    )
}

export default Locacoes