
import {createGlobalStyle} from "styled-components";


const GlobalStyles=createGlobalStyle`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        /* Creating animations for dark mode */
        transition: background-color 0.3s, border 0.3s;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-family: "Poppins", sans-serif;
        //color: wheat;
        transition: color 0.3s, background-color 0.3s;
        min-height: 100vh;
        line-height: 1.5;
        font-size: 1.6rem;
    }

    /* Reset line-height for structural elements */
    div, section, article, aside, header, footer {
        line-height: unset;
    }

    div {
        line-height: 0;
    }

    h1, h2, h3, h4, h5 {
        line-height: 1.5;
    }

    p {
        font-size: 14px;
        line-height: 1.5;
        @media screen and (min-width: 768px) {
            font-size: 18px;
        }
    }

    a {
        line-height: 1.5;
        @media screen and (min-width: 768px) {
            font-size: 18px;
        }
    }

    li, ul {
        line-height: 1.5;
    }

    a {
        text-decoration: none;
    }

`

export default GlobalStyles

