import Cart, { useState } from "../../components/cart/cart";
import React from "react";

// This container must have the logic

const CartContainer = props => {
  const [cartState, setCartState] = useState({ value: props.value });

  const toSmallText = x => {
    if (x <= 0) {
      return "";
    } else if (x > 9) {
      return "9+";
    } else {
      return x;
    }
  };

  return (
    <Cart
      displayText={toSmallText(cartState.value)}
      tooltipText={cartState.value}
      isOverNine={cartState.value > 9}
      onClick={props.onClick}
    ></Cart>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      return dispatch(fetchCartSuccess());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

// I am also not sure what I should be exporting here, since the two functions above were done by Christian and I fear I may break something by changing this.
