import styled from "styled-components";

export const EmBreveContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 10px;
    gap: 50px;

    img {
        width: 90vw;
        height: 50vh;
    }

    h1 {
        font-size: 50px;
        text-align: center;
        color: #2C3E6C;
    }

    .logo-desk {
        display: none;
    }

    @media only screen and (min-width: 767px) {
        padding: 0;
        .logo-mobile {
            display: none;
        }

        .logo-desk {
            display: block;
            width: 100vw;
            height: 100vh;
        }

        h1 {
            position: absolute;
            left: 75px;
            color: white;
            font-size: 75px;
            width: auto;
        }
    }
`