import React, {useState} from 'react';
import PrivacyAndTermsModal from './privacy-and-terms-modal';
import {Button} from 'react-bootstrap';


const PrivacyPolicyDemo = () =>{

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    return (
        <div className="justify-content-center">
            <Button onClick={show}>Show the Modal</Button>
            <PrivacyAndTermsModal title="Any title can go here" show={show} onHide={handleShow}>
            This is the content of the modal
            </PrivacyAndTermsModal>
        </div>
    );
}

export default PrivacyPolicyDemo;