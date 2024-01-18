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
        justify-content: center;
        gap: 25px;

        padding: 25px 10px;
    }

    img {
        width: 100%;
        height: 400px;
        filter: brightness(0.5);
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

    #lancamento-mobile {
        width: 150px;
        border: 1px solid white;
        padding: 10px;
        text-align: center;

        font-size: small;
    }

    .div-details-mobile {
        width: 100%;
        position: absolute;
        z-index: 9;

        top: 35%;
        left: 25px;
        color: white;

        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    #conhecer-imovel-mobile {
        color: white;
        background-color: #A78534;
        padding: 15px 20px;
        width: 90%;
        text-align: center;
        
        font-size: 15px;
    }

    .section-details-mobile {
        color: white;
        display: flex;
        flex-direction: column;
        gap: 5px;

        p {
            display: flex;
            gap: 5px;
        }
    }

    #conhecer-imovel-web {
        display: none;
    }

    .section-details-web {
        display: none;
    }

    #lancamento-web{
        display: none;
    }
/* 
    #lancamento-web {
        display: none;
    } */

    h2 {
        font-weight: 600;
        font-size: 22px;
    }

    @media only screen and (min-width: 767px) {

        .div-details-mobile {
            display: none;
        }

        #conhecer-imovel-mobile {
            display: none;
        }

        img {
            width: 100%;
            height: 350px;
            position: relative;
        }

        section {
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            column-gap: 50px;
        }

        .section-details-web {
            position: absolute;
            z-index: 99;
            color: white;
            width: 45%;
            left: 0;
            bottom: 75px;
            font-size: 13px;

            display: flex;
        }

        .section-details-web div {
            display: flex;
            gap: 5px;
        }

        .div-details-web {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .div-details-web div {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .div-card {
            row-gap: 20px;
            width: 600px;
        }

        #conhecer-imovel-web {
            display: flex;
            background-color: #A78534;
            align-items: center;
            color: white;
            font-size: small;
            height: min-content;
            padding: 15px 30px;
        }

        #lancamento-web {
            display: block;
            position: absolute;
            right: 20px;
            top: 20px;
            z-index: 9;
            color: white;
            
            border: 1px solid white;
            padding: 10px;
            font-size: small;
        }
    }
`