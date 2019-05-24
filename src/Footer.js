import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count"></span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>
          <li>
            <a onClick={() => this.props.handleFilter('active')} href="#/active">Active</a>
          </li>
          <li>
            <a onClick={() => this.props.handleFilter('completed')} href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}

export default Footer;