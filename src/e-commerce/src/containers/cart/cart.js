import Cart from '../../components/cart/cart';

// This container must have the logic

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      return dispatch(fetchCartSuccess());
    },
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
