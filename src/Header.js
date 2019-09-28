import React, {Component} from 'react';
import { PropTypes } from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  /**
   * Handle item add.
   * @param e
   */
  handleAdd = (e) => {
    e.preventDefault();
    const value = this.input.current.value;
    this.props.handleAdd(value);
    this.input.current.value = '';
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.handleAdd}>
          <input className="new-todo" ref={this.input}
                 placeholder="What needs to be done?"
                 autoFocus=""/>
        </form>
      </header>
    )
  }
}

Header.propTypes = {
  list: PropTypes.array.isRequired,
  handleAdd: PropTypes.func.isRequired
};

export default Header;
