import styled from "styled-components";

export const LocalizacaoContainer = styled.div`
    .div-elements {
        display: flex;
        flex-direction: column;
        padding: 25px;
        /* gap: 25px; */
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

