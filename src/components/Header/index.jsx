import React from 'react';
import { Container } from './styles';

const Header = ({handleOpenNewTransactionModal}) => {

    return(
        <Container>
            <h2>Dashboard Financeiro</h2>
            <button 
            type='button' 
            onClick={handleOpenNewTransactionModal}>
                Nova Transação
            </button>

            
        </Container>
    );
};

export default Header;