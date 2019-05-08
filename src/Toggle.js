import React, {Component} from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
  }
  handleChange() {
    this.props.handleChange(this.props.index);
  }

  render() {
    let self = this;
    return (
      <React.Fragment>
        <input className="toggle"
          type="checkbox"
          checked={this.props.value.state === 'completed'}
          onChange={() => this.handleChange()}
        />
        <label>{this.props.value.text}</label>
        <button className="destroy"></button>
      </React.Fragment>
    )
  }
}

export default Toggle;