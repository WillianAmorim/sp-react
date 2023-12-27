import styled from "styled-components";

export const CardsContainer = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

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

    .div-pai {
        flex-basis: calc(50% - 100px);
        position: relative;
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
        filter: brightness(0.8);

    }

    #lancamento {
        position: absolute;
        right: 50px;
        top: 30px;
        text-decoration: none;
        color: white;
        border: 1px solid white;
        padding: 10px;
        z-index: 9;
    }

    #lancamento:hover {
        background-color: white;
        color: black;
    }

    .div-details {
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
    }

    .div-details div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    #conhecer-imovel {
        color: white;
        background-color: #121D40;
        /* padding: 15px 20px; */
        height: 60px;
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #conhecer-imovel:hover {
        color: black;
        background-color: white;
        border: 1px solid black;
    }


    @media only screen and (max-width: 767px) {
       
    }
`