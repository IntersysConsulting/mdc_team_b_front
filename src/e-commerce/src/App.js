import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom'
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import LayoutContainer from "./containers/layout"

const App = ({ store }) => {
  //possible roles: "registeredUser", "guest", "admin", "external"
  const [accessLevelState, setAccessLevelState] = useState({ 
    role: "registeredUser",
    name: "John Smith"
  });


  //Once you finish your views, you should import them inside layout container, and replace component={DemoSomething}
  //with component={YourImport} under the corresponding route
  return(
  <Provider store={store}>
    <LayoutContainer accessLevelState = {accessLevelState}></LayoutContainer>
  </Provider>
  ); 
};


App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
