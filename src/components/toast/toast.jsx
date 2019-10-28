import React, { useState, useEffect } from "react";
import { Toast as RToast } from "react-bootstrap";
import "./toast.css";

export const Toast = props => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <RToast
      onClose={() => {
        setShow(false);
      }}
      show={show}
      delay={7500}
      autohide
    >
      <RToast.Header
        className={
          props.type === "success"
            ? "bg-green text-white"
            : props.type === "error"
            ? "bg-orange text-white"
            : "bg-purple text-white"
        }
      >
        <strong className="mr-auto">{props.title}</strong>
      </RToast.Header>
      <RToast.Body>{props.body}</RToast.Body>
    </RToast>
  );
};

export default Toast;
