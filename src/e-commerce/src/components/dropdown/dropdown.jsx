import React, {useState} from 'react';
import './dropdown.css';
import {Dropdown as Drop, SplitButton, DropdownButton} from 'react-bootstrap';

const Item = (props) => {
  return (
    <Drop.Item onClick={()=> {
      props.onClick();
    }}>
      <p>
        {props.value}
      </p>
    </Drop.Item>
  );
}

const Dropdown = (props) => {
  // Receives prop options(array)
  const options = Array.isArray(props.options) ? [...props.options] : ['-'];
  const defaultOption = options[0]!='-' ? options[0] : '-';
  const [dropdownState, setDropdownState] = useState({selected: defaultOption});

  const handleClick = (i) =>{
    setDropdownState({selected: i});
  };

  const renderOption = (i) => {
    return (<Item value={i} onClick={()=> {
      handleClick(i);
    }}/>);
  };

  const menuOptions = options.map((e) => {
    return renderOption(e);
  });

  const createDrop = () => {
    if (props.editable) {// idk if we should support this, it's pretty hard with react-bootstrap components
      return (
        <SplitButton variant='light' className='dropdown' title={dropdownState.selected} id={props.id}>
          {menuOptions}
        </SplitButton>
      );
    } else {
      return (
        <DropdownButton variant='light' className='dropdown' title={dropdownState.selected} id={props.id}>
          {menuOptions}
        </DropdownButton>
      );
    }
  };

  return createDrop();
};

export default Dropdown;
