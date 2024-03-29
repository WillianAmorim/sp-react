import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    padding-top: 25px;

    a {
        text-decoration: none;
        color: #121D40;
    }

    .div-logo {
        display: flex;
        flex-direction: column;
        gap: 25px;
        align-self: center;
    }

    .div-icons {
        display: flex;
        justify-content: center;
        gap: 25px;
    }

    img {
        width: 60%;
        height: auto;

        align-self: center;
    }

    .div-ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-left: 10px;
        gap: 15px;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 15px;
        font-size: 15px;
        font-weight: 300;
        color: #121D40;
    }

    @media only screen and (min-width: 767px) {
        padding: 50px;
        flex-direction: row;
        gap: 150px;
        justify-content: center;    

        img {
            width: auto;
            height: 200px;
        }

        .div-ul {
            flex-direction: row;
            gap: 100px;
            margin-top: 50px;
        }

        .hover-black:hover {
            color: black;
            cursor: pointer;
        }

        a:hover {
            color: black;
            cursor: pointer;
        }
    }
`