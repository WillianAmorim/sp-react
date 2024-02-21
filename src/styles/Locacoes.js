import styled from "styled-components";

export const LocacaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 25px;
    gap: 25px;

    div{
        position: relative;
        display: flex;
        justify-content: center;
    }

    a {
        position: absolute;
        text-decoration: none;
        color: #121D40;

        background-color: white;
        padding: 20px;
        bottom: 25px;
        border-radius: 15px 0px 15px 0;

        font-size: 15px;
        font-weight: 400;
    }

    img {
        width: 100%;
        height: 50vh;
    }


    @media only screen and (min-width: 767px) {
        flex-direction: row;
        padding: 25px 25px;
        padding-top: 150px;

        img {
            height: 60vh;
        }
    }
`