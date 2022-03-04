import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2vh;
    margin-bottom: 2vh;

    padding: 2vh 0;
    width: 86vw;
    background-color: #fff;
    box-shadow: -0.5px 2px 6px rgba(0,0,0,0.1);
`;

export const Card = styled.div`
    height: 20vh;
    padding: 0 0 0 4vh;
    min-width: 20vw;
    /* max-width: 20vw; */
    width: 20vw;

    h6 {
        color: #333;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 2vh;
    }

    strong {
        font-size: 42px;
        font-weight: normal;
    }

    & + & {
        border-left: 2px solid #ccc;
    }
`
