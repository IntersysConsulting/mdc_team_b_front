import React from "react";
import "./checkout-table.css";
import { Table } from "react-bootstrap";
import PriceText from "../price-text/price-text.jsx";

const CheckoutTable = props => {
  const MakeRows = () => {
    return props.products.map(product => {
      return (
        <tr>
          <td>{product.name}</td>
          <td>{(product.price / 100).toFixed(2)}</td>
          <td>{product.qty}</td>
          <td>{(product.total / 100).toFixed(2)}</td>
        </tr>
      );
    });
  };

  const MakeTotal = () => {
    var sumTotal = 0;

    for (var i in props.products) {
      console.log("ST = " + sumTotal + " + " + props.products[i].total);
      sumTotal += Number(props.products[i].total);
    }
    return sumTotal;
  };

  return (
    <div>
      <Table striped borderless className="checkout-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{MakeRows()}</tbody>
      </Table>
      <div className="total-holder">
        <p>
          Total
          <PriceText price={MakeTotal()}></PriceText>
        </p>
      </div>
    </div>
  );
};

export default CheckoutTable;
