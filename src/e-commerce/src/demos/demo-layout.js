import React, {useState} from 'react';
import SearchBar from '../components/search-bar/search-bar';
import Logo from '../components/logo/logo';
import Blocker from '../components/blocker/blocker';
import Button from '../components/button/button';

const LayoutDemo = () => {
  const [blockerState, setBlockerState] = useState({show: false});

  const BlockerHandler = () => {
    console.log(blockerState.show);
    setBlockerState({show: !blockerState.show});
  };

  const closed = () => {
    setBlockerState({show: !blockerState.show});
  };

  return (
    <div>
      <h1>Demo Layout Components</h1>
      <SearchBar></SearchBar>
      <Logo link="/"/>
      <br/><Button onClick={BlockerHandler}>Press to block view</Button>
      <Blocker show = {blockerState.show} clicked={closed} ></Blocker>
    </div>
  );
};

export default LayoutDemo;
