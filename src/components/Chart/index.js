import React, { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Line, Doughnut } from "react-chartjs-2";

import { Container } from "./styles";

const values = {
    values: [5000, 6000, 10000, 8000],
};

const Chart = () => {

    const { transactions } = useContext(TransactionsContext);

    // ARRAY DE CATEGORIAS
    let transactionCategories = transactions.map(transaction => {
        return transaction.category;
    });
    
    function removeEquals(arr) {
        return arr.filter((n,i) => arr.indexOf(n) === i)
    }

    transactionCategories = removeEquals(transactionCategories);

    // ARRAY DE DEPÓSITOS E SAQUES POR MÊS
    const depositValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const withdrawValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    transactions.map(transaction => {
        const index = new Date(transaction.date).getMonth();
        return transaction.type === 'deposit' ?
            depositValues[index] += transaction.value :
            withdrawValues[index] += transaction.value;
    });


    const lineData = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
            "Agosto","Setembro","Outubro","Novembro","Dezembro"],
        datasets: [
            {
                label: 'Depósitos',
                data: depositValues,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                fill: false,
            }, 
            {
                label: 'Saques',
                data: withdrawValues,
                borderColor: 'rgb(255, 30, 70)',
                tension: 0.1,
                fill: false,
            }

        ],
    };


    console.log(transactionCategories);
    console.log(depositValues);
    console.log(withdrawValues);

    const doughnutData = {
        labels: transactionCategories,
        datasets: [{
            label: 'Conversas',
            data: values.values,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(80, 255, 86)',
            ],
            fill: false,
        }],
    }
    return (
        <>
            <Container>
                <Line
                    data={lineData}
                    width={5}
                    height={1}
                />
            </Container>
            <Container>
                <Doughnut
                    data={doughnutData}
                    width={5}
                    height={1}
                />
            </Container>
        </>
    )
}

export default Chart;