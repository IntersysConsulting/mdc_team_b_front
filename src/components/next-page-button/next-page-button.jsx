import React from 'react';
import './next-page-button.css';

const NextPageButton = (props) => {

    return (
        <button type="button" id="next-page-button" onClick={props.onClick}>
            <div id="top-part">
                <div id="triangle"></div>
                <h1 id="next-page-title">{props.title}</h1>
            </div>
            <p id="next-page-text">{props.text}</p>
        </button>
    );
};

export default NextPageButton