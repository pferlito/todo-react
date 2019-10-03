import React, {useContext} from 'react';
import Toggle from './Toggle';
import ToggleAll from './ToggleAll';
import PropTypes from 'prop-types';
import TodoContext from './TodoContext';


function TodoList({handleTextChange, handleStateChange, handleDestroy, handleToggleAll}) {
  const state = useContext(TodoContext);

  const filteredItems = state.itemsList.filter(item => state.filter ?
    item.state === state.filter : true);

  /**
   * Change handler.
   * @param e object
   * @param index number
   */
  function doTextChange(e, index) {
    const newValue = e.target.value;
    handleTextChange(index, newValue);
  }

  /**
   * Blur handler. Puts the item in active or view mode.
   * @param index number
   */
  function handleBlur(index) {
    handleStateChange(index,'active');
  }

  /**
   * Double-click handler. Puts the item in edit mode.
   * @param index number
   */
  function handleDoubleClick(index) {
    handleStateChange(index, 'editing');
  }

  /**
   * Toggle state of an item.
   * @param index number
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
                  onChange={(e) => doTextChange(e, index)}
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
  handleTextChange: PropTypes.func.isRequired,
  handleStateChange: PropTypes.func.isRequired,
  handleDestroy: PropTypes.func.isRequired,
  handleToggleAll: PropTypes.func.isRequired,
};

export default TodoList;