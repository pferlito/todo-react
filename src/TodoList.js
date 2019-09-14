import React from 'react';
import Toggle from './Toggle';
import ToggleAll from './ToggleAll';
import PropTypes from 'prop-types';


function TodoList({list, handleChange, handleDestroy, handleToggleAll}) {
  const filteredItems = list.itemsList;

  return (
    <section className="main">
      <ToggleAll
        handleToggleAll={() => handleToggleAll()}
      />
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