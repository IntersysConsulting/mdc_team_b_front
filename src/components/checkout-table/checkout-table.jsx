import React from "react";
import "./checkout-table.css";
import { Table } from "react-bootstrap";
import PriceText from "../price-text/price-text.jsx";

const CheckoutTable = props => {
  const MakeRows = () => {
    return props.products.map(product => {
      return (
        <tr>
          <td className="text-left">{product.name}</td>
          <td>{"$" + (product.price / 100).toFixed(2)}</td>
          <td>{product.qty}</td>
          <td className="text-right">
            {"$" + (product.total / 100).toFixed(2)}
          </td>
        </tr>
      );
    });
  };

  const MakeTotal = () => {
    var sumTotal = 0;

    for (var i in props.products) {
      sumTotal += Number(props.products[i].total);
    }
    return sumTotal;
  };

  return (
    <div className="checkout-table-container">
      <Table striped borderless className="checkout-table">
        <thead>
          <tr>
            <th className="text-left">Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th className="text-right">Total</th>
          </tr>
        </thead>
        <tbody>{MakeRows()}</tbody>
      </Table>
      <div className="total-container">
        <span className="total-label"> Total </span>{" "}
        <span className="total-number">
          <PriceText price={MakeTotal()}></PriceText>
        </span>
      </div>
    </div>
  );
};

export default CheckoutTable;
