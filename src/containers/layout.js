import React from 'react';
import { Route, Switch } from 'react-router-dom'
import WorkInProgress from '../views/work-in-progress/in-progress'
import NotFound from '../views/not-found/404'
import LayoutCustomer from '../components/layout/layout-customer';
import LayoutAdmin from '../components/layout/layout-admin';
import CartView from '../views/cart-view/cart-view';
import Storefront from '../views/storefront/storefront'
import SingleProduct from '../views/single-product/product'
import UserLogin from '../views/UserLogin/UserLogin';
import AdminLogin from "../views/AdminLogin/AdminLogin";
import Signup from "../views/Signup/Signup"
import Help from '../views/Contactus/Contactus'


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
          <Route path = "/" exact component={Storefront} />
          <Route path = "/cart" exact component={CartView} />
          <Route path = "/product/*" exact component={SingleProduct} />
          <Route path = "/account" exact component={WorkInProgress} />
          <Route path = "/summary" exact component={WorkInProgress} />
          <Route path = "/billing-info" exact component={WorkInProgress} />
          <Route path = "/shipping-info" exact component={WorkInProgress} />
          <Route path = "/orders" exact component={WorkInProgress} />

          <Route path = "/login" exact component={UserLogin} />
          <Route path = "/login-admin" exact component={AdminLogin} />
          <Route path = "/sign-up" exact component={Signup} />
          <Route path = "/help" exact component={Help} />
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