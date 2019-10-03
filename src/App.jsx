import React, { useState } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import LayoutContainer from "./containers/layout";

const App = ({ store }) => {
  //possible roles: "registeredUser", "guest", "admin", "external"
  const [accessLevelState] = useState({
    role: "registeredUser",
    name: "John Smith",
    login: true
  });

  //Once you finish your views, you should import them inside layout container, and replace component={DemoSomething}
  //with component={YourImport} under the corresponding route
  return (
    <Provider store={store}>
      <LayoutContainer accessLevelState={accessLevelState}></LayoutContainer>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
