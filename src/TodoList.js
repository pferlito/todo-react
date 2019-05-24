import React, {Component} from 'react';
import Toggle from './Toggle.js';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = (index) => {
    const states = ['active','completed'];
    const currentState = this.props.list.items[index].state;
    const currentStateIndex = states.indexOf(currentState);
    const newState = currentStateIndex ? 0 : 1;
    const mutatedState = [...this.props.list.items];
    mutatedState[index].state = states[newState];
    this.setState(mutatedState);
  };
  handleDestroy = (index) => {
    const mutatedItems = {...this.props.list};
    mutatedItems.items.splice(index,1);
    this.setState(mutatedItems);
  };
  render() {
    let self = this;
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.list.items.map(
            function (value, index) {
              return (
                <li key={index} className={value.state === 'completed' ? 'completed' : ''}>
                  <div className="view">
                    <Toggle value = {value}
                      handleChange = {self.handleChange}
                      handleDestroy = {self.handleDestroy}
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