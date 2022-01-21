import { createGlobalStyle } from "styled-components";
import bgpng from '../assets/bg-fundo.png';


export const GlobalStyle = createGlobalStyle`
:root{
    --blue: #162646,
    --yellow: #ECBD00;
    --red: #BF0000;
    --background:#ADBEA7;
}

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1080px){
        font-size: 93.75%;
    }
    @media(max-width: 720px){
        font-size: 87.5%;
    }

body, input, textarea, button{
    font-family: 'Poppis', sans-serif;
    font-weight: 400;
    }

body {
    background-image: url(${bgpng});
    background-size: cover;
    background-repeat: no-repeat;
    
}
h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
    }

button {
    cursor: pointer;
    }

[disabled]{
    opacity: 0.6;
    }
}
`;

