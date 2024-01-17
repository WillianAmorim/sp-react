import styled from "styled-components";

export const HeaderContainer = styled.div`
    .header-desktop {
        display: none;
    }

    @media only screen and (min-width: 767px) {
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
            padding: 40px 15px;
            background-color: rgba(0,0,0,0.3);
            color: white;

            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
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
            z-index: 9;
            color: white;
            /* background-color: red; */
            padding: 10px
        }

        .ul-areas-atuacao {
            list-style: none;
            display: flex;
            flex-direction: column;
            position: absolute;
            width: max-content;
            top: 40px;
            left: 0px;
            background-color: rgba(0,0,0,0.5);
            /* background-color: transparent; */
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
            /* background-color: transparent; */
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