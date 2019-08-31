import React, {Component} from 'react';
import Toggle from './Toggle.js';
import ToggleAll from './ToggleAll.js';

class TodoList extends Component {
  handleDoubleClick(index) {
    this.props.handleStateChange(index, 'editing');
  }
  handleChange(e, index) {
    this.props.handleTextChange(index, e.target.value);
  }
  handleBlur(index) {
    this.props.handleStateChange(index, 'active');
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
                            handleChange={(index, newState) => self.props.handleStateChange(index, newState)}
                            handleDestroy={(index) => self.props.handleDestroy(index)}
                            index={index}/>
                  </div>
                  <input
                    onChange={(e) => self.handleChange(e,index)}
                    onBlur={(e) => self.handleBlur(index)}
                    type="text"
                    className="edit"
                    defaultValue={value.text}/>
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
