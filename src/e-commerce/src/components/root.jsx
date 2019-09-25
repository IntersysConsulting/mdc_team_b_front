import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";
import Test from "../views/test";
import CreatePassword from "../views/CreatePassword/createPassword.jsx";
import Sigin from "../views/Sigin/Sigin.jsx";
import AdminLogin from "../views/AdminLogin/AdminLogin";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/test" component={Test} />
      <Route exact path="/admin/management/createPassword/:email/:code" component={CreatePassword} />
      <Route exact path="/admin/management/sigin/:user/:password" component={Sigin} />
      <Route exact path="/admin/login" component={AdminLogin} />
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
