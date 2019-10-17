import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from './store';
import LayoutContainer from "./containers/layout";
import LoadingView from "./components/LoadingView/LoadingView";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ store }) => {

  //Once you finish your views, you should import them inside layout container, and replace component={DemoSomething}
  //with component={YourImport} under the corresponding route
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <ToastContainer />
        <LayoutContainer/>
      </PersistGate>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;

