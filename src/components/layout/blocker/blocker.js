import React from 'react';
import './blocker.css';


const Blocker = (props) => {
  return (
    props.show ? <div className="Blocker" onClick={props.clicked}></div> : null
  );
};

export default Blocker;
