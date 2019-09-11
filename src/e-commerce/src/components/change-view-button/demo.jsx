import React from "react";
import ChangeViewButton from "./change-view-button.jsx";

const ChangeViewButtonDemo = props => {
  const AlertChangeView = () => {
    alert("You clicked on a change view button!");
  };

  return (
    <div>
      <h1>Change View Button Demo</h1>
      <div className="row justify-content-md-center">
        <ChangeViewButton onClick={props.alerts ? AlertChangeView : undefined}>
          Apply!
        </ChangeViewButton>
        <ChangeViewButton
          onClick={props.alerts ? AlertChangeView : undefined}
          className="col-4"
        >
          Apply
        </ChangeViewButton>

        <ChangeViewButton
          onClick={props.alerts ? AlertChangeView : undefined}
          className="col-1"
        >
          Apply
        </ChangeViewButton>

        <ChangeViewButton
          onClick={props.alerts ? AlertChangeView : undefined}
          className="col-1"
          height="55px"
        >
          Apply!
        </ChangeViewButton>
      </div>
    </div>
  );
};

export default ChangeViewButtonDemo;
