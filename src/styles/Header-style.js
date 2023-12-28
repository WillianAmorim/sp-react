import styled from "styled-components";

export const HeaderContainer = styled.div`
    font-family: 'Inter', sans-serif;

    .header-desktop {
        display: none;
    }

    li {
        list-style: none;
    }

    nav {
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 99;
        align-items: flex-end;
        right: 0;
        background-color: white;
        width: 80%;
        height: 100%;
        padding: 50px 25px;
        gap: 50px;
    }

    .ul-principal-mobile {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        color: black;
        list-style: none;
        gap: 25px;
        font-size: 20px;
        padding-top: 50px;
    }

    #img-open {
        position: absolute;
    }

    .ul-areas-atuacao-mobile {
        padding: 25px 0px 0px 25px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        font-size: 17px;
    }

    #locacoes {
        position: relative;
    }

    .ul-locacoes {
        padding: 25px 0px 0px 25px;
        left: 0;
        display: flex;
        flex-direction: column;
        gap: 25px;
        position: relative;
        font-size: 15px;
    }

    @media only screen and (min-width: 767px) {
        nav {
            display: none;
        }  

        a {
            text-decoration: none;
            color: inherit;
        }

        .img-header {
            position: absolute;
            left: 0;
        }

        .header-desktop {
            width: 100%;
            position: absolute;
            z-index: 99;
            padding: 50px 15px;
            background-color: transparent;
            color: white;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        .ul-header {
            display: flex;
            list-style: none;
            gap: 30px;
            align-items: center;

            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
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
            background-color: rgba(0,0,0,0.5);
            display: none;
            
        }

        .item-area-atuacao {
            padding: 15px 10px;
        }

        .item-area-atuacao:hover {
            background-color: rgba(255,255,255,0.4);
        }

        #locacoes {
            position: relative;
        }

        .ul-locacoes {
            list-style: none;
            display: flex;
            flex-direction: column;
            position: absolute;
            width: max-content;
            left: 156px;
            top: 0;
            background-color: rgba(0,0,0,0.5);
            padding: 0px 0px;
            gap: 0;
        }

        .item-locacoes {
            padding: 15px 10px;
        }

        .item-locacoes:hover {
            background-color: rgba(255,255,255,0.4);
        }
    }
    
`