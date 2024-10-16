import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        overflow-x: hidden;

        h1, h2, h3, h4, p, a, li, ul {
            overflow: hidden;
        }
    }
`

export default GlobalStyle;