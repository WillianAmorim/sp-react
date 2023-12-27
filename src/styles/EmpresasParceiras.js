import styled from "styled-components";

export const EmpresasParceirasContainer = styled.section`
    width: 100%;
    color: white;

    padding: 50px;

    font-family: 'Inter', sans-serif;

    .div-container {
        display: flex;
        justify-content: space-between;

        border-bottom: 1px solid white;
        padding-bottom: 20px;
    }

    .div-title {
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: black;

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
        font-weight: 400;
    }

    a:hover {
        background-color: transparent;
        color: #121D40;
        border: 1px solid black;
    }

    .mySwiper {
        width: 100%;
        height: 100%;

        padding-top: 50px;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    .swiper-slide img {
        display: block;
        width: 70%;
        height: auto;
        object-fit: cover;

        border-radius: 25px;

        border: none;
    }

    @media only screen and (max-width: 767px) {
        
    }
`