import React, {useState} from "react";
import Alert from '../components/alert/alert';
import {Button} from 'react-bootstrap';

//import Redirect for demo purposes only
import {Redirect} from 'react-router-dom';
//

const AlertDemo = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    //The following action is only used for demo purposes so the green button can redirect to another url
    //This can be changed to another function
    const [redirect, setRedirect] = useState(false);
    const handleRedirect = () => setRedirect(true);
    //

    return (
        <div>

            {redirect ? <Redirect to="/AllHumansAreDeadNow" /> : null}

            <h1>Alert Demo</h1>
            <Button variant="primary" onClick={handleShow}>
                Kill all humans
            </Button>
            <Alert show={show} handleShow={handleShow} confirmAction={handleRedirect} no="Uh oh :(" yes="I hate 'em :)">
                Are you sure you want to kill them all? You will no longer have the possibility to procreate
            </Alert>

        </div>
    );
};

export default AlertDemo; 