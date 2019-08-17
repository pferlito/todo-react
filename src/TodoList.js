import React from 'react';
import Toggle from './Toggle';

function TodoList(props) {
  const filteredItems = props.list.items;

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox"/>
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {filteredItems.map(
          function (value, index) {
            return (
              <li key={index}
                  className={value.state === 'completed' ? 'completed' : ''}>
                <div className="view">
                  <Toggle value={value}
                          handleChange={(index) => props.handleChange(index)}
                          handleDestroy={(index) => props.handleDestroy(index)}
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

export default TodoList;