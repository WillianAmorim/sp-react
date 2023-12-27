// styles/Carrosel-Primeiro.js

import styled from "styled-components";

export const TermosContainer = styled.div`
    font-family: 'Inter', sans-serif;

    
    ul {
        padding: 25px;
        display: flex;
        justify-content: space-around;
        list-style: none;
        color: #9fafaf;
    }

    ul li {
        font-size: 15px;
        font-weight: 200;
    }



    @media only screen and (max-width: 767px) {
        ul {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 10px;
        }
    }
`;

