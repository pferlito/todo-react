import React, {Component} from 'react';
import Toggle from './Toggle.js';

class TodoList extends Component {
  handleChange(index) {
    console.log(index);
  }
  render() {
    let self = this;
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.items.map(
            function (value, index) {
              return (
                <li key={index} className={value.state === 'completed' ? 'completed' : ''}>
                  <div className="view">
                    <Toggle value={value} handleChange={self.handleChange} index={index}/>
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