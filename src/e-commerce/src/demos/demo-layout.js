import React, {useState} from 'react';
import SearchBar from '../components/search-bar/search-bar';
import Logo from '../components/logo/logo';

const LayoutDemo = () => {
  return (
    <div>
      <h1>Demo Layout Components</h1>
      <SearchBar></SearchBar>
      <Logo link="/"/>
    </div>
  );
};

export default LayoutDemo;

