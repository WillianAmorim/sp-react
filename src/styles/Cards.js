import styled from "styled-components";

export const CardsContainer = styled.div`
    a {
        text-decoration: none;
        color: inherit;
    }

    video {
        width: 100%;
    }

    section {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        gap: 25px;

        padding: 25px 10px;
    }

    img {
        width: 100%;
        height: 350px;
        filter: brightness(0.7);
    }

    .div-details-web {
        display: none;
    }

    .div-card {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    #lancamento {
        width: 150px;
        border: 1px solid white;
        padding: 10px;
        text-align: center;

        font-size: small;
    }

    .div-details-mobile {
        position: absolute;
        z-index: 9;
    }

    .div-details-mobile {
        top: 50%;
        left: 25px;
        color: white;

        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    #conhecer-imovel {
        color: white;
        background-color: #A78534;
        padding: 10px 20px;
        width: 95%;
        text-align: center;
    }



    

    
    /* font-family: 'Inter', sans-serif;

    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    background-color: white;

    section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        flex-wrap: wrap;
        position: relative;
        padding-left: 5%;
        padding-right: 5%;

    }

    video {
        width: 100%;
    }

    source {
        width: 100%;
    }

    .div-card {
        width: 500px;
        position: relative;
        transition: transform 0.5s ease-in-out;
    }

    .div-card:hover {
        transform: scale(1.03);
    }

    a {
        text-decoration: none;
    }

    .imagem-container {
        position: relative;
    }

    img {
        width: 100%;
        height: 350px;
        filter: brightness(0.6);
    }

    #lancamento {
        position: absolute;
        right: 50px;
        top: 30px;
        text-decoration: none;
        color: white;
        border: 1px solid white;
        padding: 8px 20px;
        z-index: 9;

        font-size: 12px;
        font-weight: 300;
    }

    #lancamento:hover {
        background-color: white;
        color: black;
    }

    .div-details {
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    .div-details div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 5px;
        height: 80px;
        width: 100%;
    }

    .div-details div h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 500;
    }

    .div-details div p {
        font-size: 15px;
        font-weight: 200;
    }

    #conhecer-imovel {
        color: white;
        background-color: #A78534;
        background-color: #A78534;
        height: 50px;
        width: 250px;
        padding: 10px 15px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 12px;
        font-weight: 300;
    }

    #conhecer-imovel:hover {
        color: black;
        background-color: #121D40;
        color: white;
    } */


    @media only screen and (max-width: 767px) {
       
    }
`