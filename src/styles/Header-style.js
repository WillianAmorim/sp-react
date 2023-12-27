import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 50px;
    color: white;

    /* background-color: red; */

    z-index: 9;

    .img-header {
        position: absolute;
        left: 0;
        height: 100px;
    }

    svg {
        display: none;
    }

    .ul-header {
        display: flex;
        list-style: none;
        gap: 70px;
        align-items: center;

        font-family: 'Inter', sans-serif;
        font-weight: 300;
        font-size: 15px;

    }

    .ul-header li a{
        text-decoration: none;
        color: white;
    }

    #li-areas-atuacao {
        position: relative;
    }

    .ul-areas-atuacao {
        list-style: none;
        display: flex;
        flex-direction: column;
        position: absolute;
        width: max-content;
        top: 30px;
    }

    .item-area-atuacao {
        padding: 15px 10px;
        /* background-color: rebeccapurple;
        border: 1px solid black; */
    }

    .item-area-atuacao:hover {
        background-color: rgba(255,255,255,0.4);
    }

    /* .item-area-atuacao:hover a {
        color: black;
    }

    .item-area-atuacao:hover {
        color: black;
    } */

    #locacoes {
        position: relative;
    }

    .ul-locacoes {
        list-style: none;
        display: flex;
        flex-direction: column;
        position: absolute;
        width: max-content;
        left: 145px;
        top: 0;
    }

    .item-locacoes {
        /* background-color: blue; */
        padding: 15px 10px;
    }

    .item-locacoes:hover {
        background-color: rgba(255,255,255,0.4);
    }

    @media only screen and (max-width: 767px) {
        .ul-header {
            display: none;
        }

        #input-header {
            display: none;
        }

        align-items: center;
        justify-content: space-between;

        img {
            width: 200px;
            height: auto;
        }
    }
`