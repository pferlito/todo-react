import React, {Component} from 'react';

class Toggle extends Component {
  handleChange = () => {
    let newState;
    if (this.props.value.state === 'completed') {
      newState = 'active';
    } else {
      newState = 'completed';
    }
    this.props.handleChange(this.props.index, newState)
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
        <label>{this.props.value.text}</label>
        <button className="destroy" onClick={this.handleDestroy}></button>
      </React.Fragment>
    )
  }
}

export default Toggle;
