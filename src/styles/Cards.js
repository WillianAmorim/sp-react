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

    #lancamento-mobile {
        width: 150px;
        border: 1px solid white;
        padding: 10px;
        text-align: center;

        font-size: small;
    }

    .div-details-mobile {
        position: absolute;
        z-index: 9;

        top: 40%;
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

    #conhecer-imovel-web {
        display: none;
    }
/* 
    #lancamento-web {
        display: none;
    } */

    h2 {
        font-weight: 400;
        font-size: 25px;
    }

    @media only screen and (min-width: 767px) {

        .div-details-mobile {
            display: none;
        }

        #conhecer-imovel-mobile {
            display: none;
        }

        .div-details-web {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        .div-details-web div {
            display: flex;
            flex-direction: column;
            gap: 5px;

        }

        #conhecer-imovel-web {
            display: flex;
            background-color: #A78534;
            align-items: center;
            color: white;
            font-size: small;
            padding: 15px 20px;
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
       
        section {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 10px;
        }

        img {
            width: 500px;
        }
    }
`