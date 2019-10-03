import React, {useState} from 'react';
import TermsOfService from '../terms-of-service-modal/terms-of-service-modal';
import {Button} from 'react-bootstrap';


const TermsOfServiceDemo = () =>{

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