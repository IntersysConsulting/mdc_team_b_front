import React, {useState} from 'react';
import DemoButton from './demos/demo-button';
import DemoStatus from './demos/demo-status';
import DemoCards from './demos/demo-cards';
import DemoPrice from './demos/demo-price';
import DemoQuantity from './demos/demo-quantity';
import DemoLayout from './demos/demo-layout';
import DemoLogin from './demos/demo-login';
import DemoSwitch from './demos/demo-switch';
import CheckboxDemo from './demos/demo-checkbox';
import DemoProduct from './demos/demo-product';
import LayoutCustomer from './components/layout/layout-customer';
import LayoutAdmin from './components/layout/layout-admin';

const App = () => {

  return (
    <div className="App">
      <DemoLayout></DemoLayout>
    </div>
  );
};

export default App;
