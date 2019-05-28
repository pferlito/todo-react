import React, {Component} from 'react';
import './App.css';
import TodoList from './TodoList.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
  state = {
    items: [],
    filter: ""
  };

  /**
   * Handle addition of new item.
   * @param value
   */
  handleAdd = (value) => {
    const mutatedState = {...this.state};
    mutatedState.items.push({text: value, state: 'active'});
    this.setState(mutatedState);
  };
  /**
   * Handle change in completion state.
   * @param index
   */
  handleChange = (index) => {
    const states = ['active','completed'];
    const currentState = this.state.items[index].state;
    const currentStateIndex = states.indexOf(currentState);
    const newState = currentStateIndex ? 0 : 1;
    const mutatedState = [...this.state.items];
    mutatedState[index].state = states[newState];
    this.setState(mutatedState);
  };
  /**
   * Handle removal of item.
   * @param index
   */
  handleDestroy = (index) => {
    const mutatedItems = {...this.state};
    mutatedItems.items.splice(index,1);
    this.setState(mutatedItems);
  };
  /**
   * Handle filter selection.
   * @param mode
   */
  handleFilter = (mode) => {
    const mutatedState = {...this.state};
    mutatedState.filter = mode;
    this.setState(mutatedState);
  };

  render() {
    // get count of active items
    const active = this.state.items.filter((el) => el.state === 'active');
    const count = active.length;
    return (
      <section className="todoapp">
        <Header list={this.state}
          handleAdd={this.handleAdd}
        />
        <TodoList list={this.state}
          handleChange={this.handleChange}
          handleDestroy={this.handleDestroy}
        />
        <Footer list={this.state}
          handleFilter={this.handleFilter}
          count={count}
        />
      </section>
    )
  }
}

export default App;
