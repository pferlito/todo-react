import React from 'react';
import Toggle from './Toggle';
import ToggleAll from './ToggleAll';
import PropTypes from 'prop-types';


function TodoList({state, handleStateChange, handleDestroy, handleToggleAll}) {
  const filteredItems = state.itemsList.filter(item => state.filter ?
    item.state === state.filter : true);

  function handleTextChange(e, index) {
  }

  /**
   * Blur handler. Puts the item in active or view mode.
   * @param index
   */
  function handleBlur(index) {
    handleStateChange(index,'active');
  }

  /**
   * Double-click handler. Puts the item in edit mode.
   * @param index
   */
  function handleDoubleClick(index) {
    handleStateChange(index, 'editing');
  }

  /**
   * Toggle state of an item.
   * @param index
   */
  function doToggle(index) {
    let newState;
    if (filteredItems[index].state === 'completed') {
      newState = 'active';
    } else {
      newState = 'completed'
    }
    handleStateChange(index, newState);
  }

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
                  onDoubleClick={() => handleDoubleClick(index)}
                  className={item.state}>
                <div className="view">
                  <Toggle value={item}
                          handleChange={(index) => doToggle(index)}
                          handleDestroy={(index) => handleDestroy(index)}
                          index={index}/>
                </div>
                {item.state === 'editing' &&
                <input
                  type="text"
                  className="edit"
                  onChange={(e) => handleTextChange(e, index)}
                  onBlur={() => {
                    handleBlur(index)
                  }}
                  defaultValue={item.text}
                />}
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