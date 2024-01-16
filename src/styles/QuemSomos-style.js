import styled from "styled-components";

export const QuemSomosContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
    align-items: center;
    overflow: hidden;
    padding: 50px 25px;

    img {
        width: 50%;
        transform: scale(2.8)
    }

    div h1 {
        text-align: center;
        font-size: 40px;
        font-weight: 500;
    }

    div p {
        font-size: 18px;
        font-weight: 200;
        text-align: justify;
        line-height: 30px;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;

    }
    
    @media only screen and (min-width: 767px) {
        flex-direction: row;
        padding: 50px;

        div p {
        text-align: center;
    }
        

        img {
            transform: scale(1.6)
        }
    }
`