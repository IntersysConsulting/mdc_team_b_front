import React, { useState } from 'react';
import DemoButton from './demos/demo-button';
import DemoStatus from './demos/demo-status';
import DemoCards from './demos/demo-cards';
import DemoAddress from './demos/demo-address';
import DemoDrop from './demos/demo-dropdown';
import './App.css';

const App = () => {
    const defaultAlerts = true;
    const [appState, setAppState] = useState({ alerts: defaultAlerts });

    return ( <
        div className = "App" >
        <
        DemoButton > < /DemoButton> <
        DemoStatus > < /DemoStatus> <
        DemoCards > < /DemoCards> <
        DemoAddress > < /DemoAddress> <
        DemoDrop > < /DemoDrop> <
        /div>
    );
};

export default App;