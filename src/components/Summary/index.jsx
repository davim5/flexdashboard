import React from 'react';
import { Container, Card } from './styles';

const Summary = (props) => {

    return(
        <Container>
            <Card>
                <h6>Total de Conversas</h6>
                <strong>300</strong>
            </Card>
            <Card>
                <h6>Med. msg. por conversa</h6>
                <strong>6</strong>
            </Card>
            <Card>
                <h6>Máximo de conversas</h6>
                <strong>200</strong>
            </Card>
            <Card>
                <h6>Weak understanding</h6>
                <strong>24</strong>
            </Card>
        </Container>
    );
};

export default Summary;