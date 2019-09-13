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
            detail={
              <p>
                John Smith, 2179 <br /> Rockford Mountain Lane. <br /> (NC),
                27514
              </p>
            }
          ></PersonalDetailsCard>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsCardDemo;
