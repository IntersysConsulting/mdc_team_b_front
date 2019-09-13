// Example of how to insert this component:
// import Checkbox from '../components/checkbox/Checkbox';
// <Checkbox text = "Are you human?" />
// This checkbox should return a TRUE or FALSE statement

import React, {useState} from 'react';
import './checkbox.css';
import '../../custom.scss';

export default function Checkbox(props) {
    const [checkboxState, setCheckboxState] = useState(false);
    
    /* callback to change the checkboxState to the opposite 
    boolean value when the checkbox is checked or unchecked */
    function handleCheckboxStateChange(e) {
        setCheckboxState(!checkboxState);
    }

        const checkbox = (
            <label className="container">{props.text}
                    <input
                        type="checkbox"
                        id={`react-switch-new`}
                        onClick={handleCheckboxStateChange}
                    />
                    <span className="checkmark"></span>
                    {/* Uncomment the next line to test if the value is being changed */}
                    {/* <p>{checkboxState.toString()}</p> */}
            </label>
        );

        return (
            <div>
                {checkbox}
                {checkboxState}
            </div>
        );
}