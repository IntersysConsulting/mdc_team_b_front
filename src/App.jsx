import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import LayoutContainer from "./containers/layout";

const App = ({ store }) => {

  //Once you finish your views, you should import them inside layout container, and replace component={DemoSomething}
  //with component={YourImport} under the corresponding route
  return (
    <Provider store={store}>
      <LayoutContainer/>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;