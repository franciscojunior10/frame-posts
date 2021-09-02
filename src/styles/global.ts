import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F7F7F7;
    font-family: 'Montserrat', sans-serif;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
export { GlobalStyles }
