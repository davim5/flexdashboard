import React from 'react';

import Summary from "../Summary";
import Chart from "../Chart";
import HeatMap from '../HeatMap';

const Dashboard = () => {

    return(
        <div>
            <Summary/>
            {/* <Chart/> */}
            <HeatMap/>
            
        </div>
    );
};

export default Dashboard;