import React, {Component} from 'react';
import { PropTypes } from 'prop-types';

class Footer extends Component {
  render() {
    const items = this.props.activeCount === 1 ? 'item' : 'items';
    const completedStyle = {
      display: this.props.completedCount ? 'block' : 'none'
    };
    return (
      <footer className="footer">
        <span
          className="todo-count">{this.props.activeCount} {items} left</span>
        <ul className="filters">
          <li>
            <a onClick={() => this.props.handleFilter('')} href="#/"
               className="selected">All</a>
          </li>
          <li>
            <a onClick={() => this.props.handleFilter('active')}
               href="#/active">Active</a>
          </li>
          <li>
            <a onClick={() => this.props.handleFilter('completed')}
               href="#/completed">Completed</a>
          </li>
        </ul>
        <button
          style={completedStyle}
          onClick={() => this.props.handleClear()}
          className="clear-completed">Clear completed
        </button>
      </footer>
    )
  }
}

Footer.propTypes = {
  list: PropTypes.array.isRequired,
  handleFilter: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  activeCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired
};

export default Footer;
