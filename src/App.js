import React, {Component} from 'react';
import './App.css';
import TodoList from './TodoList.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
  state = {
    items: [
      {text: 'one', state: 'completed'},
      {text: 'two', state: 'active'},
    ]
  };
  handleAdd(value) {
    let mutatedState = {...this.state};
    mutatedState.items.push({text: value, state: 'active'});
    this.setState(mutatedState);
  }

  render() {
    return (
      <section className="todoapp">
        <Header list={this.state} handleAdd={(value) => this.handleAdd(value)}/>
        <TodoList list={this.state}/>
        <Footer/>
      </section>
    )
  }
}

export default App;
