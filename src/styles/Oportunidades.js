import styled from "styled-components";

export const OportunidadesContainer = styled.section`
    width: 100%;
    background-color: #121D40;
    color: white;

    padding: 50px;

    font-family: 'Inter', sans-serif;

    .div-container {
        display: flex;
        justify-content: space-between;

        border-bottom: 1px solid #C19A29;
        padding-bottom: 20px;
    }

    .div-title {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .div-title h1 {
        font-size: 30px;
        font-weight: 500;
    }

    .div-title p {
        font-size: 15px;
        font-weight: 400;
    }
    
    a {
        text-decoration: none;
        color: white;
        background-color: #C19A29;
        
        padding: 10px 20px;

        display: flex;
        align-items: center;
        border-radius: 25px;
        height: min-content;

        font-size: 15px;
        font-weight: 300;
    }

    a:hover {
        background-color: transparent;
        border: 1px solid #C19A29;
    }

    .mySwiper {
        width: 100%;
        height: 100%;

        padding-top: 50px;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 15px;
        border: none;

    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 400px;
        object-fit: cover;

        border-radius: 15px;

        border: none;

        filter: brightness(0.7);
    }

    .swiper-slide p {
        position: absolute;
        bottom: 0;
        margin-bottom: 50px;
        color: black;
        background-color: transparent;
        padding: 10px;
        border-radius: 15px 0px 15px 0;
        border: 1px solid white;

        color: white;

        font-size: 15px;
        font-weight: 300;        
    }

    .swiper-slide p:hover {
        background-color: white;
        color: black;
    }

    @media only screen and (max-width: 767px) {
        padding: 50px 25px;

        .div-container {
            flex-direction: column;
            gap: 20px;
        }

        a {
            width: max-content;
        }
    }
`