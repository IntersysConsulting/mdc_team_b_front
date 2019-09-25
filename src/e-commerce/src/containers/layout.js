import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom'
import WorkInProgress from '../views/work-in-progress/in-progress'
import NotFound from '../views/not-found/404'
import LayoutCustomer from '../components/layout/layout-customer';
import LayoutAdmin from '../components/layout/layout-admin';


const LayoutContainer = (props) => {

    let layout = null;


    /* Route "/" for customer should lead to storefront. "/admin" should lead to dashboard.
    */
    if(props.accessLevelState.role == "admin"){
        layout = (
            <LayoutAdmin accessLevelState = {props.accessLevelState}>
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
    }
    else{
        layout = (
            <LayoutCustomer accessLevelState = {props.accessLevelState}>
                <Switch>
                    <Route path = "/" exact component={WorkInProgress} />
                    <Route path = "/cart" exact component={WorkInProgress} />
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
  
  export default LayoutContainer;