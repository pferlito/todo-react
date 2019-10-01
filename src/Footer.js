import React from 'react';
import Header from "./Header";

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

};


export default Footer;