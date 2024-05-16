// styles/Carrosel-Primeiro.js

import styled from "styled-components";

export const CarroselContainer = styled.div`

    .slide-item {
        width: 100%;
        height: 400px;
        filter: brightness(0.7);
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: white;
    }

    .swiper-pagination-bullet {
        background-color: white;
        width: 50px;
        border-radius: 0;
        height: 2px;
    }

    .div-absolute {
        width: 80%;
        position: absolute;
        z-index: 9;
        color: white;
        left: 20px;
        top: 40%;

        display: flex;
        flex-direction: column;
        gap: 10px;

        p {
            width: 350px;
        }

        ul {
            list-style: none;
            
            li {
                display: flex;
                gap: 10px;
            }
        }

        a {
            margin-top: 15px;
            text-decoration: none;
            color: black;
            background-color: white;
            width: max-content;
            padding: 10px 10px;
            border-radius: 10px;

            font-size: small;
        }
    }

    .div-absolute h1 {
        font-size: 20px;
    }

    @media only screen and (min-width: 767px) {
        .slide-item {
            height: 100vh;
        }

        .div-absolute {
        left: 100px;
        top: 50%;
    }
    }
`;

