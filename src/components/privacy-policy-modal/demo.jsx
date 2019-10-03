import React, {useState} from 'react';
import PrivacyPolicy from './privacy-policy-modal';
import {Button} from 'react-bootstrap';


const PrivacyPolicyDemo = () =>{

    const [demoState, setDemoState] = useState({ show: false });

    const handleOpen = () => {
        setDemoState({ show: true });
    };

    return (
        <div className="justify-content-center">
            <Button onClick={handleOpen}>Shrek</Button>
        </div>
    );
}

export default PrivacyPolicyDemo;