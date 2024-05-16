import React from 'react'
import { CardsContainer } from '../styles/Cards'

import { SlSizeFullscreen } from "react-icons/sl";
import { FaBed } from "react-icons/fa";
import { GiShower } from "react-icons/gi";
import { IoCarSharp } from "react-icons/io5";

import { Link } from 'react-router-dom';

const Cards = ({ arrayCards }) => {

  return (
    <CardsContainer>
      <section>
        {arrayCards.map((card) => (
          <div className='div-card' key={card.id}>
            <div className={card.seloVenda ? 'vendido' : ''}>
              {card.seloVenda && <p>{card.seloVenda}</p>}
            </div>
            <div className='div-details-mobile'>
              <h2>{card.name}</h2>
              <p>{card.bairro}</p>
              {card.seloEntrega && <p className='construcao'>{card.seloEntrega}</p>}
            </div>
            <Link id='link-img' to={card.name.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}><img src={card.imgPrincipal} alt="" /></Link>

            <div className='div-details-web'>
              <div>
                {card.seloEntrega && <p className='construcao'>{card.seloEntrega}</p>}
                <h2>{card.name}</h2>
                <p>{card.bairro}</p>
              </div>
              <Link to={card.name.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")} id='conhecer-imovel-web' href="">CONHECER IMÓVEL</Link>
            </div>
            <Link to={card.name.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")} id='conhecer-imovel-mobile' href="">CONHECER IMÓVEL</Link>
          </div>
        ))}
      </section>
    </CardsContainer>
  )
}

export default Cards
