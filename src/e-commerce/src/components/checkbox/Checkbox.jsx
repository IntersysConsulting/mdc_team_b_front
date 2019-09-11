// Example of how to insert this component:
// import Checkbox from '../components/checkbox/Checkbox';
// <Checkbox text = "Are you human?" />
//
// This checkbox should return a TRUE or FALSE statement

import React from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        /* set the initial checkboxState to false, which means: unchecked */
        this.state = {
            checkboxState: false
        }
    }


    /* prevent form submission from reloading the page */
    onSubmit(event) {
        event.preventDefault();
    }


    /* callback to change the checkboxState to the opposite 
    boolean value when the checkbox is checked or unchecked */
    toggle(event) {
        this.setState({
            checkboxState: !this.state.checkboxState
        });
    }


    render() {

        const checkbox = (
            <span>
                <input
                    type="checkbox"
                    id={`react-switch-new`}
                    onClick={this.toggle.bind(this)}
                />
                <label>{this.props.text}</label>
                {/* <p>{this.state.checkboxState.toString()}</p> */}
            </span>
        );

        return (
            <div>
                {checkbox}
                {this.state.checkboxState}
            </div>
        );

    }
}

export default Checkbox