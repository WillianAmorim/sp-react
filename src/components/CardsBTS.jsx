import React from 'react';

import cardsBTS from '../../public/Json/bts.json'

import { CardsContainer } from '../styles/Cards';


const CardsBTS = () => {
    return (
        <CardsContainer>
            <video autoPlay muted loop>
                <source src="../../public/IMAGENS_SITE_SAO_PAULO/video-bts.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
            <h1>BTS</h1>
            <section>
                {cardsBTS.map((card) => (
                    <div className='div-pai' key={card.id}>
                        <a id='lancamento' href="">Lançamento</a>
                        <img src={card.src} alt="" />
                        <div className='div-details'>
                            <div>
                                <h2>{card.name}</h2>
                                <p>Local</p>
                            </div>
                            <a id='conhecer-imovel' href="">Conhecer imóvel</a>
                        </div>
                    </div>
                ))}
            </section>
        </CardsContainer >
    );
}

export default CardsBTS;