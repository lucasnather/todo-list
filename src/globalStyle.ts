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

    body {
        font-family: 'Inter', sans-serif;
        ${(props) => `background-color: ${props.theme['gray-500']}`};
        font-size: 1.6rem;
    }
`
