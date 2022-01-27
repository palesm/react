import React, { Component } from 'react';
import '../css/RuleRow.css'

class RuleRow extends Component {
  render() {
    const disabled = this.props.score !== undefined;
    return (
      <tr
          className={`RuleRow RuleRow-${disabled ? 'disabled' : 'active' }`}
          onClick={disabled ? null : this.props.doScore}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;