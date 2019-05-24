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
  render() {
    return (
      <section className="todoapp">
        <Header/>
        <TodoList list={this.state} handleDestroy={this.handleDestroy} />
        <Footer/>
      </section>
    )
  }
}

export default App;
