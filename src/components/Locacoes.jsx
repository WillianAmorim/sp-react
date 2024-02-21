import React from 'react'
import { LocacaoContainer } from '../styles/Locacoes'


import { Link } from 'react-router-dom'

const Locacoes = () => {
    return (
        <LocacaoContainer>
            <section className='section-cards'>
                <div>
                    <Link to={'/empreendimento/comercial'}>Comercial</Link>
                    <img src="../../public/FOTOS-NOVO/LOCAÇÃO DE IMÓVEIS/COMERCIAL/Costa Atacadão - Águas Claras, DF/AtacadaoPrincipal.jpg" alt="" />
                </div>
                <div>
                    <Link to={'/empreendimento/corporativo'}>Corporativo</Link>
                    <img src="../../public/FOTOS-NOVO/LOCAÇÃO DE IMÓVEIS/CORPORATIVO/Defensoria Pública da União (DPU)/Principal.jpg" alt="" />
                </div>
                <div>
                    <Link to={'/empreendimento/galpao-logistico'}>Galpão Logístico</Link>
                    <img src="../../public/FOTOS-NOVO/LOCAÇÃO DE IMÓVEIS/GALPÃO-LOGISTICO/JB Transportes/JBTransportesPrincipal.jpg" alt="" />
                </div>
                <div>
                    <Link to={'/empreendimento/residencial'}>Residencial</Link>
                    <img src="../../public/FOTOS-NOVO/LOCAÇÃO DE IMÓVEIS/RESIDENCIAL/Edifício Ponta Negra/Principal.jpg" alt="" />
                </div>
            </section>
        </LocacaoContainer>
    )
}

export default Locacoes