import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --color-bg--header: #590EA7;
        --color-purple: #7D00FF;
        --color-white: #fff;
        --color-pink: #ED1CA6;
        --color-bg: #242424;
        --color-gray--500: #A5A5A5;
        --color-gray--100: #DFE3EB;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    ul, li, a {
        list-style: none;
        text-decoration: none;
    }

    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: var(--color-bg);
    }
    
    img {
        max-width: 100%;
        object-fit: cover;
        display: block;
        height: auto;
    }
`;

export default GlobalStyles