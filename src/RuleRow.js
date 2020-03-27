import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {

  render() {
    let {score, name, description} = this.props
    let active = (score === undefined);
    return (
      <tr className={`RuleRow RuleRow-${active ? 'active' : 'disabled'}`} onClick={active ? this.props.doScore : null}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{active ? description : score}</td>
      </tr>
    )
  }
}

export default RuleRow;