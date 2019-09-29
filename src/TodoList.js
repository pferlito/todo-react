import React from 'react';
import Toggle from './Toggle';
import ToggleAll from './ToggleAll';
import PropTypes from 'prop-types';


function TodoList({state, handleStateChange, handleDestroy, handleToggleAll}) {
  const filteredItems = state.itemsList.filter(item => state.filter ?
    item.state === state.filter : true);

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
                    handleChange={(index) => handleStateChange(index)}
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
  state: PropTypes.object.isRequired,
  handleStateChange: PropTypes.func.isRequired,
  handleDestroy: PropTypes.func.isRequired,
  handleToggleAll: PropTypes.func.isRequired,
};

export default TodoList;