import React, {Component} from 'react';
import Toggle from './Toggle.js';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = (index) => {
    const states = ['active','completed'];
    const currentState = this.props.items[index].state;
    const currentStateIndex = states.indexOf(currentState);
    const newState = currentStateIndex ? 0 : 1;
    const mutatedState = [...this.props.items];
    mutatedState[index].state = states[newState];
    this.setState(mutatedState);
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