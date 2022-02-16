import React from 'react';
import Dashboard from '../Dashboard';
import SideMenu from '../SideMenu';

import { Container } from './styles';

const Main = () => {
    return(
        <Container>
            <SideMenu></SideMenu>
            <Dashboard></Dashboard>
        </Container>
        
    );
};

export default Main;