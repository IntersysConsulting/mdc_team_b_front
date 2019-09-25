import React, { useState } from "react";
import CartContainer from "../../containers/cart/demo-cart.js";
import { Form, Row, Col } from "react-bootstrap";
// import CartContainer as Cart from ".../container/cart/cart.js"; // This line doesn't quite work

const CartDemo = props => {
  const CartClick = () => {
    alert("You clicked on a cart!");
  };

  const [cartDemoState, setCartDemoState] = useState({ items: 0 });

  // const elements = [-100, 0, 1, 2, 3, 5, 6, 7, 8, 9, 12345];
  // const items = [];

  // for (const [k, v] of elements.entries()) {
  //   items.push(
  //     <div className="col">
  //       <CartContainer
  //         key={k}
  //         value={v}
  //         onClick={props.alerts ? CartClick : undefined}
  //       ></CartContainer>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>Cart Demo</h1>
      {/* <h5>
        Demo is currently broken because of container implementation (Review the
        code of /components/cart/demo.jsx)
      </h5> */}
      {/* <div className="row">{items}</div> */}
      <Form>
        <Form.Group
          className="row justify-content-md-center"
          controlId="CartControl"
        >
          <Col sm="3">
            <Form.Text className="text-indigo" style={{ fontSize: 24 }}>
              Items on the cart{" "}
            </Form.Text>
          </Col>
          <Col sm="2">
            <Form.Control
              type="text"
              size="lg"
              value={cartDemoState.items}
              onChange={e =>
                setCartDemoState({
                  items: e.target.value
                })
              }
            ></Form.Control>
          </Col>
          <Col sm="1">
            <CartContainer value={cartDemoState.items}></CartContainer>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default CartDemo;
