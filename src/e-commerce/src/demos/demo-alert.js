import React, {useState} from "react";
import Alert from '../components/alert/alert'
import {Button} from 'react-bootstrap'

const AlertDemo = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    return (
        <div>
            <h1>Alert Demo</h1>
            <Button variant="primary" onClick={handleShow}>
                Log Out
            </Button>
            <Alert show={show} handleClose={handleShow} no="Cancel" yes="Yes" text="Are you sure you want to log out?" url="/dommieURL" />
        </div>
    );
};

export default AlertDemo;