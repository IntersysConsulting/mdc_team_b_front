import React, { useState } from "react";
import LayoutAdmin from "../components/layout/layout-admin";
import DemoCards from "../demos/demo-cards";

const LayoutDemo = props => {
  const [accessLevelState] = useState({
    accesses: [
      { role: "registeredUser", name: "John Smith" },
      { role: "guest", name: "Guest" },
      { role: "admin", name: "Richard Nichols" }
    ]
  });

  return (
    <LayoutAdmin accessLevelState={accessLevelState}>
      <DemoCards />
    </LayoutAdmin>
  );
};

export default LayoutDemo;
