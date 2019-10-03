import React from 'react';
import { Route, Switch } from 'react-router-dom'
import WorkInProgress from '../views/work-in-progress/in-progress'
import NotFound from '../views/not-found/404'
import LayoutCustomer from '../components/layout/layout-customer';
import LayoutAdmin from '../components/layout/layout-admin';
import CartProductDemo from '../components/cart-product/demo';
import UserLogin from '../views/UserLogin/UserLogin';


const LayoutContainer = (props) => {

    let layout = null;


    /* Route "/" for customer should lead to storefront. "/admin" should lead to dashboard.*/
   if(props.accessLevelState.role === "admin"){
    layout = (
      <LayoutAdmin accessLevelState = {props.accessLevelState}>
        <Switch> 
          <Route path = "/admin" exact component={WorkInProgress} /> 
          <Route path = "/admin/products" exact component={WorkInProgress} />
          <Route path = "/admin/orders" exact component={WorkInProgress} />
          <Route path = "/admin/staff" exact component={WorkInProgress} />
          <Route path = "/admin/banners" exact component={WorkInProgress} />
          <Route path = "/*" exact component={NotFound} />
        </Switch>
      </LayoutAdmin>
    )
    }else {
    layout = (
      <LayoutCustomer accessLevelState = {props.accessLevelState}>
        <Switch>
          <Route path = "/" exact component={WorkInProgress} />
          <Route path = "/cart" exact component={CartProductDemo} />
          <Route path = "/product/*" exact component={WorkInProgress} />
          <Route path = "/account" exact component={WorkInProgress} />
          <Route path = "/summary" exact component={WorkInProgress} />
          <Route path = "/billing-info" exact component={WorkInProgress} />
          <Route path = "/shipping-info" exact component={WorkInProgress} />
          <Route path = "/orders" exact component={WorkInProgress} />

          <Route path = "/login" exact component={UserLogin} />
          <Route path = "/login-admin" exact component={WorkInProgress} />
          <Route path = "/sign-up" exact component={WorkInProgress} />
          <Route path = "/help" exact component={WorkInProgress} />
          <Route path = "/conditions" exact component={WorkInProgress} />
          <Route path = "/privacy" exact component={WorkInProgress} />
          <Route path = "/*" exact component={NotFound} />
        </Switch>
      </LayoutCustomer>
    )
  }

    return (layout)
}
  
  export default LayoutContainer;
