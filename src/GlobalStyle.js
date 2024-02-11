import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    *,
    ::before,
    ::after {
        box-sizing: inherit;
    }

    #root {
        height: auto;
        min-height:100vh;
        background-color: ${({ theme }) => theme.color.gallery};
    }
`;

