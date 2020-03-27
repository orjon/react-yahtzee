import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.toggleLocked(this.props.idx)
  }

  // <i className='fas fa-dice-six'></i>

  render() {
    const die = 'fas fa-dice-' 
    const dieArray=['one','two','three','four','five','six']

    return (
      <i
        className={`Die fas fa-5x fa-dice-${dieArray[this.props.val-1]} ${this.props.locked ? 'Die-locked': ''}`}
        
        onClick={this.handleClick}
      >
      </i>
    );
  }
}

export default Die;
