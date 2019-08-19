import React from 'react';
import Toggle from './Toggle';
import PropTypes from 'prop-types';

function TodoList({list, handleChange, handleDestroy}) {
  const filteredItems = list.itemsList;

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox"/>
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {filteredItems.map(
          function (item, index) {
            return (
              <li key={index}
                  className={item.state === 'completed' ? 'completed' : ''}>
                <div className="view">
                  <Toggle value={item}
                    handleChange={(index) => handleChange(index)}
                    handleDestroy={(index) => handleDestroy(index)}
                    index={index}/>
                </div>
              </li>
            )
          }
        )}
      </ul>
    </section>
  )
}

TodoList.propTypes = {
  list: PropTypes.object.isRequired
};

export default TodoList;