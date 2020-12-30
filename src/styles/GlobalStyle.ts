import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        font-family: 'Reem Kufi', sans-serif;
        -webkit-font-smoothing: antialised;
    }
`;