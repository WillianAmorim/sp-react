import styled from "styled-components";

export const CadastroContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 25px;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background-color: #121D40;

    color: white;
    
    .div-info {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .div-info h1 {
        font-size: 30px;
        font-weight: 400;

        text-align: center;
    }

    .div-info p {
        font-size: 17px;
        font-weight: 300;

        text-align: center;
    }

    .div-inputs {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .div-inputs div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .div-inputs div label {
        font-size: 15px;
        font-weight: 300;
    }

    .div-inputs div input {
        border-radius: 5px;
        border: none;
        height: 35px;

        padding-left: 10px;
    }

    .div-inputs span {
        color: red;
    }

    .div-inputs p {
        font-size: 15px;
        font-weight: 300;
    }
    /* display: flex;
    padding: 0px 15px;
    justify-content: center;
    align-items: center;
    gap: 70px;

    background-color: #121D40;

    padding-top: 50px;
    padding-bottom: 50px;

    font-family: 'Inter', sans-serif;

    
    .div-info {
        width: 400px;
        color: white;

        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .div-info h1 {
        font-size: 40px;
        font-weight: 400;
    }

    .div-info p {
        font-size: 17px;
        font-weight: 300;
    }

    .div-inputs {
        display: flex;
        flex-direction: column;
        gap: 30px;

        color: white;
    }

    .div-inputs div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .div-inputs div label {
        font-size: 15px;
        font-weight: 300;
    }

    .div-inputs div input {
        border-radius: 5px;
        border: none;
        height: 35px;

        padding-left: 10px;
    }

    .div-inputs span {
        color: red;
    }

    .div-inputs p {
        font-size: 15px;
        font-weight: 300;
    } */

    @media only screen and (min-width: 767px) {
        /* flex-direction: column;
        gap: 20px;

        .div-info {
            width: auto;
            text-align: center;
        }

        .div-info h1 {
            font-size: 30px;
        }

        .div-info p {
            font-size: 15px;
            font-weight: 300;
        }

        .div-inputs {
            width: 80%;
            gap: 15px;
        }

        .div-inputs div {
            display: flex;
            flex-direction: column;
        } */
    }
`