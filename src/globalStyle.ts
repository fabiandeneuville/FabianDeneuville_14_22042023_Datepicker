import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', arial, helvetica, sans-serif
`;

export default GlobalStyle;