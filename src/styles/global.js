import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    html, body {
        width: 100%;
        background-color: #eee;
        font-family: Arial, Helvetica, sans-serif;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,0.5);

        position: fixed;
        top:0;
        bottom:0;
        right:0;
        left:0;

        display: flex;
        align-items: center;
        justify-content: center;
    };

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: #f7f7f7;

        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
`;



export default GlobalStyle;