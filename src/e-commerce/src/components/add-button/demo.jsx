import React from "react";
import AddButton from "./add-button.jsx";

const AddButtonDemo = props => {
  const AlertAdd = () => {
    alert("You clicked on an add button!");
  };

  return (
    <div>
      <h1>Add Button Demo</h1>
      <AddButton
        onClick={props.alerts ? AlertAdd : undefined}
        circle
      ></AddButton>
      <div className="row justify-content-md-center">
        <AddButton
          onClick={props.alerts ? AlertAdd : undefined}
          square
          className="col-md-auto"
        >
          Add new address
        </AddButton>
      </div>
    </div>
  );
};

export default AddButtonDemo;
