import styled from "styled-components";

export const OportunidadesContainer = styled.section`
    width: 100%;
    background-color: #121D40;
    color: white;

    padding: 50px 25px;

    .div-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 25px;

        border-bottom: 1px solid #C19A29;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }

    .div-title {
        display: flex;
        flex-direction: column;
        gap: 10px;
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
        text-decoration: none;
        color: inherit;
    }
    
    #div-conheca-todos {
        color: white;
        background-color: #C19A29;
        
        padding: 10px 20px;

        display: flex;
        align-items: center;
        border-radius: 25px;
        width: max-content;

        font-size: 15px;
        font-weight: 300;
        border: 1px solid transparent;
    }

    .mySwiper {
        width: 100%;
        height: 100%;

    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 15px;
        border: none;

    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 400px;
        object-fit: cover;

        border-radius: 15px;

        border: none;

        filter: brightness(0.7);
    }

    .swiper-slide a {
        position: absolute;
        bottom: 0;
        margin-bottom: 50px;
        background-color: white;
        padding: 10px;
        border-radius: 15px 0px 15px 0;
        border: 1px solid white;

        color: #121D40;

        font-size: 15px;
        font-weight: 400;        
    }

    

    @media only screen and (min-width: 767px) {
        padding: 50px;

        .swiper-slide p:hover {
            background-color: transparent;
            color: white;
        }

        .div-container {
            flex-direction: row;
            justify-content: space-between;
        }

        #div-conheca-todos {
            height: min-content;
        }

        a {
            height: min-content;
        }

        #div-conheca-todos:hover {
            background-color: white;
            color: #121D40;
        }
    }
`