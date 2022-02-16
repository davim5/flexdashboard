import React from 'react';
import { Container } from './styles';

const SideMenu = () => {
    return(
        <Container>
            <ul>
                <li><a href='#'>Intenções</a></li>
                <li><a href='#'>Entidades</a></li>
                <li><a href='#'>Diálogo</a></li>
                <li><a href='#'>Opções</a></li>
                <li><a href='#'>Analytics</a></li>
                <li><a href='#'>Versões</a></li>
            </ul>
        </Container>
    );
};

export default SideMenu;