import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Inter', sans-serif;
        /* font-family: 'Roboto', sans-serif; */
    }

    body {
        overflow-x: hidden;
    }
`

export default GlobalStyle