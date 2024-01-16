import styled from "styled-components";
import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

export const ContainerNav = styled.div`
    @media only screen and (min-width: 767px) {
       display: none;
    }
`

export const NavbarContainer = styled.header`
    width: 100%;
    position: absolute;
    height: 80px;
    background-color: rgba(0,0,0,0.3);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
    padding-right: 10px;

    
`

export const IconNavbarOpen = styled(FiAlignJustify)`
    font-size: 30px;
`

export const Sidebar = styled.div`
    .div-header-sidebar {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding-right: 10px;
    }

    a {
    text-decoration: none;
    color: inherit;
    }

    width: 300px;
    height: 100vh;
    background-color: white;
    color: black;
    /* color: #121D40; */
    position: absolute;
    z-index: 99;
    top: 0;
    right: ${(props) => (props.visible ? '0' : '-300px')};
    transition: right 0.7s ease-in-out;

    section {
        padding-top: 25px;  
        display: flex;
        flex-direction: column;
        gap: 25px;

        padding-left: 10px;
    }

    .list-menu-at {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .areas-atuacao {
        flex-direction: column;
        list-style: none;
        padding-left: 15px;
        gap: 15px;
    }

    #li-locacao {
        /* padding-left: 15px; */
    }

    .locacoes {
        list-style: none;
        padding-left: 30px;

        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .item-menu-navbar {
        font-size: 25px;
    }

    .item-menu-areasAtuacao {
        font-size: 20px;
        color: black;
    }

    .item-menu-locacao {
        font-size: 17px;
    }
`;

export const IconNavbarClose = styled(AiOutlineClose)`
    font-size: 30px;
`

