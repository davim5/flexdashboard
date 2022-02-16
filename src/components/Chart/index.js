import React from "react";
import { Line } from "react-chartjs-2";

import { Container } from "./styles";

const data = {
    labels:["Janeiro","Fevereiro","Março", "Abril","Maio", "Junho", "Julho",
    "Agosto"],
    datasets: [{
        label: 'Conversas',
        data: [12,16,14,24,27,20,23,25],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        fill: false,
    }],
};


const Chart = () => {
    return (
        <Container>
            <Line
                data={data}
                width= {5}
                height= {1}
                />
        </Container>
    )
}

export default Chart;