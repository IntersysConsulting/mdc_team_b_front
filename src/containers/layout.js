import React,{ useEffect } from 'react';
import { Route, Switch, withRouter  } from 'react-router-dom'
import { useSelector } from "react-redux";
import WorkInProgress from '../views/work-in-progress/in-progress'
import NotFound from '../views/not-found/404'
import LayoutCustomer from '../components/layout/layout-customer';
import AdminLogin from "../views/AdminLogin/AdminLogin";
import Signup from "../views/Signup/Signup"
import LayoutAdmin from '../components/layout/layout-admin';
import CartProductDemo from '../components/cart-product/demo';
import UserLogin from '../views/UserLogin/UserLogin';
import Storefront from '../views/storefront/storefront';
import DemoImage from '../components/upload-image/demo-image';


const LayoutContainer = (props) => {
    let layout = null;
    const accessLevelState = useSelector(state => state.authenticationState);

    useEffect(() => {
      if(accessLevelState.role === "admin"){
        props.history.push("/admin")
      } 
      if(accessLevelState.role === "registeredUser"){
        props.history.push("/image")
      } 
      console.log(accessLevelState)
    },[accessLevelState, props.history])

    /* Route "/" for customer should lead to storefront. "/admin" should lead to dashboard.*/
   if(accessLevelState.role === "admin"){
    layout = (
      <LayoutAdmin accessLevelState = {accessLevelState}>
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
    }else {
    layout = (
      <LayoutCustomer accessLevelState = {accessLevelState}>
        <Switch>
          <Route path = "/" exact component={Storefront} />
          <Route path = "/image" exact component={DemoImage} />
          <Route path = "/cart" exact component={CartProductDemo} />
          <Route path = "/product/*" exact component={WorkInProgress} />
          <Route path = "/account" exact component={WorkInProgress} />
          <Route path = "/summary" exact component={WorkInProgress} />
          <Route path = "/billing-info" exact component={WorkInProgress} />
          <Route path = "/shipping-info" exact component={WorkInProgress} />
          <Route path = "/orders" exact component={WorkInProgress} />
          <Route path = "/login" exact component={UserLogin} />
          <Route path = "/login-admin" exact component={AdminLogin} />
          <Route path = "/sign-up" exact component={Signup} />
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
  
const layoutWithRouter = withRouter(LayoutContainer)
export default layoutWithRouter;
