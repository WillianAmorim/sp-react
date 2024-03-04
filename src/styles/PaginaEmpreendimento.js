import styled from "styled-components";

export const H1Container = styled.h1`
    /* background-color: #676767; */
    /* background-color: black; */
    /* background-color: #A78534; */
    /* background-color: #121D40; */
    /* width: 100%; */
    /* height: 50px; */
    display: flex;
    /* align-items: center; */
    /* clip-path: polygon(0% 0%, 60% 0%, 67% 100%, 0% 100%); */
    color: black;
    /* padding-left: 15px; */
    max-width: min-content;

    font-family: 'Inter', sans-serif;
    font-size: 25px;
    border-bottom: 5px solid black;
    border-radius: 3px;
`

export const FormContainer = styled.h1`
    /* background-color: #676767; */
    /* background-color: black; */
    background-color: #A78534;
    /* background-color: #121D40; */
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    clip-path: polygon(0% 0%, 60% 0%, 67% 100%, 0% 100%);
    color: white;
    padding-left: 15px;

    font-family: 'Inter', sans-serif;
    font-size: 25px;
`

export const DivElements = styled.div`
    display: flex;
    flex-direction: column;

    gap: 50px;
    padding: 25px;

    @media only screen and (min-width: 767px) {
        width: 40%;
    }
`

export const HrMaior = styled.hr`
    height: 5px;
    background-color: black;
    margin-bottom: 10px;
`

export const Paragraph = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    margin-top: 10px;
`

export const DivPlanta = styled.div`

    display: flex;
    flex-direction: column;
    padding: 25px 50px;
    gap: 50px;

    @media only screen and (min-width: 767px) {
        flex-direction: row;
        justify-content: space-around;
        img {
            width: 25%;
        }
    }
`

export const ImgPrincipal = styled.img`
    filter: brightness(0.7);
    height: 50vh;
    width: 100%;
    position: relative;

    @media only screen and (min-width: 767px) {
        height: 80vh;
    }
`

export const ImgCarrosel = styled.img`
    width: 100%;
    height: 10vh;
    display: flex;
    border-radius: 5px;
    
    
    @media only screen and (min-width: 767px) {
        width: 100%;
        height: 20vh;
        border-radius: 5px;
    }
`

export const DivAbsolute = styled.div`
    height: min-content;
    position: absolute;
    z-index: 9;

    right: 25px;
    top: 40vh;

    .links-share {
        display: flex;
        gap: 10px;
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        opacity: 1;
        transition: opacity 2000ms;
    }

    .fade-exit {
        opacity: 1;
    }

    .fade-exit-active {
        opacity: 0;
        transition: opacity 2000ms;
    }

    @media only screen and (min-width: 767px) {
        top: 70vh;
        right: 50px;
    }

`

export const StyledGoShare = styled.div`
  color: white;
  font-size: 25px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 3px 8px;
`;