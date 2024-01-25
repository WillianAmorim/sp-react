import styled from "styled-components";

export const LocalizacaoContainer = styled.div`
    .div-elements {
        display: flex;
        flex-direction: column;
        padding: 25px;
        gap: 25px;
    }

    .div-textos {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    @media only screen and (min-width: 767px) {
        .div-elements {
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
        }

        .div-textos {
            gap: 100px;
        }

        iframe {
            width: 40%;
            height: 400px;
        }
    }
`;

