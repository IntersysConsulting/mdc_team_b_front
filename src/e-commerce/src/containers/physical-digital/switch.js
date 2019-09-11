import Switch from "../../components/physical or digital/Switch";

//This container must have the logic

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(fetchCartSuccess())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)