import React from 'react';
import PropTypes from 'prop-types';

function Footer({activeCount, completedCount, handleFilter, handleClear}) {
  const items = activeCount === 1 ? 'item' : 'items';
  const completedStyle = {
    display: completedCount ? 'block' : 'none'
  };

  return (
    <footer className="footer">
      <span
        className="todo-count">{activeCount} {items} left</span>
      <ul className="filters">
        <li>
          <a onClick={() => handleFilter('')} href="#/" className="selected">All</a>
        </li>
        <li>
          <a onClick={() => handleFilter('active')} href="#/active">Active</a>
        </li>
        <li>
          <a onClick={() => handleFilter('completed')} href="#/completed">Completed</a>
        </li>
      </ul>
      <button
        style={completedStyle}
        className="clear-completed"
        onClick={() => handleClear()}>Clear Completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  activeCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  handleFilter: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
};


export default Footer;