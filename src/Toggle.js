import React, {Component} from 'react';
import { PropTypes } from 'prop-types';

class Toggle extends Component {
  handleChange = () => {
    let newState;
    if (this.props.value.state === 'completed') {
      newState = 'active';
    } else {
      newState = 'completed';
    }
    this.props.handleStateChange(this.props.index, newState)
  };
  handleDestroy = () => this.props.handleDestroy(this.props.index);

  render() {
    return (
      <React.Fragment>
        <input className="toggle"
          type="checkbox"
          checked={this.props.value.state === 'completed'}
          onChange={this.handleChange}
        />
        <label
          onClick={(e) => this.props.handleToggleClick(this.props.index)}
        >{this.props.value.text}</label>
        <button className="destroy" onClick={this.handleDestroy}></button>
      </React.Fragment>
    )
  }
}

Toggle.propTypes = {
  value: PropTypes.object.isRequired,
  handleStateChange: PropTypes.func.isRequired,
  handleToggleClick: PropTypes.func.isRequired,
  handleDestroy: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Toggle;
