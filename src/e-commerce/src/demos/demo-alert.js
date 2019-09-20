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
                Kill all humans
            </Button>
            <Alert show={show} handleShow={handleShow} no="Uh oh :(" yes="I hate 'em :)" url="/AllHumansAreDeadNow">
                Are you sure you want to kill them all? You will no longer have the possibility to procreate
            </Alert>
        </div>
    );
};

export default AlertDemo;