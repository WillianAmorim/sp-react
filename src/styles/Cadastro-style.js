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

    a {
        text-decoration: none;
        color: white;
        background-color: #C19A29;
        border-radius: 5px;
        width: min-content;
        padding: 10px 15px;
    }
    
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

    .form-inputs {
        display: flex;
        flex-direction: column;
        /* gap: 20px; */
    }

    /* .div-inputs div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    } */

    label {
        font-size: 15px;
        font-weight: 300;
        margin-bottom: 5px;
    }

    input {
        border-radius: 5px;
        border: none;
        height: 35px;

        padding-left: 10px;
        margin-bottom: 15px;
    }

    span {
        color: red;
    }

    p {
        font-size: 15px;
        font-weight: 300;

        margin-bottom: 15px;
    }

    button {
        width: max-content;
        padding: 10px 15px;
        display: flex;
        align-self: center;
        border-radius: 5px;
        border: none;
        background-color: #C19A29;
        color: white;
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