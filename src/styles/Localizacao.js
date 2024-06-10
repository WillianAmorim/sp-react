import styled from "styled-components";

export const LocalizacaoContainer = styled.div`
    padding: 25px;

    h1 {
        font-family: 'Inter', sans-serif;
        font-size: 25px;
        border-radius: 3px;
        padding-bottom: 15px;
    }

    .div-elements {
        display: flex;
        flex-direction: column;
    }

    .div-textos {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    @media only screen and (min-width: 767px) {

        .div-elements {
            /* background-color: blue; */
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        .div-textos {
            gap: 100px;
            width: 50%;
        }

        iframe {
            width: 100%;
            height: 400px;
        }
    }
`;

