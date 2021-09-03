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

  *::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
  }

  *::-webkit-scrollbar-track {
    box-shadow: none;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.2);
    outline: none;
    border-radius: 10px;
  }
`
export { GlobalStyles }
