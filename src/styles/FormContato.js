import styled from "styled-components";

export const FormContatoContainer = styled.div`
    font-family: 'Nunito Sans', sans-serif;
    padding: 100px 25px 0px 25px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    section {

        display: flex;
        flex-direction: column;
        gap: 20px;

        h1 {
            font-weight: 400;
            font-size: 30px;
            text-align: center;
        }

        a {
            text-decoration: none;
            border: 1px solid #BBBCC0;
            width: 100%;
            padding: 15px;
            color: inherit;
            border-radius: 5px;
            text-align: center;

            font-size: 12px;
        }

        p {
            font-weight: 300;
            font-size: 16px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        border: 1px solid #BBBCC0;
        border-radius: 5px;

        padding: 25px;

        label {
            margin-top: 25px;
            display: flex;
            gap: 5px;
        }

        span {
            color: red;
        }

        input {
            height: 50px;
            border: 1px solid #BBBCC0;
            margin-top: 5px;
            padding-left: 10px;
            border-radius: 5px;

        }

        textarea {
            border: 1px solid #BBBCC0;
            margin-top: 5px;
            padding-left: 10px;
            padding-top: 10px;
        }

        button {
            margin-top: 25px;
            width: max-content;
            display: flex;
            align-self: center;
            background-color: black;
            color: white;
            padding: 15px;
            border: none;
            border-radius: 5px;
        }
        
        div {
            margin-top: 25px;
            display: flex;
            flex-direction: column;
            gap: 25px;

            p {
                font-size: 14px;
                font-weight: 200;
                line-height: 20px;

                #politica-privacidade {
                    color: black;
                    text-decoration: underline;
                }
            }

            
        }

        button {
            background-color: #121D40;
        }
        
    }

    @media only screen and (min-width: 767px) {

        gap: 40px;

        section {
            width: 450px;
            margin-top: 50px;
            margin-left: 50px;
            align-items: start;
            gap: 25px;

            a {
                width: 55%;
            }
        }

        form {
            width: 55%;
            align-self: center;
            margin-bottom: 40px;
        }

        label, input, textarea, div {
            margin: 0 50px;
        }
        
    }
`