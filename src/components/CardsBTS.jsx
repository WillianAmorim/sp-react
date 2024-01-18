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
                {cardsBTS.map((card) => (
                    <div className='div-card' key={card.id}>
                        <div className='div-details-mobile'>
                            <a id='lancamento-mobile' href="">Lançamento</a>
                            <h2>{card.name}</h2>
                            <p>Península | São Luís-MA</p>
                        </div>
                        <a id='lancamento-web' href="">Lançamento</a>
                        <img src={card.src} alt="" />

                        <div className='div-details-web'>
                            <div>
                                <h2>{card.name}</h2>
                                <p>Península | São Luís-MA</p>
                            </div>
                            <Link to={'/bts/drogasil'} id='conhecer-imovel-web' href="">CONHECER IMÓVEL</Link>
                        </div>
                        <Link to={'/bts/drogasil'} id='conhecer-imovel-mobile' href="">CONHECER IMÓVEL</Link>
                    </div>
                ))}
            </section>
        </CardsContainer >
    );
}

export default CardsBTS;