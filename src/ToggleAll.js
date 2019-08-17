import React, {Component} from 'react';

class ToggleAll extends Component {
  handleToggleAll = (e) => {
    this.props.handleToggleAll();
  };

  render() {
    return (
      <React.Fragment>
        <input id="toggle-all" className="toggle-all" type="checkbox"
               onClick={this.handleToggleAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </React.Fragment>
    )
  }
}

export default ToggleAll;
