// styles/Carrosel-Primeiro.js

import styled from "styled-components";

export const CarroselContainer = styled.div`
    /* header {
        position: absolute;
        padding: 25px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        background-color: transparent;
        z-index: 999;
        display: flex;

        justify-content: space-around;

        ul {
            display: flex;
            list-style: none;
            gap: 50px;
            align-items: center;
            
            color: white;
        }

        input {
            border-radius: 15px;
            padding-left: 10px;
            border:none
        }

        svg {
            display: none;
        }
    } */
    .slide-item {
        width: 100%;
        height: 100vh;
        filter: brightness(0.5);
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

