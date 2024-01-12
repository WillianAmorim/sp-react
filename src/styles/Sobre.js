// styles/Carrosel-Primeiro.js

import styled from "styled-components";

export const SobreContainer = styled.div`

    h1 {
        background-color: #A78534;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        clip-path: polygon(0% 0%, 60% 0%, 67% 100%, 0% 100%);
        color: white;
    }

    .div-elements {
        display: flex;
        flex-direction: column;

        gap: 50px;
        padding: 50px 130px;

        width: 50%;
    }

    #hr-menor {
        width: 70px;
        height: 7px;
        background-color: black;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    #hr-maior {
        height: 5px;
        background-color: black;
        margin-bottom: 10px;
    }




    @media only screen and (max-width: 767px) {
        
    }
`;

