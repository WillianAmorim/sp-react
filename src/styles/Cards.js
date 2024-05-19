import styled from "styled-components";

export const CardsContainer = styled.div`
    overflow-x: hidden;

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

    #link-img, img{
        width: 100%;
        height: 400px;
        filter: brightness(0.8);
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
        padding-bottom: 25px;
        max-height: max-content;

        /* background-color: red; */
    }

    #lancamento-mobile {
        width: 150px;
        border: 1px solid white;
        padding: 10px;
        text-align: center;

        font-size: small;
    }

    .div-details-mobile {
        max-width: max-content;
        position: absolute;
        z-index: 9;

        bottom: 20%;
        left: 10px;
        color: white;

        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .vendido {
        position: absolute;
        z-index: 9;
        color: white;
        right: 15px;
        top: 15px;
        border: 1px solid white;
        padding: 10px;
        font-size: 15px;
        max-width: max-content;
    }

    .construcao {
        border: 1px solid white;
        max-width: max-content;
        padding: 10px 15px;
    }

    #conhecer-imovel-mobile {
        color: white;
        background-color: #A78534;
        padding: 15px 20px;
        width: 90%;
        text-align: center;
        
        font-size: 15px;
        background-color: #121D40;
    }

    .section-details-mobile {
        width: 80%;
        height: auto;
        flex-wrap: wrap;
        color: white;
        display: flex;
        column-gap: 25px;
        row-gap: 10px;

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

        #link-img, img {
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
            bottom: 100px;
            font-size: 13px;

            display: flex;
        }

        .div-details-web {
            padding-top: 15px;
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
            row-gap: 0px;
            width: 600px;
        }

        #conhecer-imovel-web {
            display: flex;
            /* background-color: #A78534; */
            background-color: #121D40;
            align-items: center;
            color: white;
            font-size: small;
            height: min-content;
            padding: 15px 30px;
        }

        #conhecer-imovel-web:hover {
            opacity: 0.8;
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

        .construcao {
            position: absolute;
            color: white;
            z-index: 9;
            top: 10px;
            right: 10px;
            font-size: 10px;
            /* background-color: white; */
            /* color: black; */
            font-weight: 500;
        }

        .vendido {
            font-size: 10px;
            top: 10px;
            right: 10px;
        }


    }
`