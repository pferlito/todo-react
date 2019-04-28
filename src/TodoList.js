import React, {Component} from 'react';

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.items.map(
            function (value, index) {
              return <li key={index}>{value}</li>
            }
          )}
        </ul>
      </section>
    )
  }
}

export default TodoList;