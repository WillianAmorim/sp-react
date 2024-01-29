import styled from "styled-components";

export const AreasAtuacaoContainer = styled.section`
    padding: 50px 25px;

    display: flex;
    flex-direction: column;

    gap: 20px;

    h1 {
        font-size: 30px;
        font-weight: 500;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 15px;
        
    }

    li {
        width: 100%;
        height: 400px;
        object-fit: cover;
        position: relative;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* border-radius: 15px; */
        filter: brightness(0.7);
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

    }

    @media only screen and (min-width: 767px) {

        ul {
            flex-direction: row;
        }

        li {
            transition: transform 0.5s ease-in-out;
        }

        a {
            transition: background-color 0.3s ease, color 0.3s ease; /* Adicionando transição de cor */
        }
        
        a:hover {
            background-color: #121D40;
            color: white;

        }

        li:hover {
            transform: scale(1.1);
        }
    }
`