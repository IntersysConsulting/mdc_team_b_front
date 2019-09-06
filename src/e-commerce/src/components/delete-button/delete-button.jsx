import React from "react";
// import "./delete-button.css";
import Button from "../button/button.jsx";
import image from "./delete-button.svg";

function DeleteButton(props) {
  return (
    <div
      style={{
        width: props.width,
        height: props.height
      }}
    >
      <Button
        className={"auto-height icon-only " + props.className}
        icon={image}
      ></Button>
    </div>
  );
}

export default DeleteButton;
