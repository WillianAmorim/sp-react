// styles/Carrosel-Primeiro.js

import styled from "styled-components";

export const ContatoContainer = styled.div`
    font-size: 15px;
    background-color: #121D40;
    height: auto;
    padding-bottom: 50px;


    .div-p {
        padding: 50px 25px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    #linha-morta {
        border-bottom: 2px solid #A78534;
    }

    p {
        text-align: center;
        color: white;
    }

    .div-inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        padding: 0px 25px;
        
        label {
            display: flex;
            flex-direction: column;
            gap: 5px;
            width: 100%;

            color: white;
        }

        input, #escolha {
            height: 40px;
            border-radius: 3px;
            padding-left: 10px;
            border: none;
        }

        #escolha {
            width: 100%;
        }

        textarea {
            border-radius: 5px;
            padding-left: 10px;
            padding-top: 5px;
            font-size: 15px;
        }

        a {
            padding: 25px;
            margin-top: 50px;
            text-decoration: none;
            color: white;
            background-color: #A78534;
            border-radius: 5px;
        }
    }



    @media only screen and (min-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

