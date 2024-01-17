import React from 'react';

import cardsOportunidades from '../../public/Json/oportunidades.json'

import { CardsContainer } from '../styles/Cards';

import VideoBts from '../../public/IMAGENS_SITE_SAO_PAULO/video-bts.mp4'


const CardsOportunidades = () => {
    return (
        <CardsContainer>
            <video autoPlay muted loop>
                <source src={VideoBts} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>

            <section>
                <h1>Oportunidades</h1>
                {cardsOportunidades.map((card) => (
                    <div className='div-card' key={card.id}>
                        <a id='lancamento' href="">Lançamento</a>
                        <img src={card.src} alt="" />
                        <div className='div-details'>
                            <div>
                                <h2>{card.name}</h2>
                                <p>Local</p>
                            </div>
                            <a id='conhecer-imovel' href="">CONHECER IMÓVEL</a>
                        </div>
                    </div>
                ))}
            </section>
        </CardsContainer >
    );
}

export default CardsOportunidades;