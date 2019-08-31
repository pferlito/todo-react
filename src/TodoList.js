import React, {Component} from 'react';
import Toggle from './Toggle.js';
import ToggleAll from './ToggleAll.js';

class TodoList extends Component {
  handleDoubleClick(index) {
    this.props.handleStateChange(index, 'editing');
  }
  handleTextChange(e, index) {
    this.props.handleTextChange(index, e.target.value);
  }
  handleBlur(index) {
    this.props.handleStateChange(index, 'active');
  }
  // A single click causes a blur to the item being edited.
  handleToggleClick(index) {
    const editedIndex = this.props.list.items.findIndex((el) => {
      return el.state === 'editing'
    });
    if (editedIndex > -1) {
      this.handleBlur(editedIndex);
    }
  }
  render() {
    let filteredItems = this.props.list.items;
    // filter items according to selected filter
    if (this.props.list.filter) {
      filteredItems = this.props.list.items.filter((el, idx) => {
        return el.state === this.props.list.filter;
      });
    }
    const self = this;
    return (
      <section className="main">
        <ToggleAll
          handleToggleAll={() => self.props.handleToggleAll()}
        />
        <ul className="todo-list">
          {filteredItems.map(
            function (value, index) {
              return (
                <li key={index}
                    onDoubleClick={(e) => self.handleDoubleClick(index)}
                    className={value.state}>
                  <div className="view">
                    <Toggle value={value}
                      handleStateChange={(index, newState) => self.props.handleStateChange(index, newState)}
                      handleToggleClick={(index) => self.handleToggleClick(index)}
                      handleDestroy={(index) => self.props.handleDestroy(index)}
                      index={index}/>
                  </div>
                  {value.state === 'editing' &&
                  <input
                    type="text"
                    className="edit"
                    onChange={(e) => self.handleTextChange(e,index)}
                    onBlur={(e) => {self.handleBlur(index)}}
                    defaultValue={value.text}
                  />}
                </li>
              )
            }
          )}
        </ul>
      </section>
    )
  }
}

export default TodoList;
