import React,{ useState } from 'react';
import { InputGroup, FormControl } from "react-bootstrap";

const Input = props => {

  return (
    <React.Fragment>
        <FormControl
          placeholder={props.placeholder}
          aria-label={props.placeholder}
          aria-describedby="basic-addon1"
          onChange={props.onChange}
        />
    </React.Fragment>
  )
};

export default Input;
