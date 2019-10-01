import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import WorkInProgress from '../views/work-in-progress/in-progress'
import AdminLogin from "../views/AdminLogin/AdminLogin";
import UserLogin from "../views/UserLogin/UserLogin";
import NotFound from '../views/not-found/404'
import LayoutCustomer from '../components/layout/layout-customer';
import LayoutAdmin from '../components/layout/layout-admin';
import CartProductDemo from '../components/cart-product/demo';


const LayoutContainer = (props) => {

  let layout = null;


    /* Route "/" for customer should lead to storefront. "/admin" should lead to dashboard.*/
  if(props.role === "external") {
    layout = (
      <Switch>
        <Route path = "/login" exact component={UserLogin} />
        <Route path = "/admin/login" exact component={AdminLogin} />
      </Switch>
    )
  } else if(props.role === "admin"){
    layout = (
      <LayoutAdmin accessLevelState = {props.role}>
        <Switch> 
          <Route path = "/admin" exact component={WorkInProgress} /> 
          <Route path = "/admin/products" exact component={WorkInProgress} />
          <Route path = "/admin/orders" exact component={WorkInProgress} />
          <Route path = "/admin/staff" exact component={WorkInProgress} />
          <Route path = "/admin/banners" exact component={WorkInProgress} />
          <Route path = "/*" exact component={WorkInProgress} />
        </Switch>
      </LayoutAdmin>
    )
  } else {
    layout = (
      <LayoutCustomer accessLevelState = {props.accessLevelState}>
        <Switch>
          <Route path = "/" exact component={WorkInProgress} />
          <Route path = "/cart" exact component={CartProductDemo} />
          <Route path = "/account" exact component={WorkInProgress} />
          <Route path = "/summary" exact component={WorkInProgress} />
          <Route path = "/billing-info" exact component={WorkInProgress} />
          <Route path = "/shipping-info" exact component={WorkInProgress} />
          <Route path = "/orders" exact component={WorkInProgress} />
          <Route path = "/login" exact component={WorkInProgress} />
          <Route path = "/sign-up" exact component={WorkInProgress} />
          <Route path = "/*" exact component={NotFound} />
        </Switch>
      </LayoutCustomer>
    )
  }

    return (layout)
}

const mapStateToProps = (state) =>  {
  return {
    role: state.authenticationState.role
  }
}

export default connect(mapStateToProps)(LayoutContainer);
