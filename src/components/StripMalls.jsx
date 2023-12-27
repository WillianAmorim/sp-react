import React from 'react';

import cardsStripMalls from '../../public/Json/stripMalls.json'

import { CardsContainer } from '../styles/Cards';


const CardsBTS = () => {
    return (
        <CardsContainer>
            <h1>Strip Malls</h1>
            <section>
                {cardsStripMalls.map((card) => (
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