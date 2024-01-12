// styles/Carrosel-Primeiro.js

import styled from "styled-components";

export const ContatoContainer = styled.div`

    h1 {
        background-color: #A78534;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        clip-path: polygon(0% 0%, 60% 0%, 67% 100%, 0% 100%);
        color: white;
    }

    .div-p {
        padding: 50px 150px;
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

    .div-contato{
        background-color: #121D40;
        height: auto;
        padding-bottom: 50px;


    }

    .div-inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        
        label {
            display: flex;
            flex-direction: column;
            gap: 5px;
            width: 35%;

            color: white;
        }

        input, #escolha {
            height: 40px;
            border-radius: 3px;
            padding-left: 10px;
            border: none;
        }

        #escolha {
            width: 35%;
        }

        textarea {
            border-radius: 5px;
            padding-left: 10px;
            padding-top: 5px;
        }

        a {
            margin-top: 50px;
            text-decoration: none;
            color: white;
            background-color: #A78534;
            padding: 20px 180px;

            border-radius: 5px;
        }
    }



    @media only screen and (max-width: 767px) {
        
    }
`;

