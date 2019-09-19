import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";
import Test from "../views/test";
import CreatePassword from "../views/CreatePassword/createPassword.jsx";
import Sigin from "../views/Sigin/Sigin.jsx";


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/test" component={Test} />
      <Route path="/app" component={App} />
    </Router>
  </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
