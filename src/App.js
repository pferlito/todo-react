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
    const mutatedState = {...this.state};
    mutatedState.items.splice(index,1);
    this.setState(mutatedState);
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

  /**
   * Handle clear of completed items.
   */
  handleClear = () => {
    const mutatedState = {...this.state};
    mutatedState.items = this.state.items.filter((el) => el.state !== 'completed');
    this.setState(mutatedState);
  };

  render() {
    // get count of active and completed items
    let activeCount = 0;
    let completedCount = 0;
    this.state.items.forEach((el) => {
      if (el.state === 'active') {
        activeCount++;
      } else {
        completedCount++;
      }
    });

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
          handleClear={this.handleClear}
          activeCount={activeCount}
          completedCount={completedCount}
        />
      </section>
    )
  }
}

export default App;
