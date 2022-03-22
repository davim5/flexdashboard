import styled from 'styled-components';

export const Container = styled.div`

    width: 86vw;
    height: 300px;
    background-color: #fff;
    box-shadow: -0.5px 2px 6px rgba(0,0,0,0.2);

    select {
        margin: 1rem;
        padding: 0 1rem;
        height: 2rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #f8f8f8;

        font-weight: 400;
        font-size: 16px;
    }
`;

export const ChartContainer = styled.div`

    width: 86vw;
    height: 300px;
    background-color: #fff;
    box-shadow: -0.5px 2px 6px rgba(0,0,0,0.2);
`;


export const DoughnutBox = styled.div`

    width: 40rem;
    height: 300px;
    background-color: #fff;
    box-shadow: -0.5px 2px 6px rgba(0,0,0,0.2);
`;

export const DoughnutChartCointainer = styled.div`
    margin-top: 2vh;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
`;