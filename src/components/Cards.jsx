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
            <div className='div-details-mobile'>
              <a id='lancamento-mobile' href="">Lançamento</a>
              <h2>{card.name}</h2>
              <p>Península | São Luís-MA</p>

              <div className='section-details-mobile'>
                <p><SlSizeFullscreen size={15} />65 a 131 m²</p>
                <p><FaBed size={15} color='white' />3 a 4 dorm.</p>
                <p><GiShower size={15} />1 a 4 suítes</p>
                <p><IoCarSharp size={15} />1 a 2 vagas</p>
              </div>
            </div>
            <section className='section-details-web'>
              <div><SlSizeFullscreen size={15} />65 a 131 m²</div>
              <div><FaBed size={15} color='white' />3 a 4 dorm.</div>
              <div><GiShower size={15} />1 a 4 suítes</div>
              <div><IoCarSharp size={15} />1 a 2 vagas</div>
            </section>
            <a id='lancamento-web' href="">Lançamento</a>
            <Link id='link-img' to={card.name.toLowerCase().replace(/ /g, "-")}><img src={card.imgPrincipal} alt="" /></Link>

            <div className='div-details-web'>
              <div>
                <h2>{card.name}</h2>
                <p>Península | São Luís-MA</p>
              </div>
              <Link to={card.name.toLowerCase().replace(/ /g, "-")} id='conhecer-imovel-web' href="">CONHECER IMÓVEL</Link>
            </div>
            <Link to={card.name.toLowerCase().replace(/ /g, "-")} id='conhecer-imovel-mobile' href="">CONHECER IMÓVEL</Link>
          </div>
        ))}
      </section>
    </CardsContainer>
  )
}

export default Cards
