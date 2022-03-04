import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`
    h2 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e1e9ee;

        font-weight: 400;
        font-size: 16px;

        &::placeholder {
            color: #aaa;
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: #0070ff;
        color: #fff;
        font-weight: 600;

        border-radius: 0.25rem;
        border:0;
        font-size: 1rem;
        margin-top: 1.5rem;

        transition:filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`

const colors = {
    green: '#33cc95',
    red: '#e52e40'
};

export const RadioBox = styled.button`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive 
    ? transparentize(0.7,colors[props.activeColor])
    : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
        border-color: #aaa;
    }

    span {
        font-size: 1rem;
        color: #111;
    }
`