import React from 'react';

const Sigin = props => {

  let submit = (values) => {
    props.signInAction(values, props.history)
  }

  let errorMessage = () => {
    if (props.errorMessage) {
      return (
        <div>
          {this.props.errorMessage}
        </div>
      )
    }
  }
  return (
    <div className={"form"}>
      <div className="container">
        <h3>Sig In</h3>
        <form onSubmit={ props.handleSubmit(submit)}>
          <input type="text" value="Submit"/>
          <input type="text" value="Submit"/>
          <button type="submit"></button>
        </form>
      </div>
      {errorMessage()}
    </div>
  )
};

mapStateToProps(state) {
  ruturn { errorMessage: state.auth.error}
}

const reduxFormSigin = reduxForm({
  form: 'sigin'
})(Sigin)

export default connect(mapStateToProps, {signInAction})(reduxFormSigin);
