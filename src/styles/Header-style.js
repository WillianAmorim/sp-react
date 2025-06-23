import styled from "styled-components";

export const HeaderContainer = styled.div`
    .header-desktop {
        display: none;
    }

    @media only screen and (min-width: 767px) {
        a {
            text-decoration: none;
            color: inherit;

            /* background-color: red; */
        }

        .img-header {
            position: absolute;
            left: 0;
        }

        .header-desktop {
            width: 100%;
            position: absolute;
            z-index: 999;
            padding: 40px 5px;
            background-color: rgba(0,0,0,0.3);
            color: white;

            display: flex;
            align-items: center;
            justify-content: space-around;
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

            margin-left: 300px;
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

        /* Underline From Center */
        .hvr-underline-from-center {
            display: inline-block;
            vertical-align: middle;
            -webkit-transform: perspective(1px) translateZ(0);
            transform: perspective(1px) translateZ(0);
            box-shadow: 0 0 1px rgba(0, 0, 0, 0);
            position: relative;
            overflow: hidden;
            padding-bottom: 2px;
        }
        .hvr-underline-from-center:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 51%;
            right: 51%;
            bottom: 0;
            background: #FFFFFF;
            height: 2px;
            -webkit-transition-property: left, right;
            transition-property: left, right;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        .hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
            left: 0;
            right: 0;
        }

        .div-input {
            background-color: white;
            border-radius: 5px;
            display: flex;
            align-items: center;
            padding-left: 10px;
            position: relative;

            .input-header {
                width: 200px;
                height: 40px;
                border-radius: 5px;
                border: none;
                padding-left: 10px;
            }

            .ul-filter {
                position: absolute;
                list-style: none;

                background-color: white;
                color: black;
                margin-top: 10px;
                width: 210px;
                top: 40px;

            li {
                border: 1px solid black;
                padding: 15px 0px;
                padding-left: 5px;

                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-size: 16px;
            }

            li:hover {
                background-color: black;
                color: white;
            }
        }
        }

        

        .input-header:focus {
            outline: none;
        }

        #button-intranet {
            color: white;
            /* color: #121D40; */
            background-color: #C19A29;
            /* background-color: #121D40; */
            /* background-color: black; */
            /* background-color: white; */
            
            padding: 10px 20px;

            display: flex;
            align-items: center;
            border-radius: 10px;
            width: max-content;

            font-size: 15px;
            font-weight: 300;
            border: 1px solid transparent;
        }

        
    }
    
`