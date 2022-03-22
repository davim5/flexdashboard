import React, { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Line, Doughnut } from "react-chartjs-2";

import { Container, ChartContainer, DoughnutBox, DoughnutChartCointainer } from "./styles";

const values = {
    values: [5000, 6000, 10000, 8000],
};

const Chart = () => {
    const [filter, setFilter] = useState('year');
    const [year, setYear] = useState('2022');
    const [month, setMonth] = useState('Janeiro');
    const [day, setDay] = useState('01');

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

    const MonthsArray = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
    "Agosto","Setembro","Outubro","Novembro","Dezembro"];

    function DayArrayMaker(month) {

        if(month === '4' | '6' | '9' | '11') {
            return ["01","02","03","04","05","06","07","08","09"
            ,"10","11","12","13","14","15","16","17","18","19","20","21","22","23","24",
            "25","26","27","28","29","30","31"];
        }
        else if(month ==='2')
        {
            return ["01","02","03","04","05","06","07","08","09"
            ,"10","11","12","13","14","15","16","17","18","19","20","21","22","23","24",
            "25","26","27","28"];   
        }
        else
            return ["01","02","03","04","05","06","07","08","09"
            ,"10","11","12","13","14","15","16","17","18","19","20","21","22","23","24",
            "25","26","27","28","29","30"];
    };

    const hourArray = ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00",
    "08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00",
    "18:00","19:00","20:00","21:00","22:00","23:00"]

    const DayArray = ["01","02","03","04","05","06","07","08","09"
    ,"10","11","12","13","14","15","16","17","18","19","20","21","22","23","24",
    "25","26","27","28","29","30"];

    const YearsArray = ['2022','2021','2020','2019','2018'];

    // useEffect(()=>{
    //     console.log(filter);
    // },[filter])

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

    function lineDataUpdater(labels){
        return {
            labels: labels,
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
        }
    }

    const options = {
        title: {
            display: true,
            text: 'Custom Chart Title'
        }
    }

    return (
        <Container>
        <select
        value={filter} 
        onChange={(event) => setFilter(event.target.value)}
        >
            <option value="day"> Dia </option>
            <option value="month"> Mês </option>
            <option value="year"> Ano </option>
        </select>
        { filter === 'year' &&
            <select 
            onChange={(event) => setYear(event.target.value)}
            >
                {YearsArray.map((year) => <option value={year}>{year}</option>  )}
            </select>
        }
        { filter === 'month' &&
            <select
            onChange={(event) => setMonth(event.target.value)}
            >
                {MonthsArray.map((month) => <option value={month}>{month}</option>  )}
            </select>
        }
        { filter === 'day' &&
            <select
            onChange={(event) => setDay(event.target.value)}
            >
                {DayArray.map((day) => <option value={day}>{day}</option>  )}
            </select>
        }

            <ChartContainer>
                { filter === 'year' &&
                 (
                 <Line
                    options = {{
                        title: {
                            display: true,
                            text: "Saldo anual",
                            fontSize: 14
                        }
                    }}
                    data={lineDataUpdater(MonthsArray)}
                    width={5}
                    height={1}
                />)}
                { filter === 'month' &&
                 (<Line
                    options = {{
                        title: {
                            display: true,
                            text: "Saldo mensal",
                            fontSize: 14
                        }
                    }}
                    data={lineDataUpdater(DayArray)}
                    width={5}
                    height={1}
                />)}
                { filter === 'day' &&
                 (<Line
                    options = {{
                        title: {
                            display: true,
                            text: "Saldo diário",
                            fontSize: 14
                        }
                    }}
                    data={lineDataUpdater(hourArray)}
                    width={5}
                    height={1}
                />)}
            </ChartContainer>
            <DoughnutChartCointainer>
                <DoughnutBox>
                    <Doughnut
                        options = {{
                            title: {
                                display: true,
                                text: "Ganhos por categoria",
                                fontSize: 14
                            }
                        }}
                        data={doughnutData}
                        width={5}
                        height={2}
                        />
                </DoughnutBox>
                <DoughnutBox>
                    <Doughnut
                        options = {{
                            title: {
                                display: true,
                                text: "Gastos por categoria",
                                fontSize: 14
                            }
                        }}
                        data={doughnutData}
                        width={5}
                        height={2}
                        />
                </DoughnutBox>
            </DoughnutChartCointainer>
        </Container>
    )
}

export default Chart;