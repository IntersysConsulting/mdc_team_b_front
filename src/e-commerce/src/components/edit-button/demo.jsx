import React from "react";
import EditButton from "./edit-button.jsx";

const EditButtonDemo = props => {
  const AlertEdit = () => {
    alert("You clicked on an edit button!");
  };

  return (
    <div>
      <h1>Edit Button Demo</h1>
      <div className="row justify-content-md-center">
        <EditButton
          onClick={props.alerts ? AlertEdit : undefined}
          className="col-3"
        >
          Change status
        </EditButton>

        <EditButton
          onClick={props.alerts ? AlertEdit : undefined}
          className="col-2"
          icon
        >
          Change
        </EditButton>

        <EditButton
          onClick={props.alerts ? AlertEdit : undefined}
          className="col-1"
          height="120px"
          icon
        >
          Edit
        </EditButton>

        <EditButton
          onClick={props.alerts ? AlertEdit : undefined}
          icon
          className=" col-1 icon-50x50"
        ></EditButton>
      </div>
    </div>
  );
};

export default EditButtonDemo;
