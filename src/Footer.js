import React from 'react';
import Header from "./Header";

function Footer({activeCount, completedCount, handleFilter}) {
  const items = activeCount === 1 ? 'item' : 'items';

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
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

Footer.propTypes = {

};


export default Footer;