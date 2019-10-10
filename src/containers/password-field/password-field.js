import PasswordField from '../../components/password-field/password-field';
import React, {useState} from 'react';

const PasswordFieldContainer = (props) => {
  const [demoState, setDemoState] = useState({
    isOpen: false,
  });

  const ToggleVisibility = () => {
    setDemoState({isOpen: !demoState.isOpen});
  };
  return (
    <PasswordField
      name={props.name}
      placeholder={props.placeholder}
      open={demoState.isOpen}
      onClick={ToggleVisibility}
      onChange={props.onChange}
    ></PasswordField>
  );
};

export default PasswordFieldContainer;
