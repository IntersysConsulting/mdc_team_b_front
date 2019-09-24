import React from "react";
import CheckoutTable from "./checkout-table.jsx";

const CheckoutTableDemo = props => {
  var items = [
    { name: "Bear", price: "1000", qty: "5", total: "5000" },
    { name: "Belt of the lookout", price: "1800", qty: "2", total: "3600" },
    {
      name: "Lance of the bronze dragon",
      price: "50000",
      qty: "3",
      total: "150000"
    },
    { name: "Ring of the performer", price: "20000", qty: "1", total: "20000" }
  ];

  return (
    <div className="col-12">
      <h1>Checkout Table Demo </h1>
      <CheckoutTable products={items}></CheckoutTable>
    </div>
  );
};

export default CheckoutTableDemo;
