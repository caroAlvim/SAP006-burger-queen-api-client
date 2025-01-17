import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*:after,
*:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
body {
    background: #faf6f3; 
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
}
`;

export default GlobalStyle;
