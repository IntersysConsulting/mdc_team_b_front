import React from "react";
import PersonalDetailsCard from "./personal-details-card.jsx";

const PersonalDetailsCardDemo = props => {
  const AlertPersonalDetails = () => {
    alert("You clicked on a personal details card!");
  };

  return (
    <div className="container">
      <h1>Personal Details Card Demo</h1>
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <PersonalDetailsCard
            detailName={"Billing Address"}
            onClick={props.alerts ? AlertPersonalDetails : undefined}
          ></PersonalDetailsCard>
        </div>
        <div className="col-md-auto">
          <PersonalDetailsCard
            detailName={"Shipping Address"}
            onClick={props.alerts ? AlertPersonalDetails : undefined}
            name={"John Smith"}
            address={"Rockford Mountain Lane, 2179"}
            country={"us"}
            state={"nc"}
            zipCode={"27514"}
          ></PersonalDetailsCard>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsCardDemo;
