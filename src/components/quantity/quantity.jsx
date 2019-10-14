import React from "react";
import "./quantity.css";
import { setInterval } from "timers";

const QuantityButton = props => {
  return (
    <div
      className={"value-button " + props.className}
      id={props.idVal}
      onClick={() => props.onClick()}
    >
      {props.symbol}
    </div>
  );
};

class Quantity extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: props.quantity,
      isDebouncing: false,
      debounceTimer: 0
    }
    setInterval(()=>{
      if(this.state.isDebouncing){
        if(this.state.debounceTimer < 800 ){
          this.setState({
            debounceTimer: this.state.debounceTimer+100
          });
        }
        else{
          this.setState({
            isDebouncing:false,
            debounceTimer: 0
          })
          this.props.onChange(this.props.id, this.state.value);          
        }
      }
    },100)
  }

  decrease = () => {
    this.setState({
      isDebouncing: true,
      debounceTimer: 0
    });

    let val = this.state.value;
    if(typeof(val) !== 'number') {
      val = 0;
    }
    val < 1 ? (val = 0) : (val--);
    if(val === 0) {
      alert("You can't have 0 of a product, use delete instead");
      val = 1;
    }
    this.setState({ value: val });
  };

  increase = () => {
    this.setState({
      isDebouncing: true,
      debounceTimer: 0
    });

    let val = this.state.value;
    if(typeof(val) !== 'number') {
      val = 1;
    }
    val > 99999 ? (val = 99999) : (val++);
    this.setState({ value: val });
  };

  changeVal = event => {
    this.setState({
      isDebouncing: true,
      debounceTimer: 0
    });

    let val = parseInt(event.target.value, 10);
    if(isNaN(val) || val <= 0) {
      alert("You can't have 0 of a product, use delete instead");
      val = 1;
    }
    if(val > 99999)
      val = 99999;
    else if (val < 0)
      val = 0;
    this.setState({ value: val });
  };

  render() {
    return (
      <div className="quantity-container">
        <QuantityButton
          className="value-button-left bg-dark  text-white"
          idVal="decrease"
          symbol="-"
          onClick={this.decrease}
        />
        <input
          className="border-dark border-top border-bottom"
          type="number"
          id="number"
          value={this.state.value}
          onChange={this.changeVal}
        />
        <QuantityButton
          className="value-button-right bg-dark text-white"
          idVal="increase"
          symbol="+"
          onClick={this.increase}
        />
      </div>
    );
  }

};

export default Quantity;
