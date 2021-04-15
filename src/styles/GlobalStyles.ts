import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.black};
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
  }
  button { 
    cursor: pointer;
  }
`