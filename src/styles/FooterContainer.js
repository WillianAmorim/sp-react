import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 200px;
    padding: 50px 0;

    background-color: #F6F5F5;

    font-family: 'Inter', sans-serif;

    img {
        width: auto;
        height: 150px;
    }

    .div-ul {
        display: flex;
        gap: 200px;
    }

    .div-ul ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: #121D40;
    }

    .div-ul ul li {
        color: #121D40;
        font-size: 15px;
        font-weight: 300;
    }

    @media only screen and (max-width: 767px) {
        flex-direction: column;
        padding: 50px 25px;
        gap: 50px;
        align-items: center;

        img {
            width: 50%;
            height: auto;
        }

        .div-ul {
            flex-direction: column;
            align-self: flex-start;
            gap: 20px;
        }
    }
`