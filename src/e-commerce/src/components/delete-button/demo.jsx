import React from "react";
import DeleteButton from "./delete-button.jsx";

function DeleteButtonDemo(props) {
  function AlertDelete() {
    alert("You clicked on a delete button!");
  }

  return (
    <div>
      <h1>Delete Button Demo</h1>
      <div className="row justify-content-md-center">
        <DeleteButton
          onClick={props.alerts ? AlertDelete : undefined}
          className="col-4"
          variant="orange"
        ></DeleteButton>

        <DeleteButton
          onClick={props.alerts ? AlertDelete : undefined}
          className="icon-50x50 col-4"
          variant="orange"
        ></DeleteButton>

        <DeleteButton
          onClick={props.alerts ? AlertDelete : undefined}
          className="icon-22x22 col-4"
          variant="red"
        ></DeleteButton>

        <DeleteButton
          onClick={props.alerts ? AlertDelete : undefined}
          className="col-6"
          height="70px"
          variant="red"
        ></DeleteButton>
      </div>
    </div>
  );
}

export default DeleteButtonDemo;
