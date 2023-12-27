import styled from "styled-components";

export const QuemSomosContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 70px;
    overflow: hidden;

    padding: 50px 25px;

    font-family: 'Inter', sans-serif;


    div {
        display: flex;
        flex-direction: column;
        gap: 50px;
        align-items: center;

        padding: 30px;
    }

    div p {
        font-size: 20px;
        font-weight: 200;
        text-align: center;
        line-height: 40px;
    }

    div h1 {
        font-size: 40px;
        font-weight: 500;
    }

    img {
        width: 50%;
        transform: scale(1.7)
    }

    @media only screen and (max-width: 767px) {
        flex-direction: column;
        gap: 70px;

        img {
            transform: scale(2.9)
        }
    }
`