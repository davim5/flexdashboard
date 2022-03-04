import styled from "styled-components";
import { darken } from "polished";
export const Container = styled.div`
    padding: 1.5vh;

    background-color: #fff;

    border-bottom: 1px solid #ccc;

    display: flex;
    justify-content: space-between;

    button {
        background-color: #0070ff;
        color: #fff;
        border: none;

        border-radius: 6px;
        padding: 6px;

        font-weight: bold;

        transition: background-color 0.25s;

        &:hover {
            background-color: ${darken(0.05,"#0070ff")} ;
        }
    }
`;

