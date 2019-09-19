import React from 'react';
import './logo.css';
import logo from './logo.png';

const Logo = (props) => {
  return (
    <div className="Logo">
      <a href={props.link}><img src={logo} alt= "Intersys logo"/></a>
    </div>
  );
};

export default Logo;
