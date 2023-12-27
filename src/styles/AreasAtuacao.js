import styled from "styled-components";

export const AreasAtuacaoContainer = styled.section`
    padding: 50px;
    font-family: 'Inter', sans-serif;

    display: flex;
    flex-direction: column;
    gap: 50px;

    h1 {
        font-size: 30px;
        font-weight: 500;
    }

    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(5, 1fr); /* Cria 5 colunas com o mesmo tamanho */
        gap: 15px;
        
    }

    li {
        width: 100%;
        height: 400px;
        object-fit: cover;
        position: relative;
        transition: transform 0.5s ease-in-out;
    }

    img {
        width: 95%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
        filter: brightness(0.8);
    }

    a {
        text-decoration: none;
        color: #121D40;
        position: absolute;
        
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: white;
        padding: 15px;

        width: max-content;

        border-radius: 15px 0px 15px 0px;

        font-size: 15px;
        font-weight: 400;

        z-index: 99;

        /* display: none; */
    }

    a:hover {
        background-color: #121D40;
        color: white;
    }

    li:hover {
        transform: scale(1.1);
    }

    @media only screen and (max-width: 767px) {
        
    }
`