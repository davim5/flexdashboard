import { useState, useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import Modal from 'react-modal';

import { Container, TransactionTypeContainer, RadioBox } from './styles';


export function NewTransactionModal({isOpen,onRequestClose}) {
    const { createTransaction } = useContext(TransactionsContext);

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0);

    function resetModalValues() {
        setTitle('');
        setValue(0);
        setDate('');
        setType('deposit');
        setCategory('');
    };

    async function handleCreateNewTransaction(event) {
       event.preventDefault();

       await createTransaction({
           title,
           value,
           date,
           type,
           category
       });
       
        resetModalValues();
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder= "Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder= "Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <input
                    type="date"
                    placeholder= "Data"
                    value={date}
                    onChange={event => setDate(event.target.value)}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={()=>setType('deposit')}
                        isActive={type==='deposit'}
                        activeColor="green"
                    >
                        Entrada
                    </RadioBox>
                    <RadioBox
                        type='button'
                        onClick={()=>setType('withdraw')}
                        isActive={type==='withdraw'}
                        activeColor="red"
                    >
                        Saída
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder= "Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type='submit'> Cadastrar </button>
            </Container>
        </Modal>
    );
}