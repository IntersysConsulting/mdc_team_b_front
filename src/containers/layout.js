import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import WorkInProgress from "../views/work-in-progress/in-progress";
import NotFound from "../views/not-found/404";
import LayoutCustomer from "../components/layout/layout-customer";
import AdminLogin from "../views/AdminLogin/AdminLogin";
import Signup from "../views/Signup/Signup";
import LayoutAdmin from "../components/layout/layout-admin";
import CartView from "../views/cart-view/cart-view";
import UserLogin from "../views/UserLogin/UserLogin";
import Storefront from "../views/storefront/storefront";
import Product from "../views/single-product/product";
import DemoImage from "../components/upload-image/demo-image";
import { validateAuthentication, requestGuest } from "../api/authenticationApi";

const LayoutContainer = props => {
  let layout = null;
  const accessLevelState = useSelector(state => state.authenticationState);
  const token = localStorage.getItem("access_token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(validateAuthentication());
    }
  }, [dispatch, token]);

  /* Route "/" for customer should lead to storefront. "/admin" should lead to dashboard.*/
  if (accessLevelState.role === "admin") {
    layout = (
      <LayoutAdmin accessLevelState={accessLevelState}>
        <Switch>
          <Route path="/admin" exact component={WorkInProgress} />
          <Route path="/admin/products" exact component={WorkInProgress} />
          <Route path="/admin/orders" exact component={WorkInProgress} />
          <Route path="/admin/staff" exact component={WorkInProgress} />
          <Route path="/admin/banners" exact component={WorkInProgress} />
          <Route path="/*" exact component={NotFound} />
        </Switch>
      </LayoutAdmin>
    );
  } else {
    layout = (
      <LayoutCustomer accessLevelState={accessLevelState}>
        <Switch>
          <Route path="/cart" exact component={CartView} />
          <Route path="/" exact component={Storefront} />
          <Route path="/product/*" exact component={Product} />
          <Route path="/account" exact component={WorkInProgress} />
          <Route path="/summary" exact component={WorkInProgress} />
          <Route path="/billing-info" exact component={WorkInProgress} />
          <Route path="/shipping-info" exact component={WorkInProgress} />
          <Route path="/orders" exact component={WorkInProgress} />
          <Route path="/login" exact component={UserLogin} />
          <Route path="/login-admin" exact component={AdminLogin} />
          <Route path="/sign-up" exact component={Signup} />
          <Route path="/help" exact component={WorkInProgress} />
          <Route path="/conditions" exact component={WorkInProgress} />
          <Route path="/privacy" exact component={WorkInProgress} />
          <Route path="/*" exact component={NotFound} />
          <Route path="/image" exact component={DemoImage} />
        </Switch>
      </LayoutCustomer>
    );
  }

  return layout;
};

const layoutWithRouter = withRouter(LayoutContainer);
export default layoutWithRouter;
