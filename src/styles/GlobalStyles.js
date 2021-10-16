import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    } 

    :root {
        --font-fira: 'Fira Sans', sans-serif;
        --font-kanit: 'Kanit', sans-serif;
        --font-mukta: 'Mukta Malar', sans-serif;
    }

    html, body {
        min-height: 100vh;
        font-family: var(--font-mukta);
    }

    body[data-theme="light"] {
        --background: #F1F6F9;
        --text-primary: #141414;
        --text-secondary: white;
        --sidebar: #E2EDF3;
        --sidebar-button: #2D99C8;
        --toggle-background: #F1F6F9;
        --toggle-knob: #2D99C8;
        --sidebar-input-background: #F1F6F9;
        --sidebar-input-border: #141414;
        --form-background: #E2EDF3;
        --form-input: #8D8D91;
        --form-title: '';
        --form-button: #2D99C8;
        --cancel-background: white;
        --cancel-title: '';
        --cancel-button: #ED5C5A;
        --component-background: #C6E986;
        --component-border: #40B57A;
        --component-line: '';
        --shadow: #8D8D91;
    }

    body[data-theme="dark"] {
        --background: #1E1E1F;
        --text-primary: white;
        --text-secondary: #141414;
        --sidebar: #141414;
        --sidebar-button: #2D99C8;
        --toggle-background: #1E1E1F;
        --toggle-knob: #2D99C8;
        --sidebar-input-background: #1E1E1F;
        --sidebar-input-border: white;
        --form-background: #141414;
        --form-input: #8D8D91;
        --form-title: '';
        --form-button: #2D99C8;
        --cancel-background: white;
        --cancel-title: '';
        --cancel-button: #ED5C5A;
        --component-background: #C6E986;
        --component-border: #40B57A;
        --component-line: '';
        --shadow: #8D8D91;
    }

    #container {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        grid-template-rows: minmax(0, 1fr);
    }

    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5em;
        border-radius: 8px;
    }
`;
