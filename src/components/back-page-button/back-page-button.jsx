import React from 'react';
import './back-page-button.css';

const BackPageButton = (props) => {

    return (
        <button type="button" id="back-page-button" onClick={props.onClick}>
            <div id="top-part">
                <h1 id="back-page-title">{props.title}</h1>
                <div id="triangle-back"></div>
            </div>
            <p id="back-page-text">{props.text}</p>
        </button>
    );
};

export default BackPageButton