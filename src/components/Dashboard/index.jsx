import React, { useContext } from 'react';
import { api } from '../../services/api';

import Summary from "../Summary";
import Chart from "../Chart";
import { ConversationsContext } from '../../contexts/ConversationsContext';


const Dashboard = () => {
    const data = useContext(ConversationsContext);

    console.log(data);

    return(
        <div>
            <Summary data={data}/>
            <Chart/>
        </div>
    );
};

export default Dashboard;