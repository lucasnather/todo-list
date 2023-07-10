import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        --webkit-font-smoothing: antialiased;
        --moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
    }

    ul {
        list-style: none;
    }

    body, button input {
        font-family: 'Inter', sans-serif;
    }

    body {
        ${(props) => `background-color: ${props.theme['gray-600']}`};
        font-weight: 400;
        font-size: 1.6rem;
    }
`
