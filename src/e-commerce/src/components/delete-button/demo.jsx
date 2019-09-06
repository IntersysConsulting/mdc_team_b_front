import React from "react";
import DeleteButton from "./delete-button.jsx";

function DeleteButtonDemo() {
  return (
    <div>
      <h1>Delete Button Demo</h1>
      <div className="row">
        <div className="col-4">
          <DeleteButton
            className="bg-orange"
            width="300px"
            height="150px"
          ></DeleteButton>
          Big Delete button
        </div>
        <div className="col-4">
          <DeleteButton
            className="bg-orange"
            tinyFix
            width="50px"
            height="50px"
          ></DeleteButton>
          Medium Delete button
        </div>
        <div className="col-4">
          <DeleteButton
            className="bg-info"
            tinyFix
            width="22px"
            height="22px"
          ></DeleteButton>
          Tiny Delete Button
        </div>

        <div className="col-6">
          <DeleteButton className="bg-teal" height="70px"></DeleteButton>
        </div>
        <div className="col-6">This button is sized with bootstrap</div>
      </div>
    </div>
  );
}

export default DeleteButtonDemo;
