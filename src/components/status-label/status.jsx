import React from 'react';
import './status.css';
import awaiting from './clock.png';
import attention from './attention.png';


const Status = ( props ) => {

    let statusLabel = null, addIcon = null, component = null;

    switch(props.status.status){
        case('Awaiting Payment'):
        case('Awaiting Fullfillment'):
            statusLabel = "PreOrderSteps Status";
            addIcon = awaiting;
        break;
        case('Awaiting Shipment'):
            statusLabel = "ShippingSteps Status";
            addIcon = awaiting;
        break;
        case('Shipped'):
            statusLabel = "ShippingSteps Status";
        break;
        case('Partially Shipped'):
            statusLabel = "PartiallyShipped Status";
        break;
        case('Refunded'):
            statusLabel = "Refunded Status";
        break;
        case('Partially Refunded'):
            statusLabel = "PartiallyRefunded Status";
        break;
        case('Cancelled'):
            statusLabel = "Cancelled Status";
        break;
        case('Declined'):
            statusLabel = "Declined Status";
        break;
        case('Awaiting Pickup'):
            statusLabel = "CompletitionSteps Status";
            addIcon = awaiting;
        break;
        case('Completed'):
            statusLabel = "CompletitionSteps Status";
        break;
        case('Attention Required'):
            statusLabel = "Attention Status";
            addIcon = attention;
        break;
        default:
            statusLabel = "Status";
    }

    if(addIcon != null){
        component = (
            statusLabel = (
            <div className = {statusLabel}> <label> <img src={addIcon} className="LabelIcon" alt=""/> {props.status.status} </label> </div>)
        );
    } else{
        component = (
            statusLabel = (
            <div className = {statusLabel}> <label> {props.status.status} </label> </div>)
        );
    }

    return component;
};

export default Status;