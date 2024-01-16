import styled from "styled-components";

export const EmpresasParceirasContainer = styled.section`
    padding: 50px 25px;

    .div-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .div-title {
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: black;
    }

    .div-title h1 {
        font-size: 30px;
        font-weight: 500;
    }

    .div-title p {
        font-size: 15px;
        font-weight: 400;
    }
        
    a {
        width: max-content;
        text-decoration: none;
        color: white;
        background-color: #C19A29;
        
        padding: 10px;

        display: flex;
        align-items: center;
        border-radius: 25px;

        font-size: 15px;
        font-weight: 400;
    }

    .swiper-slide img {
        width: 300px;
    }

    .mySwiper {
        width: 100%;
        height: 100%;

        padding-top: 50px;
    }

    @media only screen and (min-width: 767px) {
        padding: 50px;
        
        .div-container {
            flex-direction: row;
            justify-content: space-between;
            gap: 20px;
        }
        
        a {
            height: min-content;
        }

        a:hover {
            background-color: transparent;
            color: #121D40;
            border: 1px solid black;
        }
    }
`