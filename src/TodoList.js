import React, {Component} from 'react';
import Toggle from './Toggle.js';

class TodoList extends Component {
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
        <input id="toggle-all" className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {filteredItems.map(
  function (value, index) {
              return (
                <li key={index} className={value.state === 'completed' ? 'completed' : ''}>
                  <div className="view">
                    <Toggle value = {value}
                      handleChange = {(index) => self.props.handleChange(index)}
                      handleDestroy = {(index) => self.props.handleDestroy(index)}
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
}

export default TodoList;
