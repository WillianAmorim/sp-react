import styled from "styled-components";

export const LocalizacaoContainer = styled.div`

    /* h1 {
        background-color: #A78534;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        clip-path: polygon(0% 0%, 60% 0%, 67% 100%, 0% 100%);
        color: white;
    } */

    .div-textos {
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 25px 0;

        /* background-color: yellow; */
    }

    .div-elements {
        display: flex;
        justify-content: space-around;
        padding-top: 50px;
        padding-bottom: 50px;

    }

    /* .div-apresentacao {
        padding-top: 50px;
        padding-bottom: 50px;
    } */

    @media only screen and (max-width: 767px) {
        
    }
`;

