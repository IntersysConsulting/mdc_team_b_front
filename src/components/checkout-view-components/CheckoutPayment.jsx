import React from "react";
import PaymentCard from "../payment-card/payment-card";
import CheckoutTitle from "./CheckoutTitle";
import AcceptButton from "../accept-button/accept-button";
import BackPageButton from "../back-page-button/back-page-button";
// Feel free to override any / all of this page except for one tiny change

const CheckoutPayment = props => {
  return (
    <div>
      <div className="offset-1 checkout-title col-8 offset-2">
        <CheckoutTitle currentView={props.currentView}></CheckoutTitle>
      </div>
      <div className="col-8 offset-2">
        <div id="payment-cards-table" className="row">
          <div id="cards-table-left-side" className="col-xs-10 col-lg-5">
            <PaymentCard
              id={"91e50df9-66bf-4bf2-8a60-02b8523d627f"}
              number="**** **** **** 2312"
              owner="John Smith"
            ></PaymentCard>
            <PaymentCard
              id={"5c45cedc-352d-4941-9c8f-0b376b20791c"}
              number="**** **** **** 1432"
              owner="Clara Smith"
            ></PaymentCard>
            <PaymentCard
              id={"d0c7f47e-4bb7-45cc-afe5-8807a401ba06"}
              number="**** **** **** 1875"
              owner="John Smith"
            ></PaymentCard>
          </div>
          <div className="col-xs-2 col-md-2 col-lg-2"></div>
          <div id="cards-table-right-side" className="col-xs-10 col-lg-5">
            <PaymentCard
              id={"1bad8ce4-fd6a-4d6c-96fc-9d2c07f7c5cf"}
              number="**** **** **** 9082"
              owner="Elizabet Winter"
            ></PaymentCard>
            <PaymentCard
              id={"58dd2a27-c0c0-4921-934c-e205b3cd5947"}
              number="**** **** **** 5567"
              owner="Clara Smith"
            ></PaymentCard>
            <PaymentCard
              id={"fe0a9c66-2567-441e-83e7-8fda39db9c41"}
              number="**** **** **** 5422"
              owner="John Smith"
            ></PaymentCard>
          </div>
        </div>
        <a id="new-card-link" className="text-left" href="/checkout/newcard">
          Add new card
        </a>
        <div className="row col-12">
          <div className="div-back-button col-4">
            <BackPageButton
              className="text-right"
              title="Back"
              text="Shipping and Billing"
              onClick={props.backView}
            />
          </div>
          <div className="text-right button-checkout-right offset-4 col-4">
            <AcceptButton
              className=""
              // the onClick must be props.finishOrder, not updateOrder.
              onClick={props.finishOrder}
              border="primary"
            >
              Finish order
            </AcceptButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPayment;
