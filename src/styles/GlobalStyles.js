import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    } 

    html, body {
        min-height: 100vh;
        background: var(--background);
    }

    body[data-theme="light"] {
        --background: lightgrey;
    }

    body[data-theme="dark"] {
        --background: grey;
    }
`;