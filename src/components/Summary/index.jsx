import React, { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { Container, Card } from './styles';

const Summary = () => {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') 
        {
            acc.deposits += transaction.value;
            acc.total += transaction.value;
        }
        else
        {
            acc.withdraws += transaction.value;
            acc.total -= transaction.value;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    });

    return(
        <Container>
            <Card>
                <h6>Depósitos</h6>
                <strong>R$ {summary.deposits}</strong>
            </Card>
            <Card>
                <h6>Saques</h6>
                <strong>R$ {summary.withdraws}</strong>
            </Card>
            <Card>
                <h6>Média Mensal</h6>
                <strong>R$ 200</strong>
            </Card>
            <Card>
                <h6>Saldo</h6>
                <strong>R$ {summary.total}</strong>
            </Card>
        </Container>
    );
};

export default Summary;