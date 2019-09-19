import React, {useState} from 'react';
import './switch.css'

const SwitchStructure = ({ isOn, handleToggle, onColor }) => {
    return (
        <>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: isOn && onColor }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <h3 id="left" className="inLine">Physical</h3>
                <h3 id="mid" className="inLine"> | </h3>
                <h3 id="right" className="inLine">Digital</h3>
                <span className={`react-switch-button`} />
            </label>
        </>
    );
};

function Switch() {
    const [value, setValue] = useState(false);
    return (
        <div>
            <SwitchStructure
                isOn={value}
                onColor=""
                handleToggle={() => setValue(!value)}
            />
        </div>
    );
}

export default Switch;