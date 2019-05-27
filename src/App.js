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

  handleAdd = (value) => {
    let mutatedState = {...this.state};
    mutatedState.items.push({text: value, state: 'active'});
    this.setState(mutatedState);
  };
  handleChange = (index) => {
    const states = ['active','completed'];
    const currentState = this.state.items[index].state;
    const currentStateIndex = states.indexOf(currentState);
    const newState = currentStateIndex ? 0 : 1;
    const mutatedState = [...this.state.items];
    mutatedState[index].state = states[newState];
    this.setState(mutatedState);
  };
  handleDestroy = (index) => {
    const mutatedItems = {...this.state};
    mutatedItems.items.splice(index,1);
    this.setState(mutatedItems);
  };
  handleFilter = (mode) => {
    const mutatedState = {...this.state};
    mutatedState.filter = mode;
    this.setState(mutatedState);
  };

  render() {
    const active = this.state.items.filter(function(el,idx) {
      return el.state === 'active';
    });
    const count = active.length;
    return (
      <section className="todoapp">
        <Header list={this.state}
          handleAdd={this.handleAdd}
        />
        <TodoList list={this.state}
          handleChange={this.handleChange}
          handleDestroy={(index) => this.handleDestroy(index)}
        />
        <Footer list={this.state}
          handleFilter={(mode) => this.handleFilter(mode)}
          count={count}
        />
      </section>
    )
  }
}

export default App;
