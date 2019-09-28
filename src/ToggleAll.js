import React, {Component} from 'react';
import { PropTypes } from 'prop-types';


class ToggleAll extends Component {

  render() {
    return (
      <React.Fragment>
        <input id="toggle-all" className="toggle-all" type="checkbox"
               onClick={this.props.handleToggleAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </React.Fragment>
    )
  }
}

ToggleAll.propTypes = {
  handleToggleAll: PropTypes.func.isRequired,
};

export default ToggleAll;
