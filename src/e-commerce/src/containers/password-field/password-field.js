import PasswordField from '../../components/password-field/password-field';
import React, {useState} from 'react';

const PasswordFieldContainer = (props) => {
  const [demoState, setDemoState] = useState({isOpen: false});

  const ToggleVisibility = () => {
    setDemoState({isOpen: !demoState.isOpen});
  };
  return <PasswordField open={demoState.isOpen}
    onClick={ToggleVisibility}></PasswordField>;
};

export default PasswordFieldContainer;
