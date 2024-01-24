import styled from "styled-components";

export const H1Container = styled.h1`
    background-color: #676767;
    background-color: #A78534;
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
    padding: 50px 130px;

    width: 50%;
`

export const HrMenor = styled.hr`
    width: 70px;
    height: 7px;
    background-color: black;
    border-radius: 5px;
    margin-bottom: 10px;
`

export const HrMaior = styled.hr`
    height: 5px;
    background-color: black;
    margin-bottom: 10px;
`

export const Paragraph = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 15px;
`

export const DivPlanta = styled.div`
    display: flex;
    justify-content: space-around;

    padding: 50px 0;

    img {
        width: 250px;
    }
`

export const ImgDrogasil = styled.img`
    filter: brightness(0.7);
`

export const DivAbsolute = styled.div`
    position: absolute;
    z-index: 9;

    left: 50%;
    top: 50%;
`