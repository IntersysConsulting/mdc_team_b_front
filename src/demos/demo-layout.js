import React, {useState} from 'react';
import LayoutCustomer from '../components/layout-customer/layout-customer';

const LayoutDemo = () => {
  const [accessLevelState, setAccessLevelState] = useState({ 
    accesses: [
        {role: 'registeredUser', name: 'John Smith'},
        {role: 'guest', name: 'Guest'}
    ],
  });

  return(<LayoutCustomer accessLevelState = {accessLevelState} />);
};

export default LayoutDemo;
