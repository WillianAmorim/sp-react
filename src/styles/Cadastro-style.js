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

        text-align: center;

    }

    .div-info h1 {
        font-size: 30px;
        font-weight: 400;

    }

    .div-info p {
        font-size: 17px;
        font-weight: 300;

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

    @media only screen and (min-width: 767px) {
        flex-direction: row;
        gap: 50px;

        .div-info {
            width: 500px;
            text-align: start;
        }

        .div-inputs {
            width: 400px;
        }
        .div-inputs div input {
        }
    }
`