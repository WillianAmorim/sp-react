import React from 'react';

import cardsBTS from '../../public/Json/bts.json'

import { CardsContainer } from '../styles/Cards';

import VideoBts from '../../public/IMAGENS_SITE_SAO_PAULO/video-bts.mp4'
import { Link } from 'react-router-dom';


const CardsBTS = () => {
    return (
        <CardsContainer>
            <video autoPlay muted loop>
                <source src={VideoBts} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>

            <section>
                <h1>Bts</h1>
                {cardsBTS.map((card) => (
                    <div className='div-card' key={card.id}>
                        <a id='lancamento' href="">Lançamento</a>
                        <img src={card.src} alt="" />
                        <div className='div-details'>
                            <div>
                                <h2>{card.name}</h2>
                                <p>Local</p>
                            </div>
                            <Link to={'/bts/drogasil'} id='conhecer-imovel' href="">CONHECER IMÓVEL</Link>
                        </div>
                    </div>
                ))}
            </section>
        </CardsContainer >
    );
}

export default CardsBTS;