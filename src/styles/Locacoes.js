import styled from "styled-components";

export const LocacaoContainer = styled.div`
    padding: 50px 25px;

    .section-cards{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 25px;
    }

    .section-cards div {
        position: relative;
        display: flex;
        justify-content: center;
    }

    .section-cards div a {
        position: absolute;
        background-color: white;
        text-decoration: none;
        color: black;
        padding: 10px;
        border-radius: 15px 0px 15px 0;
        bottom: 25px;

        font-size: 15px;
        font-weight: 400;
        
    }

    img {
        width: 100%;
        height: 50vh;
    }


    @media only screen and (min-width: 767px) {
        padding: 25px;

        .section-cards{
            flex-direction: row;
        }

        img {
            height: 60vh;
        }

        .section-cards div a:hover {
            background-color: #121D40;
            color: white;
        }
    }
`