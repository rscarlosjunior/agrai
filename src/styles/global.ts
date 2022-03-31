import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Merriweather Sans', sans-serif !important;
  }

  html {
    width: 100%;
    height: 100%;
    min-height: 100%;
    font-size: 62.5%;
  }

  body, #app {
    width: 100%;
    height: 100%;
    display:flex;
    min-height: 100vh;
    position: relative;
    background-color: white;
  }

  body {
    font-family: 'Merriweather Sans', sans-serif;
    font-display: swap;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-width: 0px;
    width: 100%;
    height: 100%;
    background: transparent;
  }

  select,
  option {
    /* Paragraph */
    font-family: 'Lato-Regular' !important;
    font-style: normal;
    font-weight: 500;
    font-size: 16px !important;
    line-height: 24px;

    /* gray / dark */
    color: #333333;
  }

  input:focus,
  textarea:focus {
    outline: none;
    box-shadow: none;

    /* tannat / default */
    border-color: rgb(80, 184, 72) !important;
  }
`

export default GlobalStyles
