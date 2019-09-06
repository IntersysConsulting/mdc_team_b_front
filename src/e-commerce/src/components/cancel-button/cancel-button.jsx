import React from "react";
import Button from "../button/button.jsx";

function CancelButton(props) {
  return <Button className={"bg-blue text-white"}>{props.children}</Button>;
}

export default CancelButton;
