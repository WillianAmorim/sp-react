// styles/Carrosel-Primeiro.js

import styled from "styled-components";

export const CarroselContainer = styled.div`
    .slide-item {
        width: 100%;
        height: 100vh;
        filter: brightness(0.3);
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: white;
    }

    /* Altere a cor das bolinhas de controle (paginadores) */
    .swiper-pagination-bullet {
        background-color: white; /* Substitua 'blue' pela cor desejada */
        width: 50px;
        border-radius: 0;
        height: 2px;
    }

    @media only screen and (max-width: 767px) {
        .slide-item {
            height: auto;
            object-fit: contain;
        }
    }
`;

