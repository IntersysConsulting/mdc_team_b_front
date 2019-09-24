// Example of how to implement this component:
// <Switch leftWord="Filter" rightWord="Sort"/>

import React, { useState } from 'react';
import './switch.css';

const Switch = (props) => {

    const [value, setValue] = useState(false);
    const handleToggle = () => setValue(!value)

    return (
        <>
            <input
                checked={props.isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id="react-switch-new"
                type="checkbox"
            />
            <label
                className="react-switch-label"
                htmlFor="react-switch-new"
            >
                <h3 id="switch-left-parameter" className="inLine">{props.leftWord}</h3>
                <h3 id="switch-mid-parameter" className="inLine"> | </h3>
                <h3 id="switch-right-parameter" className="inLine">{props.rightWord}</h3>
                <span className="react-switch-button"/>
            </label>
        </>
    );
};

export default Switch;